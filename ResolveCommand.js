const ResolveCommand = (command, object) => {
    for (let i = 0; i < command.length; i++) {
        switch (command[i].toLowerCase()) {
            case 'f':
                object.moveForward();
                break;

            case 'b':
                object.moveBackward();
                break;

            case 'l':
                object.turnLeft();
                break;

            case 'r':
                object.turnRight();
                break;

            case 'u':
                object.turnUp();
                break;

            case 'd':
                object.turnDown();
                break;

            default:
                console.log("Invalid Command");
                return;
        }
    }
}

module.exports = ResolveCommand;