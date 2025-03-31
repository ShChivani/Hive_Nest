function submitSeekerForm() {
    let data = {
        userType: "Room Seeker",
        roomType: document.getElementById("seekerRoomType").value,
        budget: document.getElementById("seekerBudget").value,
        name: document.getElementById("seekerName").value,
        phone: document.getElementById("seekerPhone").value,
        location: document.getElementById("seekerLocation").value,
    };

    console.log("Submitted Data:", data);
    alert("Room Seeker details submitted successfully!");
}

function openGoogleMaps() {
    let location = document.getElementById("seekerLocation").value;
    if (location) {
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, "_blank");
    } else {
        alert("Please enter a location first.");
    }
}
