//server.js
var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var axios = require('axios');
var app = express();
app.use(bodyparser.json());
app.use(cors());

const path = require('path');
app.use(express.static(path.join(__dirname, 'dist/frontend')))

const api_key = "8a0b6981e7cb027bc7840f9e005cddc0";

//Home page route
app.get('/apis', function(req, res) {
	var cur_movie_link = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + api_key + "&language=en-US&page=1";

	var pop_movie_link = "https://api.themoviedb.org/3/movie/popular?api_key=" + api_key + "&language=en-US&page=1";
	var top_movie_link = "https://api.themoviedb.org/3/movie/top_rated?api_key=" + api_key + "&language=en-US&page=1";
	var trend_movie_link = "https://api.themoviedb.org/3/trending/movie/day?api_key=" + api_key;

	var pop_tv_link = "https://api.themoviedb.org/3/tv/popular?api_key=" + api_key + "&language=en-US&page=1";
	var top_tv_link = "https://api.themoviedb.org/3/tv/top_rated?api_key=" + api_key + "&language=en-US&page=1";
	var trend_tv_link = "https://api.themoviedb.org/3/trending/tv/day?api_key=" + api_key;


	//axios is async, it's taken out of normal execution flow

	var url = [cur_movie_link, pop_movie_link, top_movie_link, trend_movie_link, pop_tv_link, top_tv_link, trend_tv_link];

	async function get_data(url)
	{
		var r0 = await axios.get(url[0]);
		var r1 = await axios.get(url[1]);
		var r2 = await axios.get(url[2]);
		var r3 = await axios.get(url[3]);
		var r4 = await axios.get(url[4]);
		var r5 = await axios.get(url[5]);
		var r6 = await axios.get(url[6]);

		return [r0.data, r1.data, r2.data, r3.data, r4.data, r5.data, r6.data]
	}

	get_data(url).then( data => {
		//console.log(data);
		var selected_data = {
			'cur_movie':[],
			'pop_movie':[],
			'top_movie':[],
			'trend_movie':[],
			'pop_tv':[],
			'top_tv':[],
			'trend_tv':[]
		};

		var cur_movie = data[0];
		var pop_movie = data[1];
		var top_movie = data[2];
		var trend_movie = data[3];
		var pop_tv = data[4];
		var top_tv = data[5];
		var trend_tv = data[6];

		for (var i = 0; i < 6; i++)
		{	
			var cur_movie_info = {
				'id':cur_movie['results'][i]['id'], 
				'title':cur_movie['results'][i]['title'], 
				'backdrop_path':cur_movie['results'][i]['backdrop_path'],
				'poster_path':cur_movie['results'][i]['poster_path'],
				'type':'movie'
			};
			selected_data['cur_movie'].push(cur_movie_info);
		}
		for (var i = 0; i < 20; i++) //data['results'].length
		{	
			var pop_movie_info = {
				'id':pop_movie['results'][i]['id'], 
				'title':pop_movie['results'][i]['title'], 
				'poster_path':pop_movie['results'][i]['poster_path'],
				'type':'movie'};
			var top_movie_info = {
				'id':top_movie['results'][i]['id'], 
				'title':top_movie['results'][i]['title'], 
				'poster_path':top_movie['results'][i]['poster_path'],
				'type':'movie'};
			var trend_movie_info = {
				'id':trend_movie['results'][i]['id'], 
				'title':trend_movie['results'][i]['title'], 
				'poster_path':trend_movie['results'][i]['poster_path'],
				'type':'movie'};
			selected_data['pop_movie'].push(pop_movie_info);
			selected_data['top_movie'].push(top_movie_info);
			selected_data['trend_movie'].push(trend_movie_info);
		}
		for (var i = 0; i < 20; i++) //data['results'].length
		{	
			var pop_tv_info = {
				'id':pop_tv['results'][i]['id'], 
				'title':pop_tv['results'][i]['name'], 
				'poster_path':pop_tv['results'][i]['poster_path'],
				'type':'tv'};
			var top_tv_info = {
				'id':top_tv['results'][i]['id'], 
				'title':top_tv['results'][i]['name'], 
				'poster_path':top_tv['results'][i]['poster_path'],
				'type':'tv'};
			var trend_tv_info = {
				'id':trend_tv['results'][i]['id'], 
				'title':trend_tv['results'][i]['name'], 
				'poster_path':trend_tv['results'][i]['poster_path'],
				'type':'tv'};
			selected_data['pop_tv'].push(pop_tv_info);
			selected_data['top_tv'].push(top_tv_info);
			selected_data['trend_tv'].push(trend_tv_info);
		}
		res.json(selected_data);
	});

})

