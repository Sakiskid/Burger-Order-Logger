// This attaches the handlers to everything after the DOM is loaded
function eatBurger(id) {
    console.log("Burger with id: " + id + " was just eaten!");
    let burgerEl = $(`.burger-card[data-id="${id}"`)[0];

    let burger = {
        id: id,
        burger_name: $(burgerEl).find(".burger-card-title").text().trim(),
        eaten: 1
    }
    
    $.ajax('/', {
        type: "PUT",
        data: burger
    })

    location.reload();
}