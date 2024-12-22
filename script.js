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





//    Hero section menu

const hamburger = document.querySelector('.hamburgerIcon');

const hamburgerContent = document.querySelector(".hamburgerContent");
const closeHamburger = document.querySelector(".closeHamburger");
let isHamburgerOpen = false;
const hamburgerIconn= document.querySelector('.hamburgerIconn');

// Select all menu buttons
const menuButtons = document.querySelectorAll(".menuMain");

// Variable to track the currently selected button
let activeButton = null;

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // If the button clicked is already active, deactivate it
    if (activeButton === button) {
      resetButton(activeButton);
      activeButton = null;
      return;
    }

    // Deactivate the previously active button
    if (activeButton) resetButton(activeButton);

    // Activate the current button
    setActiveButton(button);
    activeButton = button;
  });
});

// Function to reset button styles
function resetButton(button) {
  button.style.backgroundColor = "white";
  button.style.color = "#0046be";
  const arrow = button.querySelector("svg");
  if (arrow) arrow.setAttribute("fill", "#0046be");
}

// Function to activate a button
function setActiveButton(button) {
    console.log(button.innerHTML)
  button.style.backgroundColor = "#0046be";
  button.style.color = "white";
  const arrow = button.querySelector("svg");
  if (arrow) arrow.setAttribute("fill", "white");
}





// hamburgerContent.addEventListener("click", () => stopClickPropagation(e));

function stopClickPropagation(event) {
    event.stopPropagation();
  }

hamburger.addEventListener("click", () => toggleHamburger())

closeHamburger.addEventListener("click", () => toggleHamburger())



function toggleHamburger(){
    const hamburger = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="hamburger" width="32" height="32"
                         x="0" y="0" version="1.1" viewBox="0 0 32 32">
                        <g fill="#ffffff">
                            <path
                                d="M1 8h30a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2zM31 15H1a1 1 0 0 0 0 2h30a1 1 0 0 0 0-2zM31 24H1a1 1 0 0 0 0 2h30a1 1 0 0 0 0-2z">
                            </path>
                        </g>
                    </svg>`
    const closeHamburger = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 24 24" aria-hidden="true" role="img" class="close-hamburger-icon" fill="white" height="28" width="28"><path d="M4.75 20c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l14.5-14.5c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-14.5 14.5c-.15.15-.34.22-.53.22"></path><path d="M19.25 20c-.19 0-.38-.07-.53-.22L4.22 5.28c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l14.5 14.5c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"></path></svg>`
    isHamburgerOpen = !isHamburgerOpen;
    hamburgerContent.style.display = isHamburgerOpen ? "none" : "block";
    hamburgerIconn.innerHTML = isHamburgerOpen ? hamburger : closeHamburger;
    
}



// Account section

const toggleOpen = document.querySelector('.toggleOpen');
const accountMenu = document.querySelector('.accountMenu');
const closeAccountMenu = document.querySelector('.closeAccountMenu');

let isAccountMenuOpen = false;
toggleOpen.addEventListener("click", () => {
  isAccountMenuOpen = !isAccountMenuOpen;
  accountMenu.style.display = isAccountMenuOpen ? "none" : "block"; 

})

closeAccountMenu.addEventListener("click", () => {
  isAccountMenuOpen = !isAccountMenuOpen;
  accountMenu.style.display = isAccountMenuOpen ? "none" : "block"; 
})