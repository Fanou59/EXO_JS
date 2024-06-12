# Exercices d'Algorithmie en JavaScript

Ce dépôt contient une série d'exercices d'algorithmie réalisés en JavaScript. Chaque exercice est conçu pour améliorer vos compétences en programmation et en résolution de problèmes.

## Table des matières

1. [Exercice 1 : Filtrer les nombres pairs et impairs d'un tableau](#exercice-1--filtrer-les-nombres-pairs-et-impairs-dun-tableau)
2. [Exercice 2 : Vérifier si une chaîne de caractères est un palindrome](#exercice-2--vérifier-si-une-chaîne-de-caractères-est-un-palindrome)
3. [Exercice 3 : Trouver les nombres premiers dans un intervalle](#exercice-3--trouver-les-nombres-premiers-dans-un-intervalle)

## Exercice 1 : Filtrer les nombres pairs et impairs d'un tableau

### Objectif

Créer une fonction en JavaScript qui prend un tableau de nombres en entrée et renvoie deux tableaux : l'un contenant tous les nombres pairs et l'autre tous les nombres impairs.

### Détails de l'exercice

- La fonction doit s'appeler `filterPairsImpairs`.
- La fonction doit prendre un seul argument, un tableau de nombres.
- La fonction doit renvoyer un objet contenant deux tableaux :
  - Un tableau avec tous les nombres pairs.
  - Un tableau avec tous les nombres impairs.

### Exemple

```javascript
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

// Exemple d'utilisation
console.log(filtrerPairsImpairs([1, 2, 3, 4, 5, 6]));
// devrait afficher { pairs: [2, 4, 6], impairs: [1, 3, 5] }
```

## Exercice 2 : Vérifier si une chaîne de caractères est un palindrome

### Objectif

Écrire une fonction en JavaScript qui prend une chaîne de caractères en entrée et retourne true si la chaîne est un palindrome et false sinon. Un palindrome est une chaîne qui se lit de la même manière dans les deux sens, en ignorant les espaces, la ponctuation et la casse.

### Détails de l'exercice

- Crée une fonction nommée estPalindrome.
- La fonction doit accepter un paramètre, chaine, qui sera une chaîne de caractères.
- Convertis la chaîne en minuscules et supprime tous les caractères non alphabétiques.
- Vérifie si la chaîne nettoyée est identique à son inverse.
- Retourne true si c'est le cas, sinon false.

## Exercice 3 : Trouver les nombres premiers dans un intervalle

### Objectif

Écrire une fonction en JavaScript qui prend deux nombres, début et fin, et retourne un tableau de tous les nombres premiers dans cet intervalle inclusivement.

### Détails de l'exercice

- Crée une fonction nommée trouverNombresPremiers.
- La fonction doit accepter deux paramètres, début et fin, qui représentent les bornes de l'intervalle.
- Utilise une boucle pour parcourir chaque nombre dans l'intervalle et vérifie s'il est premier.
- Retourne un tableau de tous les nombres premiers trouvés dans l'intervalle.

[def]: #exercice-3--Trouver-les-nombres-premiers-dans-un-intervalle
