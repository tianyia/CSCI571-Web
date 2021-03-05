from flask import Flask, make_response, request, jsonify
from flask_cors import CORS

import requests
import json

#create Flask's app object
app = Flask(__name__,static_url_path='',static_folder='static')
CORS(app)

@app.route("/index.html")
def send_html:
	return app.send_static_file('TMDB_API.html')

#execute this function when a user visits app domain at given route
#stacking multiple routes here for 1 function is possible
@app.route("/home")
def hello():
	trending_url = "https://api.themoviedb.org/3/trending/movie/week?api_key=8a0b6981e7cb027bc7840f9e005cddc0"
	trending = json.loads(requests.get(trending_url).text)
	today_url = "https://api.themoviedb.org/3/tv/airing_today?api_key=8a0b6981e7cb027bc7840f9e005cddc0"
	today = json.loads(requests.get(today_url).text)

	i = 0
	data = []
	for i in range(5):
		title = trending['results'][i]['title']
		backdrop_path = trending['results'][i]['backdrop_path']
		release_date = trending['results'][i]['release_date']
		data.append({'title':title, 'backdrop_path':backdrop_path, 'release_date':release_date})
	
	for i in range(5):
		name = today['results'][i]['name']
		backdrop_path = today['results'][i]['backdrop_path']
		first_air_date = today['results'][i]['first_air_date']
		data.append({'name':name, 'backdrop_path':backdrop_path, 'first_air_date':first_air_date})

	json_data = jsonify(data)
	return json_data

@app.route("/search/<category>/<keyword>")
def search(category, keyword):
	keyword = keyword.replace(" ", "%20") #replace all occurences of space to %20
	search_url = []
	data = []
	i = 0

	movie_genre = json.loads(requests.get("https://api.themoviedb.org/3/genre/movie/list?api_key=8a0b6981e7cb027bc7840f9e005cddc0&language=en-US").text)
	tv_genre = json.loads(requests.get("https://api.themoviedb.org/3/genre/tv/list?api_key=8a0b6981e7cb027bc7840f9e005cddc0&language=en-US").text)
	movie_genre_dict = {}
	tv_genre_dict = {}

	for item in movie_genre['genres']:
		movie_genre_dict[item['id']] = item['name']
	for item in tv_genre['genres']:
		tv_genre_dict[item['id']] = item['name']

	search_url.append("https://api.themoviedb.org/3/search/movie?api_key=8a0b6981e7cb027bc7840f9e005cddc0&query="+
		keyword +"&language=en-US&page=1&include_adult=false")
	search_url.append("https://api.themoviedb.org/3/search/tv?api_key=8a0b6981e7cb027bc7840f9e005cddc0&language=en-US&page=1&query="+
		keyword + "&include_adult=false")
	search_url.append("https://api.themoviedb.org/3/search/multi?api_key=8a0b6981e7cb027bc7840f9e005cddc0&language=en-US&query="+
		keyword + "&page=1&include_adult=false")

	if category == "movie" or category == "tv":
		if category == "movie":
			raw_data = json.loads(requests.get(search_url[0]).text)
			title = 'title'
			day = 'release_date'
			genre_list = movie_genre_dict
		else:
			raw_data = json.loads(requests.get(search_url[1]).text)
			title = 'name'
			day = 'first_air_date'
			genre_list = tv_genre_dict

		number = min(10, len(raw_data['results']))

		for i in range(number):

			new_genre = ""
			for item in raw_data['results'][i]['genre_ids']:
				new_genre += " " + genre_list[item]

			raw_data['results'][i]['vote_average'] = str(float(raw_data['results'][i]['vote_average'])/2)
			raw_data['results'][i]['vote_count'] = str(raw_data['results'][i]['vote_count'])

			data.append({
				'class': category,
				'id': raw_data['results'][i]['id'],
				'title': raw_data['results'][i][title],
				'overview': raw_data['results'][i]['overview'],
				'poster_path': raw_data['results'][i]['poster_path'],
				'day': raw_data['results'][i][day],
				'vote_average': raw_data['results'][i]['vote_average'],
				'vote_count': raw_data['results'][i]['vote_count'],
				'genre_ids': new_genre
				})
			print(data[i]['title'], data[i]['id'])

	else:
		raw_data = json.loads(requests.get(search_url[2]).text)
		filtered_data = [x for x in raw_data['results'] if x['media_type'] == 'movie' or x['media_type'] == 'tv']
		number = min(10, len(filtered_data))

		for i in range(number):
			if filtered_data[i]['media_type'] == 'movie':
				title = 'title'
				day = 'release_date'
				genre_list = movie_genre_dict
			else:
				title = 'name'
				day = 'first_air_date'
				genre_list = tv_genre_dict

			new_genre = ""
			for item in raw_data['results'][i]['genre_ids']:
				new_genre += " " + genre_list[item]

			filtered_data[i]['vote_average'] = str(float(filtered_data[i]['vote_average'])/2)
			filtered_data[i]['vote_count'] = str(filtered_data[i]['vote_count'])


			data.append({
				'class': filtered_data[i]['media_type'],
				'id': filtered_data[i]['id'],
				'title': filtered_data[i][title],
				'overview': filtered_data[i]['overview'],
				'poster_path': filtered_data[i]['poster_path'],
				'day': filtered_data[i][day],
				'vote_average': filtered_data[i]['vote_average'],
				'vote_count': filtered_data[i]['vote_count'],
				'genre_ids': new_genre
				})
			print(data[i]['title'])

	return jsonify(data)

