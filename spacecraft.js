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
                switch (this.Top) {
                    case 'W':
                        this.FaceDirection = 'D';
                        break;
                    case 'E':
                        this.FaceDirection = 'U';
                        break;
                    case 'U':
                        this.FaceDirection = 'W';
                        break;
                    case 'D':
                        this.FaceDirection = 'E';
                        break;
                    default:
                        break;
                }
                break;
            case 'S':
                switch (this.Top) {
                    case 'W':
                        this.FaceDirection = 'U';
                        break;
                    case 'E':
                        this.FaceDirection = 'D';
                        break;
                    case 'U':
                        this.FaceDirection = 'E';
                        break;
                    case 'D':
                        this.FaceDirection = 'W';
                        break;
                    default:
                        break;
                }
                break;
            case 'E':
                switch (this.Top) {
                    case 'N':
                        this.FaceDirection = 'D';
                        break;
                    case 'S':
                        this.FaceDirection = 'U';
                        break;
                    case 'U':
                        this.FaceDirection = 'N';
                        break;
                    case 'D':
                        this.FaceDirection = 'S';
                        break;
                    default:
                        break;
                }
                break;
            case 'W':
                switch (this.Top) {
                    case 'N':
                        this.FaceDirection = 'U';
                        break;
                    case 'S':
                        this.FaceDirection = 'D';
                        break;
                    case 'U':
                        this.FaceDirection = 'S';
                        break;
                    case 'D':
                        this.FaceDirection = 'N';
                        break;
                    default:
                        break;
                }
                break;
            case 'U':
                switch (this.Top) {
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
                break;
            case 'D':
                switch (this.Top) {
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
                break;
            default:
                break;
        }
    }

    turnRight() {
        switch (this.FaceDirection) {
            case 'N':
                switch (this.Top) {
                    case 'W':
                        this.FaceDirection = 'U';
                        break;
                    case 'E':
                        this.FaceDirection = 'D';
                        break;
                    case 'U':
                        this.FaceDirection = 'E';
                        break;
                    case 'D':
                        this.FaceDirection = 'W';
                        break;
                    default:
                        break;
                }
                break;
            case 'S':
                switch (this.Top) {
                    case 'W':
                        this.FaceDirection = 'D';
                        break;
                    case 'E':
                        this.FaceDirection = 'U';
                        break;
                    case 'U':
                        this.FaceDirection = 'W';
                        break;
                    case 'D':
                        this.FaceDirection = 'E';
                        break;
                    default:
                        break;
                }
                break;

            case 'E':
                switch (this.Top) {
                    case 'N':
                        this.FaceDirection = 'U';
                        break;
                    case 'S':
                        this.FaceDirection = 'D';
                        break;
                    case 'U':
                        this.FaceDirection = 'S';
                        break;
                    case 'D':
                        this.FaceDirection = 'N';
                        break;
                    default:
                        break;
                }
                break;
            case 'W':
                switch (this.Top) {
                    case 'N':
                        this.FaceDirection = 'D';
                        break;
                    case 'S':
                        this.FaceDirection = 'U';
                        break;
                    case 'U':
                        this.FaceDirection = 'N';
                        break;
                    case 'D':
                        this.FaceDirection = 'S';
                        break;
                    default:
                        break;
                }
                this.FaceDirection = 'N';
                break;
            case 'U':
                switch (this.Top) {
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
                break;
            case 'D':
                switch (this.Top) {
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
                break;
            default:
                break;
        }
    }

    turnUp() {
        if (this.FaceDirection !== 'U' && this.FaceDirection !== 'D') {
            if (this.FaceDirection === 'N') {
                this.Top = 'S';
            }

            else if (this.FaceDirection === 'S') {
                this.Top = 'N';
            }

            else if (this.FaceDirection === 'W') {
                this.Top = 'E';
            }

            else if (this.FaceDirection === 'E') {
                this.Top = 'W';
            }

            this.FaceDirection = 'U';
        }
    }


    turnDown() {
        if (this.FaceDirection !== 'D' && this.FaceDirection !== 'U') {
            this.Top = this.FaceDirection;
            this.FaceDirection = 'D';
        }
    }
}

module.exports = SpaceCraft;
