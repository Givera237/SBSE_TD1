function RechercheBinaire(listeTriee, nombre) 
{
    let left = 0;
    let right = listeTriee.length - 1;

    while (left <= right) 
    {
        const mid = Math.floor((left + right) / 2);

        if (listeTriee[mid] === nombre) 
        {
            return mid; // L'index de la valeur cible est trouvé
        } else if (listeTriee[mid] < nombre) 
        {
            left = mid + 1; // Cherche à droite
        } else 
        {
            right = mid - 1; // Cherche à gauche
        }
    }

    return -1; // Valeur cible non trouvée
}

// Test de l'algorithme
const listeTriee = [1, 3, 5, 7, 9, 11, 13, 15];
const nombre = 7;
const result = binarySearch(listeTriee, nombre);

console.log(result); // Affiche l'index de la valeur cible, ou -1 si non trouvé