//search route
app.get('/apis/search/:query', function(req, res) {
	var search_link = "https://api.themoviedb.org/3/search/multi?api_key=" + api_key + "&language=enUS&query=" +  req.params.query;

    axios.get(search_link).then(response => {
    	data = response.data;
    	var selected_data = [];
    	var i = 0;
    	while(selected_data.length < 7 && i < data['results'].length)
    	{
    		if ( (data['results'][i]['media_type'] == "movie" || data['results'][i]['media_type'] == "tv") && data['results'][i]['backdrop_path'] != null )
    		{
    			var info = {
    				'id': data['results'][i]['id'],
    				'title': "",
    				'backdrop_path': data['results'][i]['backdrop_path'],
    				'type': data['results'][i]['media_type'],
    				'poster_path':data['results'][i]['poster_path'],
    				'release_date':"",
    				'rating':data['results'][i]['vote_average']
    			};

    			if (data['results'][i]['media_type'] == "tv")
    			{
    				info['title'] = data['results'][i]['name'];
    				info['release_date'] = data['results'][i]['first_air_date'];
    			}
    			else
    			{
    				info['title'] = data['results'][i]['title'];
    				info['release_date'] = data['results'][i]['release_date'];
    			}
    			selected_data.push(info);
    		}
    		i += 1;
    	}
    	res.json(selected_data);
    })
})

