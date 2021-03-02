function switch_tab(evt, content_name)
{
	var tab, content;
	content = document.getElementsByClassName("content");
	for (var i = 0; i < 2; i++) 
	{
		content[i].style.display = "none";
	}

	if (content_name == "Home")
	{
		content[0].style.display = "inline-block";
	}
	else
	{
		content[1].style.display = "inline-block";
	}
	
  	tab = document.getElementsByClassName("tab");
	for (var i = 0; i < 2; i++) 
	{
		tab[i].className = tab[i].className.replace(" active", ""); //string method .replace
	}
  	
  	evt.currentTarget.className += " active";
}

function get_home_pics()
{
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() /*callback is the function to be executed when the readyState changes*/
  {
    if (xhttp.readyState == 4 && xhttp.status == 200) /*request state and server status*/
    {
    	var image_data = JSON.parse(this.responseText)
      	var Home_img1 = document.getElementsByClassName("Home_img1");
      	var Home_img2 = document.getElementsByClassName("Home_img2");

      	var Home_des1 = document.getElementsByClassName("Home_des1");
      	var Home_des2 = document.getElementsByClassName("Home_des2");
		for (var i = 0; i < 5; i++) 
		{
			Home_img1[i].src = "https://image.tmdb.org/t/p/w780" + image_data[i]['backdrop_path'];
			Home_img2[i].src = "https://image.tmdb.org/t/p/w780" + image_data[i+5]['backdrop_path'];


			Home_des1[i].innerHTML = image_data[i]['title'] + "(" + image_data[i]['release_date'].slice(0,4) + ")";
			Home_des2[i].innerHTML = image_data[i+5]['name'] + "(" + image_data[i+5]['first_air_date'].slice(0,4) + ")";
		}
		//var test = document.getElementsByClassName("test"); //getElements returns array like data
		//test[0].innerHTML = this.responseText;

		//document.getElementById('movie-title').innerHTML = obj['original_title'];
    }
  };

  xhttp.open("GET", "http://127.0.0.1:5000/home", true);
  xhttp.send();
}
get_home_pics();

var slide_ind = 0

function Home_slideshow()
{
	var Home_figure1 = document.getElementsByClassName("Home_figure1");
	var Home_figure2 = document.getElementsByClassName("Home_figure2");
  	for (var i = 0; i < Home_figure1.length; i++) 
  	{
  		Home_figure1[i].style.display = "none";
  		Home_figure2[i].style.display = "none";
  	}
  	Home_figure1[slide_ind].style.display = "block";
  	Home_figure2[slide_ind].style.display = "block";

  	slide_ind++;
  	if (slide_ind==5)
  	{
  		slide_ind = 0;
  	}

  	setTimeout(Home_slideshow, 5000); //change every 5 seconds
}

Home_slideshow();

function clone_result_bar()
{
	var found = document.getElementsByClassName("found");
	found[0].style.display = "none";

	var bar = document.getElementsByClassName("result_box");
	for (var i = 0; i < 9; i++)
	{
    	document.getElementsByClassName("result_block")[0].appendChild(bar[0].cloneNode(true));
	}

	var content = document.getElementsByClassName("result_box");
	for(var i=0; i<10; i++)
	{
		content[i].style.display = "none";
	}

}
clone_result_bar();

function search_result(keyword, Category)
{
	if(keyword == "" || Category == " ")
	{
		alert("Please enter valid values.");
	}
	else
	{
  		var xhttp = new XMLHttpRequest();

 	 	xhttp.onreadystatechange = function() /*callback is the function to be executed when the readyState changes*/
  		{
    		if (xhttp.readyState == 4 && xhttp.status == 200) /*request state and server status*/
    		{
    			var search_data = JSON.parse(this.responseText);
    			create_search_result(search_data);
    		}
  		};

  		//var new_keyword = keyword.replace(/ /g, "%20"); //replace all occurences of space with %20

  		xhttp.open("GET", "http://127.0.0.1:5000/search"+"/"+Category+"/"+keyword, true);
  		xhttp.send();
	}
}

function create_search_result(search_data)
{
	var found = document.getElementsByClassName("found");
	var content = document.getElementsByClassName("result_box");

	for(var i=0; i<10; i++)
	{
		found[0].style.display = "none";
		content[i].style.display = "none";
	}

	if(search_data != 3.14) //show results
	{
		data_num = Object.keys(search_data).length;

		found[0].style.display = "block";

		if(data_num > 0)
		{
			found[0].innerHTML = "Showing results...";

			for(var i=0; i<data_num; i++)
			{
				content[i].style.display = "block"; //hierarchy access
				var poster = content[i].getElementsByClassName("poster")[0].getElementsByTagName("img")[0];
				poster.src = "https://image.tmdb.org/t/p/w185" + search_data[i]['poster_path'];
				if (search_data[i]['poster_path'] == "")
					poster.src = "movie_placeholder.png";

				var title = content[i].getElementsByClassName("text_box")[0].getElementsByTagName("h3")[0];
				title.innerHTML = search_data[i]['title'];

			}
		}
		else
		{
			found[0].innerHTML = "No results found";
		}

	}
	else //clear results
	{
		found[0].style.display = "none";
	}
}