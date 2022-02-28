function menuFunction() {
    var links = document.getElementById("mobile-menu-container");
    if(links.style.display === "block"){
        links.style.display ="none";
    }else{
        links.style.display ="block";
    }
}