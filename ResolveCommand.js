const ResolveCommand = (command, object) => {
    for (let i = 0; i < command.length; i++) {
        switch (command[i]) {
            case 'f':
                object.moveForward();
                break;

            case 'b':
                object.moveBackward();
                break;
            
            default:
                console.log("Invalid Command");
                return;
        }
    }
}

module.exports = ResolveCommand;