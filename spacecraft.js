/*
 * Represents a spacecraft and provides methods to control its movement.
*/
const { DataDictionary, DIRECTION } = require('./constants');

class SpaceCraft {

    static DataDictionary = DataDictionary
    /**
     * Construct a new SpaceCraft object.
     * @param {string} Name - The Name of the spacecraft.
     * @param {number} X - The initial X-coordinate.
     * @param {number} Y - The initial Y-coordinate.
     * @param {number} Z - The initial Z-coordinate.
     * @param {string} FaceDirection - The initial facing direction (NORTH, SOUTH, EAST, WEST, UP, DOWN).
     * @param {string} Top - The initial top direction (UP, DOWN, NORTH, SOUTH, EAST, WEST).
     */
    constructor(Name, X = 0, Y = 0, Z = 0, FaceDirection = DIRECTION.NORTH, Top = DIRECTION.UP) {
        this.Name = Name;
        this.X = X;
        this.Y = Y;
        this.Z = Z;
        this.FaceDirection = FaceDirection;
        this.Top = Top;
    }

    Display() {
        console.log(`Name: ${this.Name}`);
        console.log(`Position (X, Y, Z): ${this.X}, ${this.Y}, ${this.Z}`);
        console.log(`FaceDirection: ${this.FaceDirection}`);
        console.log(`Top: ${this.Top}`);
    }

    Move(Direction) {
        switch (this.FaceDirection) {
            case DIRECTION.NORTH:
                this.Y += Direction;
                break;
            case DIRECTION.SOUTH:
                this.Y -= Direction;
                break;
            case DIRECTION.EAST:
                this.X += Direction;
                break;
            case DIRECTION.WEST:
                this.X -= Direction;
                break;
            case DIRECTION.UP:
                this.Z += Direction;
                break;
            case DIRECTION.DOWN:
                this.Z -= Direction;
                break;
        }
    }

    MoveForward() {
        this.Move(1);
        if (this.X > 5 || this.Y > 5 || this.Z > 5) {
            throw new Error("Boundary exceeded");
        }
    }

    MoveBackward() {
        this.Move(-1);
        if (this.X < -5 || this.Y < -5 || this.Z < -5) {
            throw new Error("Boundary exceeded");
        }
    }

    TurnLeft() {
        const LeftMovement = SpaceCraft.DataDictionary[this.FaceDirection]?.[this.Top]?.left;
        if (LeftMovement) {
            const { FaceDirection, Top } = LeftMovement;
            this.FaceDirection = FaceDirection;
            this.Top = Top;
        }

    }

    TurnRight() {
        const RightMovement = SpaceCraft.DataDictionary[this.FaceDirection]?.[this.Top]?.right;
        if (RightMovement) {
            const { FaceDirection, Top } = RightMovement;
            this.FaceDirection = FaceDirection;
            this.Top = Top;
        }

    }

    TurnUp() {
        const UpMovement = SpaceCraft.DataDictionary[this.FaceDirection]?.[this.Top]?.Up;
        if (UpMovement) {
            const { FaceDirection, Top } = UpMovement;
            this.FaceDirection = FaceDirection;
            this.Top = Top;
        }

    }

    TurnDown() {
        const DownMovement = SpaceCraft.DataDictionary[this.FaceDirection]?.[this.Top]?.Down;
        if (DownMovement) {
            const { FaceDirection, Top } = DownMovement;
            this.FaceDirection = FaceDirection;
            this.Top = Top;
        }

    }
}

module.exports = SpaceCraft;
