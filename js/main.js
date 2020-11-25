
function name(){
    document.getElementById("exit").style.display = "none";
    document.getElementById("name").innerHTML="<h1>Piotr Bocian</h1>";
    document.getElementById("aboutme").outerHTML="<div class=\"little-frame\" id=\"aboutme\" onclick=\"aboutMe();\">O mnie</div>";
    document.getElementById("contact").outerHTML="<div class=\"little-frame\" id=\"contact\" onclick=\"contact();\">Kontakt</div>";
}

function aboutMe(){
    document.getElementById("exit").style.display = "flex";
    document.getElementById("name").innerHTML = "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste voluptates repudiandae itaque voluptas enim ab, delectus debitis libero animi cumque iure? Libero odio nam officiis accusantium pariatur sed quaerat. Numquam animi rem dignissimos excepturi cumque, a quam consequatur ipsum consectetur inventore assumenda.</p>";
    document.getElementById("aboutme").outerHTML ="<div class=\"little-frame\" id=\"aboutme\" onclick=\"name();\">O mnie</div>";
    document.getElementById("contact").outerHTML="<div class=\"little-frame\" id=\"contact\" onclick=\"contact();\">Kontakt</div>";
} 

function contact(){
    document.getElementById("exit").style.display = "flex";
    document.getElementById("name").innerHTML = "<h3>511-163-812<br/>piotr.bocian.96@gmail.com</h3>";
    document.getElementById("contact").outerHTML ="<div class=\"little-frame\" id=\"contact\" onclick=\"name();\">Kontakt</div>";
    document.getElementById("aboutme").outerHTML="<div class=\"little-frame\" id=\"aboutme\" onclick=\"aboutMe();\">O mnie</div>";
}