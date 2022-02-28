function menuFunction() {
    var links = document.getElementById("mobile-menu-container");
    if(links.style.display === "block"){
        links.style.display ="none";
    }else{
        links.style.display ="block";
    }
}

function menuOptions(param) {
    location.href = param;
    var links = document.getElementById("mobile-menu-container");
    links.style.display ="none";
}
