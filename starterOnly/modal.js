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
const btonCparti = document.getElementById("bton-cparti");

formulr.addEventListener("submit", (e) => {
  if (btonCparti.valid === false) {
    e.preventDefault();
  }
});

// AJOUTE AU DIV DE ERROR-PRENOM UN MESSAGE D'ERREUR
const errorPrenom = document.getElementById("error-prenom");
const prenom = document.getElementById("first");
let messagePrenom = [];

prenom.addEventListener("invalid", (e) => {
  messagePrenom.push("Veuillez entrer un prénom valide.");
  errorPrenom.innerText = messagePrenom.join(", ");
});

// Supprime le message d'erreur une fois qu'on sort du champs
prenom.addEventListener("focusout", (e) => {
  errorPrenom.innerHTML = "";
  // réinitialise le messagePrenom pour empêcher sa répétition
  messagePrenom = [];
});

// CONST DU CHECKBOX "J AI LU ET APP"
const inputCheckBox1 = document.getElementById("checkbox1");

// CONST DES BTON RADIO LOCATIONS
const inputLocation = document.getElementsByClass("checkbox-input");

// CONST DES CHAMPS DE REMPLISSAGE TEXTE
const inputText = document.getElementsByClass("text-control");
