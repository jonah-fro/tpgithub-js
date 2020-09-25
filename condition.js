'use strict';
/*
var min = 17;
console.log("Vous ne pouvez pas entrez vous n’êtes pas majeur vous avez")
var maj = 18;
console.log("Vous pouvez entrer vous êtes majeur vous avez")
var own = 42;
console.log("Vous êtes le patron de la boite !")
*/

//Exercice 1

var jonah = {
   name : "Jonah",
   age : "23",
   sex : "M"
}

if (jonah.age < 18) {
  console.log("Vous ne pouvez pas entrez, vous n’êtes pas majeur vous avez " + jonah.age)
}
else {
  console.log("Vous pouvez entrer, vous êtes majeur vous avez " + jonah.age)
}
if(jonah.age >= 42) {
  console.log("Vous êtes le patron de la boite !")
}

//Exercice 2

var rand = Math.floor(Math.random() * 31);

if (rand > 0 && rand <= 10) {
  console.log("Cool");
} else if (rand >= 11 && rand <= 20) {
  console.log("Tepid");
}else if (rand >= 21 && rand <= 30) {
  console.log("Warm");
}

//Exercice 3

const expr = "Thursday";
switch (expr) {
  case 'Monday':
  console.log("We are " + expr);
  break;
  case 'Tuesday':
  console.log("We are " + expr); 
  break 
  case 'Wednesday':
  console.log("We are " + expr);
  break;
  case 'Thursday':
  console.log("We are " + expr);
  break;
  case 'Friday':
  console.log("We are " + expr);
  break;
  case 'Saturday':
  console.log("We are " + expr);
  break;
  case 'Sunday':
  console.log("We are " + expr);
  break;
}
"l'argent" || "argent"
//Exercice 4
console.log("Vous êtes devant un génie, qui vous propose entre: La grande réponse sur la vie, l'univers, et tout le reste, de la nourriture, ou de l'argent.")
var myPromptValue = prompt("Choisissez entre : la réponse, la nourriture, ou l'argent"); 
console.log("Vous choisissez : " + myPromptValue)

if (myPromptValue === "la nourriture" || "nourriture") {
  console.log("Evidement, vous avez choisis "+ myPromptValue +" car s'il y a bien une chose dont vous vous moquez, c'est bien de la grande réponse sur la vie, l'univers et le reste")
} else if (myPromptValue === "l'argent" || "argent" ) {
  console.log("Evidement, vous avez choisis "+ myPromptValue +" car s'il y a bien une chose dont vous vous moquez, c'est bien de la grande réponse sur la vie, l'univers et le reste")
}
else if (myPromptValue === "la réponse" || "La réponse" || "réponse") {
   console.log("Il n'y a aucune réponse, la vie n'a pas de réponse, elle est complétement dénué de sens. Vous auriez du choisir la nourriture ou l'argent. Bonne journée")
}
//Exercice 5
//On ne peut utiliser un early return que dans une fonction, et nous ne pouvons pas utiliser de fonctions dans cet exercice.

//Exercice 6
var ternaire = ternaire != undefined ? "cette variable n'existe pas" : 42;

//Exercice 7
var family = Math.floor((Math.random() * 41));
var parent;
switch(family-family%10){
    case 10:
        var parent = 10;
        break;
    case 20:
        var parent = 20;
        break;
    case 30:
        var parent = 30;
        break;
    case 40:
        var parent = 40;
        break;
    default:
        var parent = "unités";
        break;
}
alert('Ce chiffre ('+family+') fait partie de la famille des '+parent);