console.log("--- Tests logiques ---");
console.log("□p en w1 :", isBoxPTrue("w1", "p"));
console.log("◇p en w1 :", isDiamondPTrue("w1", "p"));
console.log("¬□p en w1 :", !isBoxPTrue("w1", "p"));
console.log("◇¬p en w1 :", isDiamondPTrue("w1", "¬p")); // À coder plus tard
console.log("□(p → q) en w1 :", isBoxImplies("w1", "p", "q"));

const model = {
  w1: { accessible: ["w2", "w3"], propositions: ["p"] },
  w2: { accessible: [], propositions: ["q"] },
  w3: { accessible: [], propositions: [] }
};

function isBoxPTrue(world, proposition) {
  const accessibleWorlds = model[world].accessible;
  return accessibleWorlds.every(w => model[w].propositions.includes(proposition));
}

function isDiamondPTrue(world, proposition) {
  const accessibleWorlds = model[world].accessible;
  return accessibleWorlds.some(w => model[w].propositions.includes(proposition));
}

function isBoxImplies(world, p, q) {
  const accessibleWorlds = model[world].accessible;
  return accessibleWorlds.every(w =>
    !model[w].propositions.includes(p) || model[w].propositions.includes(q)
  );
}

console.log("--- Tests logiques sur le modèle ---");
console.log("□p en w1 :", isBoxPTrue("w1", "p"));
console.log("◇p en w1 :", isDiamondPTrue("w1", "p"));
console.log("¬□p en w1 :", !isBoxPTrue("w1", "p"));
console.log("□(p → q) en w1 :", isBoxImplies("w1", "p", "q"));

const worldsList = ["w1", "w2", "w3"];

console.log("--- Tableau de vérité modale ---");
console.log("Formule\t\tw1\tw2\tw3");

function printRow(label, fn) {
  const values = worldsList.map(w => fn(w) ? "✔️" : "❌").join("\t");
  console.log(`${label}\t${values}`);
}

printRow("□p", w => isBoxPTrue(w, "p"));
printRow("◇p", w => isDiamondPTrue(w, "p"));
printRow("¬□p", w => !isBoxPTrue(w, "p"));
printRow("◇¬p", w => isDiamondNotPTrue(w, "p"));
printRow("□(p → q)", w => isBoxImplies(w, "p", "q"));