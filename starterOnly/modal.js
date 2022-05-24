function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements

const modalbg = document.querySelector(".bground");

const modalBtn = document.querySelectorAll(".modal-btn");

const formData = document.querySelectorAll(".formData");

// BOUTON CROIX POUR FERMER LE FORMULR
const btnCroix = document.querySelector("[data-croix]");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// CLICK FERMER LE FORMULR
btnCroix.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// FERMER LE FORMULR
function closeModal() {
  modalbg.style.display = "none";
}
