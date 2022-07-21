var url = location.href.toString ()

var header = document.createElement ("div");

header.innerHTML = `<h1><a class="HHLINK" href="home.html">THE EXMOOR ORAL HISTORY ARCHIVES</a></h1>

<a href="javascript:;" onclick="switchTheme (); switchCookie ()"><img class="theme-switch-icon" id="theme-switch-icon" src="theme-switch-icon-inverted.png" title="Switch between light and dark mode" alt="Switch between light and dark mode"></a>

<ul>
    <li id="heading-home"><a href="home.html">HOME</a></li>
    <li id="heading-people"><a href="people.html">THE PEOPLE</a></li>
    <li id="heading-project"><a href="project.html">THE PROJECT</a></li>
    <li id="heading-trust"><a href="trust.html">THE TRUST</a></li>
</ul>`;

document.querySelector ("header").appendChild (header);

function pageHighlight (page) {
    var element = document.getElementById ("heading-" + page)
    element.style = "background-color: var(--background-colour);";
    element.querySelector ("a").style = "color: var(--text-colour);";
}

if (url.includes ("home")) {
    pageHighlight ("home")
}

if (url.includes ("people")) {
    pageHighlight ("people")
}

if (url.includes ("project")) {
    pageHighlight ("project")
}

if (url.includes ("trust")) {
    pageHighlight ("trust")
}