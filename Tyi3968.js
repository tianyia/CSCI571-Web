function set_links()
{
	var link = document.getElementsByClassName("link");

	link[0].href = "https://tianyia.github.io/website_mimic_3968/hw3_website_mimic.html";
	link[1].href = "https://tianyi-tmdb-api.azurewebsites.net/";
	link[2].href = "https://tianyi-tmdb-api.azurewebsites.net/home";

	link[0].target = "_blank";
	link[1].target = "_blank";
	link[2].target = "_blank";
}
set_links();