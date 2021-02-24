from flask import Flask, make_response, request, jsonify


#create Flask's app object
app = Flask(__name__)

#execute this function when a user visits app domain at given route
#stacking multiple routes here for 1 function is possible
@app.route("/", methods=['GET'])
def hello():
	headers = {"Content-Type": "application/json"}
	return make_response(
		'Server works!!! omedeto!',
		200,
		headers=headers)