// constants.js

const DIRECTION = {
    NORTH: 'N',
    SOUTH: 'S',
    EAST: 'E',
    WEST: 'W',
    UP: 'U',
    DOWN: 'D',
};

const COMMAND = {
    FORWARD: 'F',
    BACKWARD: 'B',
    LEFT: 'L',
    RIGHT: 'R',
    UP: 'U',
    DOWN: 'D'
}

const DataDictionary = {
    // Level 1 - FaceDirection
    N: {
        // Level 2 - Top 
        U: {
            left: {
                FaceDirection: DIRECTION.WEST,
                Top: DIRECTION.UP,
            },
            right: {
                FaceDirection: DIRECTION.EAST,
                Top: DIRECTION.UP,
            },
            Up: {
                FaceDirection: DIRECTION.UP,
                Top: DIRECTION.SOUTH,
            },
            Down: {
                FaceDirection: DIRECTION.DOWN,
                Top: DIRECTION.NORTH,
            }
        },
        D: {
            left: {
                FaceDirection: DIRECTION.EAST,
                Top: DIRECTION.DOWN,
            },
            right: {
                FaceDirection: DIRECTION.WEST,
                Top: DIRECTION.DOWN,
            },
            Up: {
                FaceDirection: DIRECTION.DOWN,
                Top: DIRECTION.SOUTH,
            },
            Down: {
                FaceDirection: DIRECTION.UP,
                Top: DIRECTION.NORTH,
            }
        },
        E: {
            left: {
                FaceDirection: DIRECTION.UP,
                Top: DIRECTION.EAST,
            },
            right: {
                FaceDirection: DIRECTION.DOWN,
                Top: DIRECTION.EAST,
            },
            Up: {
                FaceDirection: DIRECTION.EAST,
                Top: DIRECTION.SOUTH,
            },
            Down: {
                FaceDirection: DIRECTION.WEST,
                Top: DIRECTION.NORTH,
            }
        },
        W: {
            left: {
                FaceDirection: DIRECTION.DOWN,
                Top: DIRECTION.WEST,
            },
            right: {
                FaceDirection: DIRECTION.UP,
                Top: DIRECTION.WEST,
            },
            Up: {
                FaceDirection: DIRECTION.WEST,
                Top: DIRECTION.SOUTH,
            },
            Down: {
                FaceDirection: DIRECTION.EAST,
                Top: DIRECTION.NORTH,
            }
        },
    },
    // Level 1 - FaceDirection
    S: {
        // Level 2 - Top 
        U: {
            left: {
                FaceDirection: DIRECTION.EAST,
                Top: DIRECTION.UP,
            },
            right: {
                FaceDirection: DIRECTION.WEST,
                Top: DIRECTION.UP,
            },
            Up: {
                FaceDirection: DIRECTION.UP,
                Top: DIRECTION.NORTH,
            },
            Down: {
                FaceDirection: DIRECTION.DOWN,
                Top: DIRECTION.SOUTH,
            }
        },
        D: {
            left: {
                FaceDirection: DIRECTION.WEST,
                Top: DIRECTION.DOWN,
            },
            right: {
                FaceDirection: DIRECTION.EAST,
                Top: DIRECTION.DOWN,
            },
            Up: {
                FaceDirection: DIRECTION.DOWN,
                Top: DIRECTION.NORTH,
            },
            Down: {
                FaceDirection: DIRECTION.UP,
                Top: DIRECTION.SOUTH,
            }
        },
        E: {
            left: {
                FaceDirection: DIRECTION.DOWN,
                Top: DIRECTION.EAST,
            },
            right: {
                FaceDirection: DIRECTION.UP,
                Top: DIRECTION.EAST,
            },
            Up: {
                FaceDirection: DIRECTION.EAST,
                Top: DIRECTION.NORTH,
            },
            Down: {
                FaceDirection: DIRECTION.WEST,
                Top: DIRECTION.SOUTH,
            }
        },
        W: {
            left: {
                FaceDirection: DIRECTION.UP,
                Top: DIRECTION.WEST,
            },
            right: {
                FaceDirection: DIRECTION.DOWN,
                Top: DIRECTION.WEST,
            },
            Up: {
                FaceDirection: DIRECTION.WEST,
                Top: DIRECTION.NORTH,
            },
            Down: {
                FaceDirection: DIRECTION.EAST,
                Top: DIRECTION.SOUTH,
            }
        },
    },
    // Level 1 - FaceDirection
    E: {
        // Level 2 - Top 
        U: {
            left: {
                FaceDirection: DIRECTION.NORTH,
                Top: DIRECTION.UP,
            },
            right: {
                FaceDirection: DIRECTION.SOUTH,
                Top: DIRECTION.UP,
            },
            Up: {
                FaceDirection: DIRECTION.UP,
                Top: DIRECTION.WEST,
            },
            Down: {
                FaceDirection: DIRECTION.DOWN,
                Top: DIRECTION.EAST,
            }
        },
        D: {
            left: {
                FaceDirection: DIRECTION.SOUTH,
                Top: DIRECTION.DOWN,
            },
            right: {
                FaceDirection: DIRECTION.NORTH,
                Top: DIRECTION.DOWN,
            },
            Up: {
                FaceDirection: DIRECTION.DOWN,
                Top: DIRECTION.WEST,
            },
            Down: {
                FaceDirection: DIRECTION.UP,
                Top: DIRECTION.EAST,
            }
        },
        N: {
            left: {
                FaceDirection: DIRECTION.DOWN,
                Top: DIRECTION.NORTH,
            },
            right: {
                FaceDirection: DIRECTION.UP,
                Top: DIRECTION.NORTH,
            },
            Up: {
                FaceDirection: DIRECTION.NORTH,
                Top: DIRECTION.WEST,
            },
            Down: {
                FaceDirection: DIRECTION.SOUTH,
                Top: DIRECTION.EAST,
            }
        },
        S: {
            left: {
                FaceDirection: DIRECTION.UP,
                Top: DIRECTION.SOUTH,
            },
            right: {
                FaceDirection: DIRECTION.DOWN,
                Top: DIRECTION.SOUTH,
            },
            Up: {
                FaceDirection: DIRECTION.SOUTH,
                Top: DIRECTION.WEST,
            },
            Down: {
                FaceDirection: DIRECTION.NORTH,
                Top: DIRECTION.EAST,
            }
        },
    },
    // Level 1 - FaceDirection
    W: {
        // Level 2 - Top 
        U: {
            left: {
                FaceDirection: DIRECTION.SOUTH,
                Top: DIRECTION.UP,
            },
            right: {
                FaceDirection: DIRECTION.NORTH,
                Top: DIRECTION.UP,
            },
            Up: {
                FaceDirection: DIRECTION.UP,
                Top: DIRECTION.EAST,
            },
            Down: {
                FaceDirection: DIRECTION.DOWN,
                Top: DIRECTION.WEST,
            }
        },
        D: {
            left: {
                FaceDirection: DIRECTION.NORTH,
                Top: DIRECTION.DOWN,
            },
            right: {
                FaceDirection: DIRECTION.SOUTH,
                Top: DIRECTION.DOWN,
            },
            Up: {
                FaceDirection: DIRECTION.DOWN,
                Top: DIRECTION.EAST,
            },
            Down: {
                FaceDirection: DIRECTION.UP,
                Top: DIRECTION.WEST,
            }
        },
        N: {
            left: {
                FaceDirection: DIRECTION.UP,
                Top: DIRECTION.NORTH,
            },
            right: {
                FaceDirection: DIRECTION.DOWN,
                Top: DIRECTION.NORTH,
            },
            Up: {
                FaceDirection: DIRECTION.NORTH,
                Top: DIRECTION.EAST,
            },
            Down: {
                FaceDirection: DIRECTION.SOUTH,
                Top: DIRECTION.WEST,
            }
        },
        S: {
            left: {
                FaceDirection: DIRECTION.DOWN,
                Top: DIRECTION.SOUTH,
            },
            right: {
                FaceDirection: DIRECTION.UP,
                Top: DIRECTION.SOUTH,
            },
            Up: {
                FaceDirection: DIRECTION.SOUTH,
                Top: DIRECTION.EAST,
            },
            Down: {
                FaceDirection: DIRECTION.NORTH,
                Top: DIRECTION.WEST,
            }
        },
    },
    // Level 1 - FaceDirection
    U: {
        // Level 2 - Top 
        N: {
            left: {
                FaceDirection: DIRECTION.EAST,
                Top: DIRECTION.NORTH,
            },
            right: {
                FaceDirection: DIRECTION.WEST,
                Top: DIRECTION.NORTH,
            },
            Up: {
                FaceDirection: DIRECTION.NORTH,
                Top: DIRECTION.DOWN,
            },
            Down: {
                FaceDirection: DIRECTION.SOUTH,
                Top: DIRECTION.UP,
            }
        },
        S: {
            left: {
                FaceDirection: DIRECTION.WEST,
                Top: DIRECTION.SOUTH,
            },
            right: {
                FaceDirection: DIRECTION.EAST,
                Top: DIRECTION.SOUTH,
            },
            Up: {
                FaceDirection: DIRECTION.SOUTH,
                Top: DIRECTION.DOWN,
            },
            Down: {
                FaceDirection: DIRECTION.NORTH,
                Top: DIRECTION.UP,
            }
        },
        E: {
            left: {
                FaceDirection: DIRECTION.SOUTH,
                Top: DIRECTION.EAST,
            },
            right: {
                FaceDirection: DIRECTION.NORTH,
                Top: DIRECTION.EAST,
            },
            Up: {
                FaceDirection: DIRECTION.EAST,
                Top: DIRECTION.DOWN,
            },
            Down: {
                FaceDirection: DIRECTION.WEST,
                Top: DIRECTION.UP,
            }
        },
        W: {
            left: {
                FaceDirection: DIRECTION.NORTH,
                Top: DIRECTION.WEST,
            },
            right: {
                FaceDirection: DIRECTION.SOUTH,
                Top: DIRECTION.WEST,
            },
            Up: {
                FaceDirection: DIRECTION.WEST,
                Top: DIRECTION.DOWN,
            },
            Down: {
                FaceDirection: DIRECTION.EAST,
                Top: DIRECTION.UP,
            }
        },
    },
    // Level 1 - FaceDirection
    D: {
        // Level 2 - Top 
        N: {
            left: {
                FaceDirection: DIRECTION.WEST,
                Top: DIRECTION.NORTH,
            },
            right: {
                FaceDirection: DIRECTION.EAST,
                Top: DIRECTION.NORTH,
            },
            Up: {
                FaceDirection: DIRECTION.NORTH,
                Top: DIRECTION.UP,
            },
            Down: {
                FaceDirection: DIRECTION.SOUTH,
                Top: DIRECTION.DOWN,
            }
        },
        S: {
            left: {
                FaceDirection: DIRECTION.EAST,
                Top: DIRECTION.SOUTH,
            },
            right: {
                FaceDirection: DIRECTION.WEST,
                Top: DIRECTION.SOUTH,
            },
            Up: {
                FaceDirection: DIRECTION.SOUTH,
                Top: DIRECTION.UP,
            },
            Down: {
                FaceDirection: DIRECTION.NORTH,
                Top: DIRECTION.DOWN,
            }
        },
        E: {
            left: {
                FaceDirection: DIRECTION.NORTH,
                Top: DIRECTION.EAST,
            },
            right: {
                FaceDirection: DIRECTION.SOUTH,
                Top: DIRECTION.EAST,
            },
            Up: {
                FaceDirection: DIRECTION.EAST,
                Top: DIRECTION.UP,
            },
            Down: {
                FaceDirection: DIRECTION.WEST,
                Top: DIRECTION.DOWN,
            }
        },
        W: {
            left: {
                FaceDirection: DIRECTION.SOUTH,
                Top: DIRECTION.WEST,
            },
            right: {
                FaceDirection: DIRECTION.NORTH,
                Top: DIRECTION.WEST,
            },
            Up: {
                FaceDirection: DIRECTION.WEST,
                Top: DIRECTION.UP,
            },
            Down: {
                FaceDirection: DIRECTION.EAST,
                Top: DIRECTION.DOWN,
            }
        },
    }
}

module.exports = {
    DataDictionary,
    DIRECTION,
    COMMAND
};
