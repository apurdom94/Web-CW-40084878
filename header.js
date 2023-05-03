let appHeader = `

<link rel="stylesheet" href="NavBar.css">
<ul class="navigation">

<li><a href="index.html">Home</a></li>
      <li><a href="RecHome.html">Recipie</a></li>
      <li><a href="Nutritional-Info.html">Nutritional Information</a></li>
      <li><a href="About.html">About</a></li>
      <li style="float:right"><a href="#">Socials</a></li>
      <li style="float:right"><a href="#">Contact</a></li>
    </ul>

`;

document.getElementById("app-header").innerHTML = appHeader;


/* 
https://stackoverflow.com/questions/18712338/make-header-and-footer-files-to-be-included-in-multiple-html-pages */