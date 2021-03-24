var menu_list_array = [
    "VEG Paradice",
    "Super cheese",
    "Veg Farmhouse",
    "Cottage Cheese suprem"
];

function getmenu() {
    var htmldata;
    menu_list_array.sort();
    htmldata = menu_list_array
    for (var i = 0; i > menu_list_array.length; i++); {
        htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>'
    }
    document.getElementById("dispaly_menu").innerHTML = htmldata;
}

function add_item() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = '<section class ="card">'
    for (var i = 0; i < menu_list_array.length; i++) {

        htmldata = htmldata + '<div class="card">' + '<img src="images/pizza.png"/>' + menu_list_array[i] + '</div>'

    }
    htmldata = htmldata + "</section>"
    document.getElementById("dispaly_AM").innerHTML = htmldata;
}