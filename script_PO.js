document.getElementById("imageUpload").addEventListener("change", function (event) {
    const reader = new FileReader();
    reader.onload = function () {
        const img = document.getElementById("preview");
        img.src = reader.result;
        img.style.display = "block";
    };
    reader.readAsDataURL(event.target.files[0]);
});

function submitForm() {
    const budgetValue = document.getElementById("budget").value;
    if (budgetValue < 1000) {
        alert("Budget must be more than ₹2500");
        return;
    }

    const data = {
        userType: document.getElementById("userType").value,
        roomType: document.getElementById("roomType").value,
        budget: budgetValue,
        genderPreference: document.getElementById("genderPreference").value,
        contact: document.getElementById("contact").value,
        phone: document.getElementById("phone").value,
        location: document.getElementById("location").value,
        imageSrc: document.getElementById("preview").src,
    };

    const roomList = document.getElementById("room-list");
    roomList.style.display = "flex"; // Show after submission

    const newRoom = document.createElement("div");
    newRoom.classList.add("room-card");
    newRoom.innerHTML = `
        <img src="${data.imageSrc}" alt="${data.roomType}">
        <h3>${data.roomType}</h3>
        <p><strong>Budget:</strong> ₹${data.budget}</p>
        <p><strong>Gender Preference:</strong> ${data.genderPreference}</p>
        <p><strong>Contact:</strong> ${data.contact}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p class="location">📍 <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.location)}" target="_blank">${data.location}</a></p>
    `;

    roomList.appendChild(newRoom);
    alert("Property listed successfully!");
}

function openGoogleMaps() {
    const location = document.getElementById("location").value;
    if (location) {
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, "_blank");
    } else {
        alert("Please enter a location first.");
    }
}
