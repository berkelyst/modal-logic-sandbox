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