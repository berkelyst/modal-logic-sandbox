const model = {
  w1: { accessible: ["w2", "w3"], propositions: ["p"] },
  w2: { accessible: [], propositions: ["p"] },
  w3: { accessible: [], propositions: [] }
};

function isBoxPTrue(world, proposition) {
  const accessibleWorlds = model[world].accessible;
  return accessibleWorlds.every(w => model[w].propositions.includes(proposition));
}

console.log("□p est vrai en w1 :", isBoxPTrue("w1", "p"));
console.log("□p est vrai en w2 :", isBoxPTrue("w2", "p"));
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

console.log("□(p → q) est vrai en w1 :", isBoxImplies("w1", "p", "q"));
// Exemples
console.log("◇p est vrai en w1 :", isDiamondPTrue("w1", "p")); // true
console.log("◇p est vrai en w3 :", isDiamondPTrue("w3", "p")); // false
const model = {
  w1: { accessible: ["w2", "w3"], propositions: [] },
  w2: { accessible: [], propositions: ["p"] },
  w3: { accessible: [], propositions: [] }
};
const model = {
  w1: { accessible: ["w2", "w3"], propositions: ["p"] },
  w2: { accessible: [], propositions: ["q"] },
  w3: { accessible: [], propositions: [] }
};
function isDiamondNotPTrue(world, proposition) {
  const accessibleWorlds = model[world].accessible;
  return accessibleWorlds.some(w => !model[w].propositions.includes(proposition));
}

// Test
console.log("◇¬p est vrai en w1 :", isDiamondNotPTrue("w1", "p"));