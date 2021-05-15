function set_links()
{
	var link = document.getElementsByClassName("link");

	link[0].href = "https://tianyia.github.io/hw3-Static-website/hw3_website_mimic.html";
	link[1].href = "https://tianyi-tmdb-api.azurewebsites.net/";
	link[2].href = "https://tianyi-tmdb-api.azurewebsites.net/home";
	link[3].href = "https://advanced-moviedb-by-tianyi-an.wl.r.appspot.com/";
	link[4].href = "https://advanced-moviedb-by-tianyi-an.wl.r.appspot.com/apis/watch/movie/284052";
	link[5].href = "http://moviedbandroidserverbytianyian-env.eba-khpg3mej.us-east-2.elasticbeanstalk.com/apis";

	link[0].target = "_blank";
	link[1].target = "_blank";
	link[2].target = "_blank";
	link[3].target = "_blank";
	link[4].target = "_blank";
	link[5].target = "_blank";
}
set_links();