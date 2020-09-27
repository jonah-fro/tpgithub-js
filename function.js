'use strict';

//Exercice 1

/**
 * myPutStr
 * @param {number || string} str
 * @return {String} toString
 */
function myPutStr(str) {
    if (typeof str !== "string") {
        return "Et pourquoi pas 42 ?";
    }    return str;
}
console.log(myPutStr('14'));
console.log(myPutStr(35));

//Exercice 2

/**
 * Compute Surface M2
 * @param {number} length
 * @param {number} width
 * @return {number} totalM2
 */
var computeSurfaceM2 = function computeSurfaceM2(length, width) {
  if ((typeof length !== 'number' )||(typeof width !== 'number')) {
    return new Error('NaN')
  }

  return length*width;
};

console.log(computeSurfaceM2(9, 39));
console.log(computeSurfaceM2(20, 'String'));

//Exercice 3

/**
  * Create my button
  * @param {string} selector
  */
  /*Ici je met un window.onload pour debbuger le (.appendChild) car comme 
  dans l'exercice sur les boucles, j'ai une erreur
  */
  window.onload = function debug(){
var createMyButton = function createMyButton(selector) {
    var targetEl = document.querySelector(selector);
    var el = document.createElement('button');
    el.textContent = 'My Button';    

    targetEl.appendChild(el);
}
}
/**
  * Detect My Age By Night
  * @param {string} selectorButton
  */
var detectMyAgeByNight = function detectMyAgeByNight(selectorButton) {
  var btn = document.querySelector(selectorButton);  

  btn.addEventListener('click', function() {
    var age = prompt('Entrez votre age :');    

    if (typeof parseInt(age) !== 'number') {
      return new Error('Not a number');
    }    

    if (parseInt(age) <= 17) {
      alert('Vous n\'avez pas le droit de rentrer dans le club');      

      return;

    }    

    alert('Vous êtes majeur vous pouvez entrer dans le club');    

    return;
  });
}

createMyButton('#app');
detectMyAgeByNight('button');

//Exercice 4
/*Créer une fonction “matrixGenerator” capable de générer une matrice
 en “table HTML” d’après un tableau à plusieurs dimensions. 
 Exemple de tableau à 2 dimensions pour générer
le HTML : “[[1, 1, 1, 1, 1], [0, 1, 0, 1, 0], [1, 0, 0, 1, 1]]”.
*/

function matrixGenerator() {

}



//Exercice 5
/*Vous devez réaliser une horloge numérique en affichant l’heure actuel
 en temps réel. Cette heure devra être actualisé chaque seconde.
 */
 function refresh(){
  var t = 1000;
  setTimeout('clock()',t)
}

 function clock() {
  var time = new Date()
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  if(hours < 10) {hours = "0" + hours;}
  if(minutes < 10) {minutes = "0" + minutes;}
  if(seconds < 10) {seconds = "0" + seconds;}
  var oclock = hours + ":" + minutes +":"+ seconds

  document.getElementById('horloge').innerHTML = oclock;
  refresh();
 }
 