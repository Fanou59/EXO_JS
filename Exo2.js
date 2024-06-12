// Exercice : Vérifier si une chaîne de caractères est un palindrome
// Objectif :
// Écrire une fonction en JavaScript qui prend une chaîne de caractères en entrée et retourne true si la chaîne est un palindrome et false sinon. Un palindrome est une chaîne qui se lit de la même manière dans les deux sens, en ignorant les espaces, la ponctuation et la casse.

// Instructions :

// Crée une fonction nommée estPalindrome.
// La fonction doit accepter un paramètre, chaine, qui sera une chaîne de caractères.
// Convertis la chaîne en minuscules et supprime tous les caractères non alphabétiques.
// Vérifie si la chaîne nettoyée est identique à son inverse.
// Retourne true si c'est le cas, sinon false.

function estPalindrome(chaine) {
  // convertir la chaine de caractère en minuscule
  chaine = chaine.toLowerCase();

  // initier une variable contenant le regex pour supprimer ponctutation et espaces
  const regex = /[^a-z]/g;

  // on supprime la ponctuation et les espaces
  chaine = chaine.replace(regex, "");

  // inversement des caractères en splittant les lettres, inversant les places, reformer le mot
  let inverse = chaine.split("").reverse().join("");

  // condition pour vérifier si c'est un palindrome ou non
  return chaine === inverse;
}

// Exemples de test
console.log(estPalindrome("A man, a plan, a canal, Panama")); // devrait afficher true
console.log(estPalindrome("racecar")); // devrait afficher true
console.log(estPalindrome("Hello, World!")); // devrait afficher false
console.log(estPalindrome("Able was I ere I saw Elba")); // devrait afficher true
