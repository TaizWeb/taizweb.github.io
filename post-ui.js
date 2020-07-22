// updateTheme: Loads the saved cookie and applies the saved theme
function updateTheme() {
	if (document.cookie != "") {
		var savedTheme = document.cookie.split(";")[0].split("=")[1];
		if (savedTheme == "Dark") {
			root.classList.add("dark");
			document.getElementById("theme-chooser").value = "Dark";
		} else {
			root.classList.remove("dark");
			document.getElementById("theme-chooser").value = "Light";
		}
	}
}

// Defining key parts of the document
var root = document.getElementById("root");
var post = document.getElementById("post") || document.getElementById("posts-wrapper");

// Building aside code
var aside = document.createElement("div");
aside.id = "aside";
var asideHTML = "";
// Site navigation
asideHTML += "<h3 class='aside-title'>Site</h3>";
asideHTML += "<ul class='aside-list'>";
asideHTML += "<li><a href='/index.html'>Home</a></li>";
asideHTML += "<li><a href='/post/index.html'>Blog</a></li>";
asideHTML += "<li><a href='/devlog/index.html'>Dev Log</a></li>";
asideHTML += "<li><a href='/projects/index.html'>Projects</a></li>";
asideHTML += "<li><a href='https://github.com/taizweb'>GitHub</a></li>";
asideHTML += "<li><a href='/about/index.html'>About</a></li>";
asideHTML += "</ul>";

// Recents
asideHTML += "<h3 class='aside-title'>Recents</h3>";
asideHTML += "<ul class='aside-list'>";
asideHTML += "<li><a href='/index.html'>Home</a></li>";
asideHTML += "</ul>";

// Theme chooser
asideHTML += "<select id='theme-chooser'>";
asideHTML += "<option value='Light'>Light Theme</option>";
asideHTML += "<option value='Dark'>Dark Theme</option>";
asideHTML += "</select>";

aside.innerHTML = asideHTML;
root.insertBefore(aside, post);
updateTheme()

// Theme chooser event
themeChooser = document.getElementById("theme-chooser");
themeChooser.addEventListener("change", function changeTheme() {
	document.cookie = "theme=" + themeChooser.value + "; expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/";
	updateTheme();
});

// Building bottom headline
var testHeadline = document.createElement("P");
testHeadline.innerHTML = "<p id='headline'><i>Liked my post? Be sure to bookmark the site, and check back often!</i></p>";
post.appendChild(testHeadline);

