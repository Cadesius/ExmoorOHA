function modal_setup (modal, modal_button, modal_iframe, modal_close, modal_home) {
    modal_button.onclick = function() {
        modal.style.display = "block";
    }

    modal_home.onclick = function() {
        modal_iframe.src = modal_iframe.src;
    }

    modal_close.onclick = function() {
        modal_iframe.src = modal_iframe.src;
        modal.style.display = "none";
    }

    document.addEventListener('keyup', function(e) {
        if (e.key == "Escape") {
            modal_iframe.src = modal_iframe.src;
            modal.style.display = "none";
        }
    });
}

function modal_creator (name) {
    window["modal_"+name] = document.getElementById("modal_"+name);
    window["button_"+name] = document.getElementById("modal_button_"+name);
    window["close_modal_"+name] = window["modal_"+name].getElementsByClassName("modal_close")[0];
    window["home_"+name] = window["modal_"+name].getElementsByClassName("modal_home")[0];
    window["modal_iframe_"+name] = document.getElementById("modal_iframe_"+name);

    modal_setup (window["modal_"+name], window["button_"+name], window["modal_iframe_"+name], window["close_modal_"+name], window["home_"+name]);
}
    
modal_creator ("peter_batchelor");

modal_creator ("hope_bourne");

modal_creator ("gwen_burnell");

modal_creator ("arthur_heywood");