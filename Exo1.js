// Instructions :

// Crée une fonction nommée filtrerPairsImpairs.
// La fonction doit accepter un paramètre, tableau, qui sera un tableau de nombres.
// Utilise une boucle pour parcourir le tableau et séparer les nombres pairs et impairs.
// Retourne un objet avec deux propriétés : pairs et impairs, chacune contenant un tableau des nombres correspondants.

function filtrerPairsImpairs(tableau) {
  // Initialise les variables pour récupérer les pairs et impairs
  let pairs = [];
  let impairs = [];

  //boucle pour parcourir le tableau de nombres
  for (let i = 0; i < tableau.length; i++) {
    //on vérifie la condition que le modulo de 2 = 0 pour chiffre pairs
    if (tableau[i] % 2 === 0) {
      pairs.push(tableau[i]); //on ajoute dans le tableau des pairs
    } else {
      impairs.push(tableau[i]); //on ajoute dans le tableau des impairs dans le cas contraire
    }
  }
  return { pairs: pairs, impairs: impairs };
}

// Exemples de test
console.log(filtrerPairsImpairs([1, 2, 3, 4, 5, 6])); // devrait afficher { pairs: [2, 4, 6], impairs: [1, 3, 5] }
console.log(filtrerPairsImpairs([10, 15, 20, 25, 30])); // devrait
console.log(filtrerPairsImpairs([0, -1, -2, -3])); // devrait afficher { pairs: [0, -2], impairs: [-1, -3] }
console.log(filtrerPairsImpairs([])); // devrait afficher { pairs: [], impairs: [] }
