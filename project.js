// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Page fully loaded");

    // Search functionality
    const searchInput = document.querySelector(".search-input");
    const pizzaIcon = document.querySelector(".fa-pizza-slice");

    pizzaIcon.addEventListener("click", function () {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
        } else {
            alert("Please enter a food item to search.");
        }
    });

    // Genre button click events
    const genres = document.querySelectorAll(".veg, .non-veg, .both");
    genres.forEach(button => {
        button.addEventListener("click", function (e) {
            const genre = e.target.textContent.trim();
            alert(`You selected: ${genre}`);
        });
    });

    // Box hover logging (can be extended to more interaction)
    const boxes = document.querySelectorAll(".box1, .box2, .box3, .box4");
    boxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            console.log(`Hovered over: ${box.className}`);
        });
    });
});