//movie details route
app.get('/apis/watch/movie/:id', function(req, res){
	var trailer_link = "https://api.themoviedb.org/3/movie/" + req.params.id + "/videos?api_key=" + api_key + "&language=en-US&page=1";
	var detail_link = "https://api.themoviedb.org/3/movie/" + req.params.id + "?api_key=" + api_key + "&language=en-US&page=1";
	var review_link = "https://api.themoviedb.org/3/movie/" + req.params.id + "/reviews?api_key=" + api_key + "&language=en-US&page=1";
	var cast_link =  "https://api.themoviedb.org/3/movie/" + req.params.id + "/credits?api_key=" + api_key + "&language=en-US&page=1";
	var recommend_link = "https://api.themoviedb.org/3/movie/" + req.params.id + "/recommendations?api_key=" + api_key + "&language=en-US&page=1";
	var similar_link = "https://api.themoviedb.org/3/movie/" + req.params.id + "/similar?api_key=" + api_key + "&language=en-US&page=1";

	var url = [trailer_link, detail_link, review_link, cast_link,recommend_link, similar_link];

	async function get_data(url)
	{
		var r0 = await axios.get(url[0]);
		var r1 = await axios.get(url[1]);
		var r2 = await axios.get(url[2]);
		var r3 = await axios.get(url[3]);
		var r4 = await axios.get(url[4]);
		var r5 = await axios.get(url[5]);

		return [r0.data, r1.data, r2.data, r3.data, r4.data, r5.data]
	}

	get_data(url).then( data => {
		//console.log(data);
		var selected_data = {
			'trailer':{},
			'detail':{},
			'review':[],
			'cast':[],
			'recommend':[],
			'similar':[]
		};

		//trailer
		if (data[0]['results'].length > 0)
		{
			var trailer_info = {
				'site': data[0]['results'][0]['site'],
				'type': data[0]['results'][0]['type'],
				'name': data[0]['results'][0]['name'],
				'key' : data[0]['results'][0]['key']
			};
			if (data[0]['results'].length > 1)
			{
				for(var i=0; i<data[0]['results'].length; i++)
				{
					if (trailer_info['type'] != "Trailer" && data[0]['results'][i]['type'] == "Trailer")
					{
						var trailer_info = {
							'site': data[0]['results'][i]['site'],
							'type': data[0]['results'][i]['type'],
							'name': data[0]['results'][i]['name'],
							'key' : data[0]['results'][i]['key']
						};
					}
					if (trailer_info['type'] != "Trailer" && trailer_info['type'] != "Teaser" &&
						(data[0]['results'][i]['type'] == "Trailer" || data[0]['results'][i]['type'] == "Teaser") )
					{
						var trailer_info = {
							'site': data[0]['results'][i]['site'],
							'type': data[0]['results'][i]['type'],
							'name': data[0]['results'][i]['name'],
							'key' : data[0]['results'][i]['key']
						};
					}
				}

				if (trailer_info['type'] != "Trailer" && trailer_info['type'] != "Teaser")
				{
					var trailer_info = {
						'site': null,
						'type': null,
						'name': null,
						'key' : null
					};
				}
			}
		}
		else
		{
			var trailer_info = {
				'site': null,
				'type': null,
				'name': null,
				'key' : null
			};
		}
		selected_data['trailer'] = trailer_info;

		//detail
		var genre_array = [];
		for (var i=0; i<data[1]['genres'].length; i++)
		{
			genre_array.push(data[1]['genres'][i]['name']);
		}
		var lan_array = [];
		for (var i=0; i<data[1]['spoken_languages'].length; i++)
		{
			lan_array.push(data[1]['spoken_languages'][i]['english_name']);
		}
		var detail_info = {
			'title': data[1]['title'],
			'genres':genre_array.join(", "),
			'spoken_languages': lan_array.join(", "),
			'release_date': data[1]['release_date'],
			'runtime': data[1]['runtime'],
			'overview': data[1]['overview'],
			'vote_average': data[1]['vote_average'],
			'tagline': data[1]['tagline'],
			'id':data[1]['id'],
			'poster_path':data[1]['poster_path'],
			'type':'movie'
		};
		selected_data['detail'] = detail_info;

		//review
		var review_num =  Math.min(10, data[2]['results'].length);
		var month = {
		    "01":"Jan",
		    "02":"Feb",
		    "03":"Mar",
		    "04":"Apr",
		    "05":"May",
		    "06":"Jun",
		    "07":"Jul",
		    "08":"Aug",
		    "09":"Sep",
		    "10":"Oct",
		    "11":"Nov",
		    "12":"Dec"
		}
		var APM = "AM";
		for(var i=0; i < review_num; i++)
		{
			var review_info = {
				'author':data[2]['results'][i]['author'],
				'content':data[2]['results'][i]['content'],
				'created_at':"",
				'url':data[2]['results'][i]['url'],
				'rating':data[2]['results'][i]['author_details']['rating'],
				'avatar_path':"https://image.tmdb.org/t/p/original"+data[2]['results'][i]['author_details']['avatar_path']
			};
			if(data[2]['results'][i]['author_details']['avatar_path'] == null || data[2]['results'][i]['author_details']['avatar_path'] =="")
				review_info['avatar_path'] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU";
			else
			{
				if(data[2]['results'][i]['author_details']['avatar_path'].startsWith("/http"))
					review_info['avatar_path'] = data[2]['results'][i]['author_details']['avatar_path'].substring(1);
			}

			review_info['created_at'] += month[data[2]['results'][i]['created_at'].slice(5,7)];
			review_info['created_at'] += " " + data[2]['results'][i]['created_at'].slice(8,10);
			review_info['created_at'] += ", " + data[2]['results'][i]['created_at'].slice(0,4);

			if(review_info['rating'] == null)
			{
				review_info['rating'] = "0";
			}

			selected_data['review'].push(review_info);
		}

		//cast
		for(var i=0; i<data[3]['cast'].length; i++)
		{
			var cast_info = {
				'id':data[3]['cast'][i]['id'],
				'name':data[3]['cast'][i]['name'],
				'character':data[3]['cast'][i]['character'],
				'profile_path':data[3]['cast'][i]['profile_path']
			};
			if(data[3]['cast'][i]['profile_path'] != null && data[3]['cast'][i]['profile_path'] != "")
				selected_data['cast'].push(cast_info);
		}

		//recommend
		for(var i=0; i<Math.min(24, data[4]['results'].length); i++)
		{
			var recommend_info = {
				'id':data[4]['results'][i]['id'],
				'title':data[4]['results'][i]['title'],
				'poster_path':data[4]['results'][i]['poster_path'],
				'type':'movie'
			};
			selected_data['recommend'].push(recommend_info);
		}

		//similar
		for(var i=0; i<Math.min(24, data[5]['results'].length); i++)
		{
			var similar_info = {
				'id':data[5]['results'][i]['id'],
				'title':data[5]['results'][i]['title'],
				'poster_path':data[5]['results'][i]['poster_path'],
				'type':'movie'
			};
			selected_data['similar'].push(similar_info);
		}


		res.json(selected_data);
	});
})

