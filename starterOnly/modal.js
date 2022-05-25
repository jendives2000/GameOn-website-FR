function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
// SELECTION DU DIV DU FORMULR
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

// FUNC OUVRE LE DIV DU FORMULR
function launchModal() {
  modalbg.style.display = "block";
}

// FUNC FERME LE DIV DU FORMULR
function closeModal() {
  modalbg.style.display = "none";
}

// PREVIENS LE FORMULR DE SE FERMER SI IL NEST PAS VALIDE
const formulr = document.getElementById("formulr");

formulr.addEventListener("submit", (e) => {
  const btonCparti = document.getElementById("bton-cparti");
  if (btonCparti.valid === false) {
    e.preventDefault();
  }
});

// CONST DU CHECKBOX "J AI LU ET APP"
const inputCheckBox1 = document.getElementById("checkbox1");

// CONST DES BTON RADIO LOCATIONS
const inputLocation = document.getElementsByClass("checkbox-input");

// CONST DES CHAMPS DE REMPLISSAGE TEXTE
const inputText = document.getElementsByClass("text-control");
