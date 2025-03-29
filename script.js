// Function to handle form submission on the Contact Us page
document.getElementById('contact-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const query = document.getElementById('query').value;
    const errorMessage = document.getElementById('error-message');

    // Email and phone validation patterns
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[0-9]{10}$/;

    // Simple validation
    if (!name || !email || !phone || !query) {
        errorMessage.textContent = 'Please fill in all fields.';
        errorMessage.style.display = 'block';
        return;
    }

    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
        return;
    }

    if (!phonePattern.test(phone)) {
        errorMessage.textContent = 'Please enter a valid 10-digit phone number.';
        errorMessage.style.display = 'block';
        return;
    }

    // Hide error message if validation passes
    errorMessage.style.display = 'none';

    // Here you can handle the form data, e.g., send it to a server
    console.log('Form submitted:', { name, email, phone, query });

    // Clear the form after submission
    document.getElementById('contact-form').reset();
    alert('Thank you for your query! We will get back to you soon.');
});

// Optional: Add functionality to filter room types based on user selection
// This can be added to the types.html page if you want to implement filtering
document.addEventListener('DOMContentLoaded', function() {
    const boysRooms = document.querySelectorAll('#boys ~ ul li');
    const girlsRooms = document.querySelectorAll('#girls ~ ul li');

    // Example of filtering logic (you can expand this)
    // This is just a placeholder for future functionality
    // You can implement dropdowns or buttons to filter room types
});


// You can also add Google Maps integration here if needed
// For example, initializing a map on the location.html page
// Function to filter rooms based on search and rent limit
function filterRooms() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const rentLimit = document.getElementById('rent-filter').value;
    const rooms = document.querySelectorAll('.room-section');

    rooms.forEach(room => {
        const roomName = room.querySelector('h3').textContent.toLowerCase();
        const roomRent = parseInt(room.getAttribute('data-rent'), 10);

        const matchesSearch = roomName.includes(searchInput);
        const matchesRent = rentLimit ? roomRent <= rentLimit : true;

        if (matchesSearch && matchesRent) {
            room.style.display = 'block';
        } else {
            room.style.display = 'none';
        }
    });
}

// Event listener for search and filter inputs
document.getElementById('search-input')?.addEventListener('input', filterRooms);
document.getElementById('rent-filter')?.addEventListener('change', filterRooms);






  // This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
function initAutocomplete() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13,
      mapTypeId: "roadmap",
    });
    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
  
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds());
    });
  
    let markers = [];
  
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
  
      if (places.length == 0) {
        return;
      }
  
      // Clear out the old markers.
      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];
  
      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
  
      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }
  
        const icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };
  
        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location,
          }),
        );
        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  }
  
  window.initAutocomplete = initAutocomplete;