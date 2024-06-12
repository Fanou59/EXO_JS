// Exercice : Trouver les nombres premiers dans un intervalle
// Objectif :
// Écrire une fonction en JavaScript qui prend deux nombres, début et fin, et retourne un tableau de tous les nombres premiers dans cet intervalle inclusivement.

// Instructions :

// Crée une fonction nommée trouverNombresPremiers.
// La fonction doit accepter deux paramètres, début et fin, qui représentent les bornes de l'intervalle.
// Utilise une boucle pour parcourir chaque nombre dans l'intervalle et vérifie s'il est premier.
// Retourne un tableau de tous les nombres premiers trouvés dans l'intervalle.

function trouverNombresPremiers(debut, fin) {
  // initie un tableau des nombres
  let tableau = [];

  // on remplit le tableau avec les nombres compris entre début et fin
  for (let i = debut; i <= fin; i++) {
    if (estPremier(i)) {
      tableau.push(i);
    }
  }
  return tableau;
}
function estPremier(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Exemples de test
console.log(trouverNombresPremiers(10, 20)); // devrait afficher [11, 13, 17, 19]
console.log(trouverNombresPremiers(1, 10)); // devrait afficher [2, 3, 5, 7]
console.log(trouverNombresPremiers(20, 30)); // devrait afficher [23, 29]
console.log(trouverNombresPremiers(0, 5)); // devrait afficher [2, 3, 5]
