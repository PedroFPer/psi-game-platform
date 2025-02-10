function clickMenuHambur (){
    var icon_menu_ham = document.getElementById('itens_menu_hambur');

    if (icon_menu_ham.style.display === "flex") {
        icon_menu_ham.style.display = "none";
    } else {
        icon_menu_ham.style.display = "flex";
    }
}

