const SpaceCraft = require("./spacecraft");
const ResolveCommand = require("./ResolveCommand")

const Chandrayaan3 = new SpaceCraft("Chandrayaan3");

// Example usage:
ResolveCommand(['f', 'r', 'u', 'b', 'l'], Chandrayaan3);

// Display the final position and direction
Chandrayaan3.Display();