@app.route("/pop/<category>/<id>")
def get_pop_data(category, id):
	api_key = "api_key=8a0b6981e7cb027bc7840f9e005cddc0"
	movie_url = "https://api.themoviedb.org/3/movie/" + id + "?" + api_key + "&language=en-US"
	movie_credit_url = "https://api.themoviedb.org/3/movie/" + id + "/credits?" + api_key + "&language=en-US&language=en-US"
	movie_review_url = "https://api.themoviedb.org/3/movie/" + id + "/reviews?" + api_key + "&language=en-US&page=1"

	tv_url = "https://api.themoviedb.org/3/tv/" + id + "?" + api_key + "&language=en-US"
	tv_credit_url = "https://api.themoviedb.org/3/tv/" + id + "/credits?" + api_key + "&language=en-US"
	tv_review_url = "https://api.themoviedb.org/3/tv/" + id + "/reviews?" + api_key + "&language=en-US&page=1"

	if category == "movie":
		url = [movie_url, movie_credit_url, movie_review_url]
		title = 'title'
		day = 'release_date'
	else:
		url = [tv_url, tv_credit_url, tv_review_url]
		title = 'name'
		day = 'first_air_date'
	
	raw_detail = json.loads(requests.get(url[0]).text)
	raw_credit = json.loads(requests.get(url[1]).text)
	raw_review = json.loads(requests.get(url[2]).text)

	data = {'detail':{}, 
			'credit':[],
			'review':[]
			}

	data['detail']['title'] = raw_detail[title]
	data['detail']['backdrop_path'] = raw_detail['backdrop_path']
	data['detail']['day'] = raw_detail[day]
	data['detail']['genres'] = " ".join(x['name'] for x in raw_detail['genres'])
	data['detail']['vote_average'] = str(float(raw_detail['vote_average'])/2)
	data['detail']['vote_count'] = str(raw_detail['vote_count'])
	data['detail']['spoken_languages'] = " ".join(x['english_name'] for x in raw_detail['spoken_languages'])
	data['detail']['overview'] = raw_detail['overview']
	data['detail']['link'] = "https://www.themoviedb.org/" + category + "/" + id


	credit_number = min(8, len(raw_credit['cast']))
	for i in range(credit_number):
		data['credit'].append({
			'name':raw_credit['cast'][i]['name'],
			'profile_path':raw_credit['cast'][i]['profile_path'],
			'character':raw_credit['cast'][i]['character']
			})

	review_number = min(5, len(raw_review['results']))
	for i in range(review_number):
		data['review'].append({
			'username':raw_review['results'][i]['author_details']['username'],
			'content':raw_review['results'][i]['content'],
			'rating':raw_review['results'][i]['author_details']['rating'],
			'created_at':raw_review['results'][i]['created_at'][:10]
			})

	return jsonify(data)


app.run()