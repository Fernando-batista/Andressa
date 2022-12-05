function getAbamenu (status) {
    const element = document.querySelector("#aba-menu-hamburger") ; 
    element.style.display = status
}

function openMenu (event) {
    getAbamenu("block")
}
function closeMenu (event) {
    getAbamenu("none")
}

const oMenu = document.querySelector("#bt-menu") ;
oMenu.addEventListener("click", openMenu) ;

const cMenu = document.querySelector("#close") ;
cMenu.addEventListener("click", closeMenu) ;

const alet = document.querySelector("#seguir") ;
alet.addEventListener("click" , function () {
    alert("obrigada")
})