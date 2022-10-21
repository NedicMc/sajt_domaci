
const paragraf = document.getElementById("tekst");

const checkbox = document.querySelector("#box");

console.log(checkbox.checked);

if(checkbox.checked){
paragraf.style.visibility = "visible";
}
else{ 
    paragraf.style.visibility = "hidden";
;
}

checkbox.addEventListener("change", function() {
    if(checkbox.checked){
        paragraf.style.visibility = "visible";
        }
        else {    paragraf.style.visibility = "hidden";
}
    });