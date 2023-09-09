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
 
}

module.exports = SpaceCraft;
