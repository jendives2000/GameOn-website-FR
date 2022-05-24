function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
// SELECTION DU FORMULR
const modalbg = document.querySelector(".bground");

// SELECTION DE TOUS LES BTONS MODAL-BTN (mais seul 1 bton existe) en un node.list
const modalBtn = document.querySelectorAll(".modal-btn");

// SELECTION DE TOUS LES DIVs formData (7 existe) en un node.list
const formData = document.querySelectorAll(".formData");

// CLICK OUVRIR LE FORMULR (BTON JE M INSCRIS)
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// BOUTON CROIX POUR FERMER LE FORMULR
const btnCroix = document.querySelector("[data-croix]");

// CLICK FERMER LE FORMULR
btnCroix.addEventListener("click", closeModal);

// FUNC OUVRE LE FORMULR
function launchModal() {
  modalbg.style.display = "block";
}

// FUNC FERME LE FORMULR
function closeModal() {
  modalbg.style.display = "none";
}
