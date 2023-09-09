class SpaceCraft {
    constructor(name) {
        this.name = name;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.FaceDirection = 'N';
        this.Top = 'U';
    }

    moveForward() {
        switch (this.FaceDirection) {
            case 'N':
                this.y += 1;
                break;
            case 'S':
                this.y -= 1;
                break;
            case 'E':
                this.x += 1;
                break;
            case 'W':
                this.x -= 1;
                break;
            case 'U':
                this.z += 1;
                break;
            case 'D':
                this.z -= 1;
                break;
        }
    }

    moveBackward() {
        switch (this.FaceDirection) {
            case 'N':
                this.y -= 1;
                break;
            case 'S':
                this.y += 1;
                break;
            case 'E':
                this.x -= 1;
                break;
            case 'W':
                this.x += 1;
                break;
            case 'U':
                this.z -= 1;
                break;
            case 'D':
                this.z += 1;
                break;
        }
    }

    turnLeft() {
        switch (this.FaceDirection) {
            case 'N':
                this.FaceDirection = 'W';
                break;
            case 'S':
                this.FaceDirection = 'E';
                break;
            case 'E':
                this.FaceDirection = 'N';
                break;
            case 'W':
                this.FaceDirection = 'S';
                break;
            default:
                break;
        }
    }

    turnRight() {
        switch (this.FaceDirection) {
            case 'N':
                this.FaceDirection = 'E';
                break;
            case 'S':
                this.FaceDirection = 'W';
                break;
            case 'E':
                this.FaceDirection = 'S';
                break;
            case 'W':
                this.FaceDirection = 'N';
                break;
            default:
                break;
        }
    }
    
}

module.exports = SpaceCraft;
