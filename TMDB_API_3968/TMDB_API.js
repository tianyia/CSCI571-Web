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
		tab[i].className = tab[i].className.replace(" active", ""); /*string method .replace*/
	}
  	
  	evt.currentTarget.className += " active";
}