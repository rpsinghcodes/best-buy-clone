document.addEventListener("DOMContentLoaded", () => {
  // ********** Thumbnail and Color Labels Functionality **********

  // Select all thumbnail images
  const thumbnails = document.querySelectorAll(".thumbnail");

  const colorLabels = document.querySelectorAll(".color-label");

  const mainImage = document.getElementById("main-image");

  // Function to update the main image when a thumbnail or color label is hovered
  const updateMainImage = (src) => {
    mainImage.src = src; // Update the source of the main image
  };

  // Add mouseover events to all thumbnails
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("mouseover", () => {
      updateMainImage(thumbnail.src); // Update main image with the thumbnail's source
    });
  });

  colorLabels.forEach((colorLabel) => {
    colorLabel.addEventListener("mouseover", () => {
      updateMainImage(colorLabel.src); // Update main image with the color label's source
    });
  });

  // Dynamic color label functionality
  const label = document.getElementById("color-label");
  const images = document.querySelectorAll("img[data-color]"); // Images with a data-color attribute

  images.forEach((image) => {
    image.addEventListener("mouseenter", () => {
      const color = image.getAttribute("data-color");
      label.textContent = `Color: ${color}`;
    });
    image.addEventListener("mouseleave", () => {
      label.textContent = "Color: ";
    });
  });

  // ********** Splide Slider Initialization **********

  // Initialized the main product slider
  var splide = new Splide("#product-slider", {
    type: "loop", // Enables infinite looping
    perPage: 1, // Displays one slide per page
    gap: "1rem", // Space between slides
    focus: "center", // Focus on the active slide
    pagination: false, // Disable pagination dots
    arrows: true, // Enable navigation arrows
    breakpoints: {
      1024: { perPage: 1 }, // Adjust settings for smaller screens
      768: { perPage: 1 }, // Adjust settings for mobile screens
    },
  });

  // Mount the main slider
  splide.mount();

  // Initialized the level-up slider
  const levelUpSlider = new Splide("#level-up-slider", {
    type: "loop", // Loop through slides
    perPage: 1, // Show one group of slides per page
    perMove: 1, // Move one group at a time
    gap: "1rem", // Space between slides
    pagination: false, // Disable pagination
    arrows: true, // Enable navigation arrows
    breakpoints: {
      1024: { perPage: 1 }, // Adjust settings for smaller screens
      768: { perPage: 1 }, // Adjust settings for mobile screens
    },
  }).mount();

  // ********** Save Button Functionality **********

  // Select all heart icons with the class 'fa-regular'
  const heartIcons = document.querySelectorAll(".fa-regular");

  // Loop through each heart icon to add click functionality
  heartIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const message = document.getElementById("saved-message");

      if (icon.classList.contains("fa-regular")) {
        // Add to saved items
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
        message.innerText = "Item added to your saved items!";
        message.classList.remove("hidden"); // Show the message
      } else {
        // Remove from saved items
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
        message.innerText = "Item removed from your saved items!";
        message.classList.remove("hidden"); // Show the message
      }

      // Hide the feedback message after 3 seconds
      setTimeout(() => {
        message.classList.add("hidden"); // Hide the message
      }, 3000);
    });
  });
});
