import axios from 'axios'
function createSearchBox(context, func) {
    var form = document.createElement("form");
    var input = document.createElement("input");
    input.type = "text";
    form.id = "inputForm";
    document.getElementById("inputForm").innerHTML = input;
    context.appendChild(form);
}

window.onload = function() {
    createSearchBox(document.body, function() {
        highlight(this.parentNode.childNodes[1]);
        // Example of different context, copied function etc
        // createButton(this.parentNode, this.onclick);
    });
};
