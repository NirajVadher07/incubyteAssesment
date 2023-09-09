const { COMMAND } = require("./constants")

const ResolveCommand = (command, object) => {
    for (let i = 0; i < command.length; i++) {
        switch (command[i].toUpperCase()) {
            case COMMAND.FORWARD:
                object.moveForward();
                break;

            case COMMAND.BACKWARD:
                object.moveBackward();
                break;

            case COMMAND.LEFT:
                object.turnLeft();
                break;

            case COMMAND.RIGHT:
                object.turnRight();
                break;

            case COMMAND.UP:
                object.turnUp();
                break;

            case COMMAND.DOWN:
                object.turnDown();
                break;

            default:
                console.log("Invalid Command");
                return;
        }
    }
}

module.exports = ResolveCommand;