/*
 * Represents a spacecraft and provides methods to control its movement.
*/
const { DataDictionary, DIRECTION } = require('./constants');

class SpaceCraft {

    static DataDictionary = DataDictionary
    /**
     * Construct a new SpaceCraft object.
     * @param {string} name - The name of the spacecraft.
     * @param {number} x - The initial X-coordinate.
     * @param {number} y - The initial Y-coordinate.
     * @param {number} z - The initial Z-coordinate.
     * @param {string} FaceDirection - The initial facing direction (NORTH, SOUTH, EAST, WEST, UP, DOWN).
     * @param {string} Top - The initial top direction (UP, DOWN, NORTH, SOUTH, EAST, WEST).
     */
    constructor(name, x = 0, y = 0, z = 0, FaceDirection = DIRECTION.NORTH, Top = DIRECTION.UP) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.z = z;
        this.FaceDirection = FaceDirection;
        this.Top = Top;
    }

    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Position (x, y, z): ${this.x}, ${this.y}, ${this.z}`);
        console.log(`FaceDirection: ${this.FaceDirection}`);
        console.log(`Top: ${this.Top}`);
    }

    move(direction) {
        switch (this.FaceDirection) {
            case DIRECTION.NORTH:
                this.y += direction;
                break;
            case DIRECTION.SOUTH:
                this.y -= direction;
                break;
            case DIRECTION.EAST:
                this.x += direction;
                break;
            case DIRECTION.WEST:
                this.x -= direction;
                break;
            case DIRECTION.UP:
                this.z += direction;
                break;
            case DIRECTION.DOWN:
                this.z -= direction;
                break;
        }
    }

    moveForward() {
        this.move(1);
        if (this.x > 5 || this.y > 5 || this.z > 5) {
            throw new Error("Boundary exceeded");
        }
    }

    moveBackward() {
        this.move(-1);        
    }

    turnLeft() {
        const leftMovement = SpaceCraft.DataDictionary[this.FaceDirection]?.[this.Top]?.left;
        if (leftMovement) {
            const { FaceDirection, Top } = leftMovement;
            this.FaceDirection = FaceDirection;
            this.Top = Top;
        }

    }

    turnRight() {
        const rightMovement = SpaceCraft.DataDictionary[this.FaceDirection]?.[this.Top]?.right;
        if (rightMovement) {
            const { FaceDirection, Top } = rightMovement;
            this.FaceDirection = FaceDirection;
            this.Top = Top;
        }

    }

    turnUp() {
        const UpMovement = SpaceCraft.DataDictionary[this.FaceDirection]?.[this.Top]?.Up;
        if (UpMovement) {
            const { FaceDirection, Top } = UpMovement;
            this.FaceDirection = FaceDirection;
            this.Top = Top;
        }

    }

    turnDown() {
        const DownMovement = SpaceCraft.DataDictionary[this.FaceDirection]?.[this.Top]?.Down;
        if (DownMovement) {
            const { FaceDirection, Top } = DownMovement;
            this.FaceDirection = FaceDirection;
            this.Top = Top;
        }

    }
}

module.exports = SpaceCraft;
