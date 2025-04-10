function navigateTo(page) {
    window.location.href = page;
}
document.addEventListener("DOMContentLoaded", function () {
    console.log("Menu Page Loaded!");

    // Example: Click Event for Adding to Cart (If You Have Buttons)
    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("click", () => {
            alert(`You selected: ${item.querySelector("h3").innerText}`);
        });
    });
});
