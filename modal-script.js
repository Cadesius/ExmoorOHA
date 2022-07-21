function modal_setup (modal, modal_button, modal_iframe, modal_close, modal_home) {
    modal_button.onclick = function () {
        modal_iframe.src = modal_iframe.src;
        modal.style.display = "block";
    }

    modal_home.onclick = function () {
        modal_iframe.src = modal_iframe.src;
    }

    modal_close.onclick = function () {
        modal.style.display = "none";
    }

    window.addEventListener ('keyup', function (e) {
        if (e.key == "Escape") {
            modal.style.display = "none";
        }
    });
}

function modal_creator (lastname, firstname, fullname, thumbs, lived) {

    var name = fullname.toLowerCase ();
    var name = name.replace (" ", "_")

    var image_preview = document.createElement ("div");

    image_preview.className = "IMGPRV";
    image_preview.id = "modal_button_" + name;
    image_preview.innerHTML = `<div>
        <a href="javascript:;">
            <img class="IMGPRVM" src="PEOPLE/PHOTOS/THUMBS/` + thumbs + `" alt="` + fullname + `, ` + lived + `">
        </a>
        <a href="javascript:;" style="text-decoration: none; color: #000000;">
            ` + firstname + `<br><b>` + lastname + `</b>
        </a>
        </div>`;

    document.getElementById ("GRID").appendChild (image_preview)

    var modal_element = document.createElement ("div");

    modal_element.id = "modal_" + name;
    modal_element.className = "modal";
    modal_element.innerHTML = `<div>
        <div class="modal-content">
            <span class="modal_home"><img class="modal_home_icon" id="modal_home_icon" alt="Home" src="home_icon_filled.png"></img>HOME</span>
            <span class="modal_close">&times;</span>
            <iframe id="modal_iframe_`+name+`" src="PEOPLE/`+name+`.html" style="border:none; width:100%; height: 100%;"></iframe>
        </div>
    </div>`;

    document.getElementById ("modal_definitions").appendChild (modal_element);

    window ["modal_" + name] = document.getElementById ("modal_" + name);
    window ["button_" + name] = document.getElementById ("modal_button_" + name);
    window ["close_modal_" + name] = window["modal_" + name].getElementsByClassName ("modal_close") [0];
    window ["home_" + name] = window["modal_" + name].getElementsByClassName ("modal_home") [0];
    window ["modal_iframe_" + name] = document.getElementById ("modal_iframe_" + name);

    modal_setup (window ["modal_" + name], window ["button_" + name], window ["modal_iframe_" + name], window ["close_modal_" + name], window ["home_" + name]);
}

const modal_creators = [
	`modal_creator ("PEARCEY", "MURIEL", "Muriel Pearcey", "Pearcey_Muriel_OHA09.jpg", "Countisbury, Blue Anchor")`,
	`modal_creator ("HALLIDAY", "BEN", "Ben Halliday", "Halliday_Ben_OHA08.jpg", "Countisbury")`,
    `modal_creator ("RICHARDS", "ADA", "Ada Richards", "Richards_Ada_OHA03.jpg", "Brendon, Countisbury, Porlock")`,
    `modal_creator ("HOOPER", "STANLEY", "Stanley Hooper", "Hooper_Stanley_OHA02.jpg", "Bossington, Allerford")`
];

modal_creators.sort ();

for (x in modal_creators) {
    eval (modal_creators [x])
};