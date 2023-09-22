function accordion(parent) {
    "use strict";
    let a = document.getElementById(parent);
    if (a.style.display === "none" || !a.style.display) {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
}
