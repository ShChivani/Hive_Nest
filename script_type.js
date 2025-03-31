document.addEventListener("DOMContentLoaded", function () {
    function filterRooms() {
        let minPrice = parseInt(document.getElementById("price-min").value) || 0;
        let maxPrice = parseInt(document.getElementById("price-max").value) || Infinity;

        document.querySelectorAll(".room-section").forEach((room) => {
            let priceText = room.querySelector("p strong").nextSibling.nodeValue.trim(); // Extract price text
            let priceMatch = priceText.match(/\d+/g); // Extract numeric value

            if (priceMatch) {
                let price = parseInt(priceMatch[0]); // Convert to number

                if (price >= minPrice && price <= maxPrice) {
                    room.style.display = "flex"; // Show matching rooms
                } else {
                    room.style.display = "none"; // Hide non-matching rooms
                }
            }
        });
    }

    // Attach event listener to the filter button
    document.querySelector("button").addEventListener("click", filterRooms);
});
