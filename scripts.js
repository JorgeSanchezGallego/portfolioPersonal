let lanzador = "#burguer";
let desplegable = "#menu";
let despliegaClase = "menu-desplegado";

function nav(){
    let lanz = document.querySelector(lanzador);
    lanz.addEventListener("click",despliegaMenu);
}

function despliegaMenu(){
    let despl = document.querySelector(desplegable);
    despl.classList.toggle(despliegaClase);
}

nav();

const consentBox = document.getElementById("consentBox");
const acceptBtn = document.querySelector(".consentButton");
const rejectBtn = document.querySelector(".rejectButton");


acceptBtn.onclick = () => {
    document.cookie = "CookieBy=GeeksForGeeks; max-age=" + 60 * 60 * 24;
    if (document.cookie) {
        consentBox.classList.add("hide");
        setTimeout(() => {
            consentBox.classList.add("hidden");
        }, 300); 
    } else {
        alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
    }
};


rejectBtn.onclick = () => {
    alert("Cookies rejected. Some functionality may be limited.");
    consentBox.classList.add("hide");
    setTimeout(() => {
        consentBox.classList.add("hidden");
    }, 300);
};


let checkCookie = document.cookie.indexOf("CookieBy=GeeksForGeeks");
if (checkCookie !== -1) {
    consentBox.classList.add("hidden");
}

const resetBtn = document.getElementById("resetConsent");

resetBtn.onclick = () => {
    // Borrar la cookie
    document.cookie = "CookieBy=GeeksForGeeks=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Recargar la página
    location.reload();
};


