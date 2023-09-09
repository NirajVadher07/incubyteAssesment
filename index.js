const SpaceCraft = require("./spacecraft");
const ResolveCommand = require("./ResolveCommand")

const Chandrayaan3 = new SpaceCraft("Chandrayaan3");

// Example usage:
ResolveCommand(['f', 'f', 'b', 'f', 'f'], Chandrayaan3);

// Display the final position and direction
console.log(`Final Position: (${Chandrayaan3.x}, ${Chandrayaan3.y}, ${Chandrayaan3.z})`);
console.log(`Final Direction: ${Chandrayaan3.FaceDirection}`);
console.log(`Final Top: ${Chandrayaan3.Top}`);