//tv details route
app.get('/apis/watch/tv/:id', function(req, res){
	var trailer_link = "https://api.themoviedb.org/3/tv/" + req.params.id + "/videos?api_key=" + api_key + "&language=en-US&page=1";
	var detail_link = "https://api.themoviedb.org/3/tv/" + req.params.id + "?api_key=" + api_key + "&language=en-US&page=1";
	var review_link = "https://api.themoviedb.org/3/tv/" + req.params.id + "/reviews?api_key=" + api_key + "&language=en-US&page=1";
	var cast_link =  "https://api.themoviedb.org/3/tv/" + req.params.id + "/credits?api_key=" + api_key + "&language=en-US&page=1";
	var recommend_link = "https://api.themoviedb.org/3/tv/" + req.params.id + "/recommendations?api_key=" + api_key + "&language=en-US&page=1";
	var similar_link = "https://api.themoviedb.org/3/tv/" + req.params.id + "/similar?api_key=" + api_key + "&language=en-US&page=1";

	var url = [trailer_link, detail_link, review_link, cast_link, recommend_link, similar_link];

	async function get_data(url)
	{
		var r0 = await axios.get(url[0]);
		var r1 = await axios.get(url[1]);
		var r2 = await axios.get(url[2]);
		var r3 = await axios.get(url[3]);
		var r4 = await axios.get(url[4]);
		var r5 = await axios.get(url[5]);

		return [r0.data, r1.data, r2.data, r3.data, r4.data, r5.data]
	}

	get_data(url).then( data => {
		//console.log(data);
		var selected_data = {
			'trailer':{},
			'detail':{},
			'review':[],
			'cast':[],
			'recommend':[],
			'similar':[]
		};

		//trailer
		if (data[0]['results'].length > 0)
		{
			var trailer_info = {
				'site': data[0]['results'][0]['site'],
				'type': data[0]['results'][0]['type'],
				'name': data[0]['results'][0]['name'],
				'key' : data[0]['results'][0]['key']
			};
			if (data[0]['results'].length > 1)
			{
				for(var i=0; i<data[0]['results'].length; i++)
				{
					if (trailer_info['type'] != "Trailer" && data[0]['results'][i]['type'] == "Trailer")
					{
						var trailer_info = {
							'site': data[0]['results'][i]['site'],
							'type': data[0]['results'][i]['type'],
							'name': data[0]['results'][i]['name'],
							'key' : data[0]['results'][i]['key']
						};
					}
					if (trailer_info['type'] != "Trailer" && trailer_info['type'] != "Teaser" &&
						(data[0]['results'][i]['type'] == "Trailer" || data[0]['results'][i]['type'] == "Teaser") )
					{
						var trailer_info = {
							'site': data[0]['results'][i]['site'],
							'type': data[0]['results'][i]['type'],
							'name': data[0]['results'][i]['name'],
							'key' : data[0]['results'][i]['key']
						};
					}
				}

				if (trailer_info['type'] != "Trailer" && trailer_info['type'] != "Teaser")
				{
					var trailer_info = {
						'site': null,
						'type': null,
						'name': null,
						'key' : null
					};
				}
			}
		}
		else
		{
			var trailer_info = {
				'site': null,
				'type': null,
				'name': null,
				'key' : null
			};
		}
		selected_data['trailer'] = trailer_info;

		//detail
		var genre_array = [];
		for (var i=0; i<data[1]['genres'].length; i++)
		{
			genre_array.push(data[1]['genres'][i]['name']);
		}
		var lan_array = [];
		for (var i=0; i<data[1]['spoken_languages'].length; i++)
		{
			lan_array.push(data[1]['spoken_languages'][i]['english_name']);
		}
		var detail_info = {
			'title': data[1]['name'],
			'genres':genre_array.join(", "),
			'spoken_languages': lan_array.join(", "),
			'release_date': data[1]['first_air_date'],
			'runtime': data[1]['episode_run_time'][0],
			'overview': data[1]['overview'],
			'vote_average': data[1]['vote_average'],
			'tagline': data[1]['tagline'],
			'id':data[1]['id'],
			'poster_path':data[1]['poster_path'],
			'type':'tv'
		};
		selected_data['detail'] = detail_info;

		//review
		var review_num =  Math.min(10, data[2]['results'].length);
		var month = {
		    "01":"January",
		    "02":"February",
		    "03":"March",
		    "04":"April",
		    "05":"May",
		    "06":"June",
		    "07":"July",
		    "08":"August",
		    "09":"September",
		    "10":"October",
		    "11":"November",
		    "12":"December"
		}
		var APM = "AM";
		for(var i=0; i < review_num; i++)
		{
			var review_info = {
				'author':data[2]['results'][i]['author'],
				'content':data[2]['results'][i]['content'],
				'created_at':"",
				'url':data[2]['results'][i]['url'],
				'rating':data[2]['results'][i]['author_details']['rating'],
				'avatar_path':"https://image.tmdb.org/t/p/original"+data[2]['results'][i]['author_details']['avatar_path']
			};
			if(data[2]['results'][i]['author_details']['avatar_path'] == null || data[2]['results'][i]['author_details']['avatar_path'] =="")
				review_info['avatar_path'] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU";
			else
			{
				if(data[2]['results'][i]['author_details']['avatar_path'].startsWith("/http"))
					review_info['avatar_path'] = data[2]['results'][i]['author_details']['avatar_path'].substring(1);
			}

			review_info['created_at'] += month[data[2]['results'][i]['created_at'].slice(5,7)];
			review_info['created_at'] += " " + data[2]['results'][i]['created_at'].slice(8,10);
			review_info['created_at'] += ", " + data[2]['results'][i]['created_at'].slice(0,4);

			var hour = parseInt(data[2]['results'][i]['created_at'].slice(11,13));
			if (hour > 12)
			{
				hour -= 12;
				APM = "PM";
			}
			review_info['created_at'] += ", " + hour;
			review_info['created_at'] += ":" + data[2]['results'][i]['created_at'].slice(14,16);
			review_info['created_at'] += ":" + data[2]['results'][i]['created_at'].slice(17,19) + " "+APM;

			if(review_info['rating'] == null)
			{
				review_info['rating'] = "0";
			}

			selected_data['review'].push(review_info);
		}

		//cast
		for(var i=0; i<data[3]['cast'].length; i++)
		{
			var cast_info = {
				'id':data[3]['cast'][i]['id'],
				'name':data[3]['cast'][i]['name'],
				'character':data[3]['cast'][i]['character'],
				'profile_path':data[3]['cast'][i]['profile_path']
			};
			if(data[3]['cast'][i]['profile_path'] != null && data[3]['cast'][i]['profile_path'] != "")
				selected_data['cast'].push(cast_info);
		}

		//recommend
		for(var i=0; i<Math.min(24, data[4]['results'].length); i++)
		{
			var recommend_info = {
				'id':data[4]['results'][i]['id'],
				'title':data[4]['results'][i]['name'],
				'poster_path':data[4]['results'][i]['poster_path'],
				'type':'tv'
			};
			selected_data['recommend'].push(recommend_info);
		}

		//similar
		for(var i=0; i<Math.min(24, data[5]['results'].length); i++)
		{
			var similar_info = {
				'id':data[5]['results'][i]['id'],
				'title':data[5]['results'][i]['name'],
				'poster_path':data[5]['results'][i]['poster_path'],
				'type':'tv'
			};
			selected_data['similar'].push(similar_info);
		}


		res.json(selected_data);
	});

})

