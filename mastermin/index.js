//Color array
const colors = ["blue", "red", "green", "gold"];
// Player palette
let selectedColors = [];
// Bot palette
let botPalette = [];
// player side
let playerhand = document.getElementById("playerhand");
// Bot side
let enemyHand = document.getElementById("playerhand");
// Player's availiable choices
let choices = document.getElementById("choices");
/**
 * Créer la main de l'ennemi
 */
let shuffleEnemyHand = () => {
  i = 0;
  while (i < 4) {
    botPalette.push(colors[Math.floor(Math.random() * 4)]);
    i++;
  }
  //console.log(botPalette);
};
/**
 * Return la main du jouer sur la page html
 */
let renderPlayerHand = () => {
  // For each selected color render box
  selectedColors.forEach((color) => {
    // Creatin box
    const box = document.createElement("div");
    box.className = color;
    box.style = `background:${color};`;
    playerhand.appendChild(box);
  });
};
/**
 * Reset la séléction du joueur
 */
function resetSelected() {
  selectedColors.length = 0;
  playerhand.innerHTML = "";
  result.innerHTML = " ";
}
/**
 * @param {string} Couleur
 * Ajoute la couleur séléctionnée à la main du joueur && l'ajoute au DOM
 * Si la séléction est supérieur à 4 on reset la main du joueur
 */
function appendColor(thyColor) {
  if (selectedColors.length <= 3) {
    selectedColors.push(thyColor);
    //console.log(selectedColors);
    playerhand.innerHTML = ""; // Reset le contenu pour pas créer de doublons
    renderPlayerHand();
  } else {
    alert("To many color... restart");
    resetSelected();
    playerhand.innerHTML = "";
  }
}
let result = document.getElementById("result");

function checkColors(arr1, arr2) {
  score = 0;
  for (var i = arr1.length; i--; ) {
    if (arr1[i] !== arr2[i]) {
      result.innerHTML = `Vous avez 0`;
    } else {
      score++;
      result.innerHTML = `vous avez ${score}/4`;
    }
  }
}
const checkColorInit = () => {
  checkColors(botPalette, selectedColors);
};
shuffleEnemyHand();
