const { COMMAND } = require("./constants")

const ResolveCommand = (command, object) => {
    for (let i = 0; i < command.length; i++) {
        switch (command[i].toUpperCase()) {
            case COMMAND.FORWARD:
                object.MoveForward();
                break;

            case COMMAND.BACKWARD:
                object.MoveBackward();
                break;

            case COMMAND.LEFT:
                object.TurnLeft();
                break;

            case COMMAND.RIGHT:
                object.TurnRight();
                break;

            case COMMAND.UP:
                object.TurnUp();
                break;

            case COMMAND.DOWN:
                object.TurnDown();
                break;

            default:
                console.log("Invalid Command");
                return;
        }
    }
}

module.exports = ResolveCommand;