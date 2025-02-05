function maxSubArraySum(arr) {
    // Vérifiez si le tableau est vide
    if (arr.length === 0) {
        return 0; // Retourne 0 pour un tableau vide
    }

    let maxSoFar = arr[0]; // Somme maximale trouvée jusqu'à présent
    let maxEndingHere = arr[0]; // Somme du sous-tableau actuel

    for (let i = 1; i < arr.length; i++) {
        // Mise à jour de la somme du sous-tableau actuel
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        
        // Mise à jour de la somme maximale
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar; // Retourne la somme maximale
}

// Test de l'algorithme avec différents tableaux
console.log(maxSubArraySum([1, -2, 3, 4, -1])); // Sortie : 7
console.log(maxSubArraySum([-1, -2, -3, -4])); // Sortie : -1
console.log(maxSubArraySum([5, 4, -1, 7, 8])); // Sortie : 23
console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Sortie : 6
console.log(maxSubArraySum([])); // Sortie : 0 (pour un tableau vide)

