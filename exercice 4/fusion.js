function mergeIntervals(intervals) {
    // Si la liste est vide, retourner une liste vide
    if (intervals.length === 0) return [];

    // Trier les intervalles par temps de début
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]]; // Commencer avec le premier intervalle

    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const lastMerged = merged[merged.length - 1];

        // Vérifier si les intervalles se chevauchent
        if (current[0] <= lastMerged[1]) {
            // Fusionner les intervalles
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            // Ajouter l'intervalle actuel à la liste fusionnée
            merged.push(current);
        }
    }

    return merged;
}

// Test de l'algorithme
const intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
    [17, 20]
];

const result = mergeIntervals(intervals);
console.log(`Intervalles fusionnés : ${JSON.stringify(result)}`);