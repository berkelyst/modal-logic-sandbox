console.log("--- Tests logiques ---");
console.log("□p en w1 :", isBoxPTrue("w1", "p"));
console.log("◇p en w1 :", isDiamondPTrue("w1", "p"));
console.log("¬□p en w1 :", !isBoxPTrue("w1", "p"));
console.log("◇¬p en w1 :", isDiamondPTrue("w1", "¬p")); // À coder plus tard
console.log("□(p → q) en w1 :", isBoxImplies("w1", "p", "q"));