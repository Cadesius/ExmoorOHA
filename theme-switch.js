var themes = [
    // Dark theme
    {
        "background-colour" : "#262626",
        "text-colour" : "#ffffff",
        "alt-text-colour" : "#ffffff",
        "transparency-colour" : "#00000000",
        "modal-background-colour" : "#262626fc"
    },
    // Light theme
    {
        "background-colour" : "#ffffff",
        "text-colour" : "#262626",
        "alt-text-colour" : "#000000",
        "transparency-colour" : "#00000000",
        "modal-background-colour" : "#fffffffc"
    }
];

// var theme = "dark"
var selection = 1

function switchTheme () {
    if (document.cookie.includes ("dark")) {
        selection = 1
        for (let i in themes [selection]) {
            document.documentElement.style.setProperty("--" + i, themes [selection] [i]);
        }
        var home_icons = document.querySelectorAll (".modal_home_icon");
        home_icons.forEach(element => {
            element.src = "home_icon_filled_inverted.png"
        });
        document.getElementById ("theme-switch-icon").src = "theme-switch-icon.png";
    } if (document.cookie.includes ("light")) {
        selection = 0
        for (let i in themes [selection]) {
            document.documentElement.style.setProperty("--" + i, themes [selection] [i]);
        }
        var home_icons = document.querySelectorAll (".modal_home_icon");
        home_icons.forEach(element => {
            element.src = "home_icon_filled.png"
        });
        document.getElementById("theme-switch-icon").src = "theme-switch-icon-inverted.png";
    }
};

function switchCookie () {
    if (document.cookie.includes ("dark")) {
        document.cookie = "theme:light; Secure"
    } else {
        document.cookie = "theme:dark; Secure"
    }
}

if (document.cookie.includes ("theme")) {
    if (document.cookie.includes ("dark")) {
        console.log ("Cookie already exists - set dark mode")
    } if (document.cookie.includes ("light")) {
        selection = 1
        for (let i in themes [selection]) {
            document.documentElement.style.setProperty("--" + i, themes [selection] [i]);
        }
        var home_icons = document.querySelectorAll (".modal_home_icon");
        home_icons.forEach(element => {
            element.src = "home_icon_filled_inverted.png"
        });
        document.getElementById ("theme-switch-icon").src = "theme-switch-icon.png";
        document.cookie = "theme:light; Secure"
    }
} else {
    document.cookie = "theme:dark; Secure"
}

