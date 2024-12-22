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