//cast datials route
app.get('/apis/cast/:id', function(req, res){
	var cast_detail_link = "https://api.themoviedb.org/3/person/" + req.params.id + "?api_key=" + api_key + "&language=en-US&page=1";
	var external_id_link = "https://api.themoviedb.org/3/person/" + req.params.id + "/external_ids?api_key=" + api_key + "&language=en-US&page=1";

	url = [cast_detail_link, external_id_link]

	async function get_data(url)
	{
		var r0 = await axios.get(url[0]);
		var r1 = await axios.get(url[1]);

		return [r0.data, r1.data]
	}

    get_data(url).then(data => {

    	var selected_data = {
    		'birthday':data[0]['birthday'],
    		'place_of_birth':data[0]['place_of_birth'],
    		'gender':data[0]['gender'],
    		'name':data[0]['name'],
    		'homepage':data[0]['homepage'],
    		'also_known_as':data[0]['also_known_as'].join(", "),
    		'known_for_department':data[0]['known_for_department'],
    		'biography':data[0]['biography'],
    		'imdb_id':data[1]['imdb_id'],
    		'facebook_id':data[1]['facebook_id'],
    		'instagram_id':data[1]['instagram_id'],
    		'twitter_id':data[1]['twitter_id']
    	};

    	res.json(selected_data);
    })

})

app.use('/*', function(req, res){
	res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
})

const PORT = process.env.PORT || 8080;
var server = app.listen(PORT, function() {
    console.log("Backend Application listening at http://localhost:" + PORT)
})

module.exports = app;