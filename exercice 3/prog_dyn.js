function knapsack(items, weightLimit) {
    const n = items.length;
    const dp = Array(n + 1).fill(null).map(() => Array(weightLimit + 1).fill(0));

    // Remplir le tableau dp
    for (let i = 1; i <= n; i++) {
        const [value, weight] = items[i - 1];

        for (let w = 0; w <= weightLimit; w++) {
            if (weight <= w) {
                // Choisir le maximum entre ne pas prendre l'item ou le prendre
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight] + value);
            } else {
                dp[i][w] = dp[i - 1][w]; // Ne pas prendre l'item
            }
        }
    }

    // La valeur maximale est dans dp[n][weightLimit]
    let maxValue = dp[n][weightLimit];
    let w = weightLimit;
    const includedItems = [];

    // Récupérer les items inclus dans la solution optimale
    for (let i = n; i > 0 && maxValue > 0; i--) {
        if (maxValue !== dp[i - 1][w]) {
            includedItems.push(items[i - 1]); // Item inclus
            maxValue -= items[i - 1][0]; // Réduire la valeur
            w -= items[i - 1][1]; // Réduire le poids
        }
    }

    return { maxValue: dp[n][weightLimit], includedItems };
}

// Test de l'algorithme
const items = [
    [60, 10],  // (valeur, poids)
    [100, 20],
    [120, 30]
];
const weightLimit = 50;

const result = knapsack(items, weightLimit);
console.log(`Valeur maximale: ${result.maxValue}`);
console.log(`Items inclus: ${JSON.stringify(result.includedItems)}`);