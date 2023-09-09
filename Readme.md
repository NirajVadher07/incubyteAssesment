# TDD Assessment

### Problem statement

#### Chandrayaan 3 Lunar Craft: Galactic Space Craft Control

##### Description

- As a scientist at ISRO controlling the latest lunar spacecraft Chandrayaan 3, your task is to develop a program that translates commands sent from Earth into instructions understood by the spacecraft. The spacecraft navigates through the galaxy using galactic coordinates, represented by x, y, z coordinates (x for east or west location, y for north or south location, and z for distance above or below the galactic plane).

##### Requirements

You will be given the initial starting point (x, y, z) of the spacecraft and the direction it is facing (N, S, E, W, Up, Down). The spacecraft receives a character array of commands, and you are required to implement the following functionalities:

- **_Move_** the spacecraft forward/backward (f, b): The spacecraft moves one step forward or backward based on its current direction.

- **_Turn_** the spacecraft left/right (l, r): The spacecraft rotates 90 degrees to the left or right, changing its facing direction.

- **_Turn_** the spacecraft up/down (u, d): The spacecraft changes its angle, rotating upwards or downwards.

#### Test Case

Given the starting point (0, 0, 0) following (x, y, z) and initial direction N, the following commands should result in the indicated final position and direction:

Commands: `[“f”, “r”, “u”, “b”, “l”]`

Starting Position: `(0, 0, 0)`

Initial Direction: `N`

- “f” - (0, 1, 0) - N
- “r” - (0, 1, 0) - E
- “u” - (0, 1, 0) - U
- “b” - (0, 1, -1) - U
- “l” - (0, 1, -1) - N

```
Final Position: (0, 1, -1)
Final Direction: N
```

#### Solution

The solution presented here is the development of a `SpaceCraft` class using the **_Test-Driven Development (TDD)_** technique. The class is designed to represent a spacecraft and provides various methods for _controlling its movement and orientation_. Additionally, unit testing has been performed using the **_Mocha testing framework_** to ensure the correctness of the class's functionality.

- **_SpaceCraft Class_**: The core of the solution is the SpaceCraft class, which is designed to encapsulate the behavior and properties of a spacecraft. The class includes attributes such as `name, x, y, z, FaceDirection, Top` which define the spacecraft's identity, position, and orientation.

- **_Test-Driven Development (TDD)_**: The development of the SpaceCraft class follows the TDD approach, which involves the following steps:

  - **Write Tests**: Before implementing the functionality, unit tests are written to define the expected behavior of the class's methods. These tests serve as a blueprint for the class's functionality.

  - **_Implement Code_**: Once the tests are defined, the code is implemented to make the tests pass. In this solution, methods like `moveForward`, `moveBackward`, `turnUp`, `turnDown`, `turnLeft`, and `turnRight` are developed to fulfill the specified requirements.

  - **_Run Tests_**: After implementing the code, the unit tests are executed to verify that the class behaves as expected and passes all test cases.

  - **_Refactor Code_**: If necessary, the code is refactored to improve readability, maintainability, or performance while ensuring that all tests continue to pass.

- **_Unit Testing with Mocha_**: Mocha is a popular testing framework for JavaScript that is used to run the unit tests. This ensures that the class functions correctly and consistently. There are namely six hooks used in the testing by this framework to set up or load up preconditions used in the testing (it(), describe(), beforeEach(), afterEach(), before(), after()). Chai provides a set of assertion styles and functions that make it easier to write expressive and readable assertions in your test code.

- **_Separation of Constants_**: To improve code organization and modularity, constants like _DataDictionary_, _DIRECTION_, and _COMMAND_ are defined in a separate `constants.js` file. This separation allows for easy management and reusability of constants.
