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
      	//var Home_img1 = document.getElementsByClassName("Home_img1");
		//for (var i = 0; i < 5; i++) 
		//{
			//Home_img1[i].src = "link for image"; //this.responseText;
		//}
		var test = document.getElementsByClassName("test"); //getElements returns array like data
		test[0].innerHTML = this.responseText;
    }
  };

  xhttp.open("GET", "http://localhost:5000/", true);
  xhttp.send();
}
get_home_pics();

var slide_ind = 0

/*function Home_slideshow
{
	var Home_slide1 = document.getElementsByClassName("Home_slide1");
	var Home_slide2 = document.getElementsByClassName("Home_slide2");
  	for (i = 0; i < Home_slide1.length; i++) 
  	{
  		Home_slide1[i].style.display = "none";
  		Home_slide2[i].style.display = "none";
  	}
  	Home_slide1[slide_ind].style.display = "block";
  	Home_slide2[slide_ind].style.display = "block";
  	setTimeout(Home_slideshow, 5000); //change every 5 seconds
}*/
