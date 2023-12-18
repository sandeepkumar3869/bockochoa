document.addEventListener("DOMContentLoaded", function() {
    // Get the image element
    var img = document.getElementById("randomImage");

    // Define an array of image URLs (replace these with your image URLs)
    var imageUrls = [
        "url1.jpg",
        "url2.jpg",
        "url3.jpg",
        // Add more URLs as needed
    ];

    // Generate a random index to select a random image from the array
    var randomIndex = Math.floor(Math.random() * imageUrls.length);

    // Set the src attribute of the image element to the randomly selected image URL
    img.src = imageUrls[randomIndex];
});
