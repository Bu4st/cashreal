




function kontakt() {

    document.getElementById('kontakt').style.display = "flex";
    document.getElementById('kontakt').style.visibility = "visible";
    document.getElementById('kontakt').style.marginBottom = "0px";
    document.getElementById('kontakt').style.transition = ".3s";
    document.getElementById('kontakt').style.zIndex = "50";

        
    document.getElementById('about').style.display = "none";
    document.getElementById('cennik').style.display = "none";
}

function about(){
    document.getElementById('about').style.display = "flex";
    document.getElementById('about').style.visibility = "visible";
    document.getElementById('about').style.marginBottom = "0px";
    document.getElementById('about').style.transition = ".3s";
    document.getElementById('about').style.zIndex = "50";
    
    document.getElementById('kontakt').style.display = "none";
    document.getElementById('cennik').style.display = "none";
}

function cennik() {
    document.getElementById('cennik').style.display = "flex";
    document.getElementById('cennik').style.visibility = "visible";
    document.getElementById('cennik').style.marginBottom = "0px";
    document.getElementById('cennik').style.transition = ".3s";
    document.getElementById('cennik').style.zIndex = "50";
    
    document.getElementById('kontakt').style.display = "none";
    document.getElementById('about').style.display = "none";
}