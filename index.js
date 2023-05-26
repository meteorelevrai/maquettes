function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
function menu_open(){
    document.getElementById("menu").setAttribute("class", "menu-open")
    document.getElementById("menu_open").setAttribute("class", "ico-menu-open-hid")
}
function menu_close(){
    document.getElementById("menu").setAttribute("class", "menu-close")
    document.getElementById("menu_open").setAttribute("class", "ico-menu-open-visi")
}
function profil(){
    window.open('profil/index.html')
}