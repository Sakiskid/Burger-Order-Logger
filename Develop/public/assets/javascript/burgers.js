// This attaches the handlers to everything after the DOM is loaded
function eatBurger(id) {
    console.log("Burger with id: " + id + " was just eaten!");
    let burgerEl = $(`.burger-card[data-id="${id}"`)[0];
    console.log(burgerEl)

    let burger = {
        burger_name: $(burgerEl).find(".burger-card-title").val().trim(),
    }

    console.log("Burgername: ", $(burgerEl).find(".burger-card-title").text().trim());
    
    $.ajax('/', {
        type: "UPDATE",
        data: burger
    })
}