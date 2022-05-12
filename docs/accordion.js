/* JSLint edition 2021-11-20 (jslint.com)
 * Env…
 *   browser
 *   devel
 */

/* accordion.js: an algorithm to show or hide content
 * see demo: http://project4dimensions.github.io/jsFun/accordion.html
 */

function accordion(parent) {
    "use strict";
    let a = document.getElementById(parent);
    if (a.style.display === "none" || !a.style.display) {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
}
