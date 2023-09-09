class SpaceCraft {

    static DataDictionary = {
        // Level 1 - FaceDirection
        N: {
            // Level 2 - Top 
            U: {
                left: {
                    FaceDirection: 'W',
                    Top: 'U',
                },
                right: {
                    FaceDirection: 'E',
                    Top: 'U',
                },
                Up: {
                    FaceDirection: 'U',
                    Top: 'S',
                },
                Down: {
                    FaceDirection: 'D',
                    Top: 'N',
                }
            },
            D: {
                left: {
                    FaceDirection: 'E',
                    Top: 'D',
                },
                right: {
                    FaceDirection: 'W',
                    Top: 'D',
                },
                Up: {
                    FaceDirection: 'D',
                    Top: 'S',
                },
                Down: {
                    FaceDirection: 'U',
                    Top: 'N',
                }
            },
            E: {
                left: {
                    FaceDirection: 'U',
                    Top: 'E',
                },
                right: {
                    FaceDirection: 'D',
                    Top: 'E',
                },
                Up: {
                    FaceDirection: 'E',
                    Top: 'S',
                },
                Down: {
                    FaceDirection: 'W',
                    Top: 'N',
                }
            },
            W: {
                left: {
                    FaceDirection: 'D',
                    Top: 'W',
                },
                right: {
                    FaceDirection: 'U',
                    Top: 'W',
                },
                Up: {
                    FaceDirection: 'W',
                    Top: 'S',
                },
                Down: {
                    FaceDirection: 'E',
                    Top: 'N',
                }
            },
        },
        // Level 1 - FaceDirection
        S: {
            // Level 2 - Top 
            U: {
                left: {
                    FaceDirection: 'E',
                    Top: 'U',
                },
                right: {
                    FaceDirection: 'W',
                    Top: 'U',
                },
                Up: {
                    FaceDirection: 'U',
                    Top: 'N',
                },
                Down: {
                    FaceDirection: 'D',
                    Top: 'S',
                }
            },
            D: {
                left: {
                    FaceDirection: 'W',
                    Top: 'D',
                },
                right: {
                    FaceDirection: 'E',
                    Top: 'D',
                },
                Up: {
                    FaceDirection: 'D',
                    Top: 'N',
                },
                Down: {
                    FaceDirection: 'D',
                    Top: 'S',
                }
            },
            E: {
                left: {
                    FaceDirection: 'D',
                    Top: 'E',
                },
                right: {
                    FaceDirection: 'U',
                    Top: 'E',
                },
                Up: {
                    FaceDirection: 'E',
                    Top: 'N',
                },
                Down: {
                    FaceDirection: 'W',
                    Top: 'S',
                }
            },
            W: {
                left: {
                    FaceDirection: 'U',
                    Top: 'W',
                },
                right: {
                    FaceDirection: 'D',
                    Top: 'W',
                },
                Up: {
                    FaceDirection: 'W',
                    Top: 'N',
                },
                Down: {
                    FaceDirection: 'E',
                    Top: 'S',
                }
            },
        },
        // Level 1 - FaceDirection
        E: {
            // Level 2 - Top 
            U: {
                left: {
                    FaceDirection: 'N',
                    Top: 'U',
                },
                right: {
                    FaceDirection: 'S',
                    Top: 'U',
                },
                Up: {
                    FaceDirection: 'U',
                    Top: 'W',
                },
                Down: {
                    FaceDirection: 'D',
                    Top: 'E',
                }
            },
            D: {
                left: {
                    FaceDirection: 'S',
                    Top: 'D',
                },
                right: {
                    FaceDirection: 'N',
                    Top: 'D',
                },
                Up: {
                    FaceDirection: 'D',
                    Top: 'W',
                },
                Down: {
                    FaceDirection: 'U',
                    Top: 'E',
                }
            },
            N: {
                left: {
                    FaceDirection: 'D',
                    Top: 'N',
                },
                right: {
                    FaceDirection: 'U',
                    Top: 'N',
                },
                Up: {
                    FaceDirection: 'N',
                    Top: 'W',
                },
                Down: {
                    FaceDirection: 'S',
                    Top: 'E',
                }
            },
            S: {
                left: {
                    FaceDirection: 'U',
                    Top: 'S',
                },
                right: {
                    FaceDirection: 'D',
                    Top: 'S',
                },
                Up: {
                    FaceDirection: 'S',
                    Top: 'W',
                },
                Down: {
                    FaceDirection: 'N',
                    Top: 'E',
                }
            },
        },
        // Level 1 - FaceDirection
        W: {
            // Level 2 - Top 
            U: {
                left: {
                    FaceDirection: 'S',
                    Top: 'U',
                },
                right: {
                    FaceDirection: 'N',
                    Top: 'U',
                },
                Up: {
                    FaceDirection: 'U',
                    Top: 'E',
                },
                Down: {
                    FaceDirection: 'D',
                    Top: 'W',
                }
            },
            D: {
                left: {
                    FaceDirection: 'N',
                    Top: 'D',
                },
                right: {
                    FaceDirection: 'S',
                    Top: 'D',
                },
                Up: {
                    FaceDirection: 'D',
                    Top: 'E',
                },
                Down: {
                    FaceDirection: 'U',
                    Top: 'W',
                }
            },
            N: {
                left: {
                    FaceDirection: 'U',
                    Top: 'N',
                },
                right: {
                    FaceDirection: 'D',
                    Top: 'N',
                },
                Up: {
                    FaceDirection: 'N',
                    Top: 'E',
                },
                Down: {
                    FaceDirection: 'S',
                    Top: 'W',
                }
            },
            S: {
                left: {
                    FaceDirection: 'D',
                    Top: 'S',
                },
                right: {
                    FaceDirection: 'U',
                    Top: 'S',
                },
                Up: {
                    FaceDirection: 'S',
                    Top: 'E',
                },
                Down: {
                    FaceDirection: 'N',
                    Top: 'W',
                }
            },
        },
        // Level 1 - FaceDirection
        U: {
            // Level 2 - Top 
            N: {
                left: {
                    FaceDirection: 'E',
                    Top: 'N',
                },
                right: {
                    FaceDirection: 'W',
                    Top: 'N',
                },
                Up: {
                    FaceDirection: 'N',
                    Top: 'D',
                },
                Down: {
                    FaceDirection: 'S',
                    Top: 'U',
                }
            },
            S: {
                left: {
                    FaceDirection: 'W',
                    Top: 'S',
                },
                right: {
                    FaceDirection: 'E',
                    Top: 'S',
                },
                Up: {
                    FaceDirection: 'S',
                    Top: 'D',
                },
                Down: {
                    FaceDirection: 'N',
                    Top: 'U',
                }
            },
            E: {
                left: {
                    FaceDirection: 'S',
                    Top: 'E',
                },
                right: {
                    FaceDirection: 'N',
                    Top: 'E',
                },
                Up: {
                    FaceDirection: 'E',
                    Top: 'D',
                },
                Down: {
                    FaceDirection: 'W',
                    Top: 'U',
                }
            },
            W: {
                left: {
                    FaceDirection: 'N',
                    Top: 'W',
                },
                right: {
                    FaceDirection: 'S',
                    Top: 'W',
                },
                Up: {
                    FaceDirection: 'W',
                    Top: 'D',
                },
                Down: {
                    FaceDirection: 'E',
                    Top: 'U',
                }
            },
        },
        // Level 1 - FaceDirection
        D: {
            // Level 2 - Top 
            N: {
                left: {
                    FaceDirection: 'W',
                    Top: 'N',
                },
                right: {
                    FaceDirection: 'E',
                    Top: 'N',
                },
                Up: {
                    FaceDirection: 'N',
                    Top: 'U',
                },
                Down: {
                    FaceDirection: 'S',
                    Top: 'D',
                }
            },
            S: {
                left: {
                    FaceDirection: 'E',
                    Top: 'S',
                },
                right: {
                    FaceDirection: 'W',
                    Top: 'S',
                },
                Up: {
                    FaceDirection: 'S',
                    Top: 'U',
                },
                Down: {
                    FaceDirection: 'N',
                    Top: 'D',
                }
            },
            E: {
                left: {
                    FaceDirection: 'N',
                    Top: 'E',
                },
                right: {
                    FaceDirection: 'S',
                    Top: 'E',
                },
                Up: {
                    FaceDirection: 'E',
                    Top: 'U',
                },
                Down: {
                    FaceDirection: 'W',
                    Top: 'D',
                }
            },
            W: {
                left: {
                    FaceDirection: 'S',
                    Top: 'W',
                },
                right: {
                    FaceDirection: 'N',
                    Top: 'W',
                },
                Up: {
                    FaceDirection: 'W',
                    Top: 'U',
                },
                Down: {
                    FaceDirection: 'E',
                    Top: 'D',
                }
            },
        }
    }

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
        if (SpaceCraft.DataDictionary[this.FaceDirection] && SpaceCraft.DataDictionary[this.FaceDirection][this.Top]) {
            const leftMovement = SpaceCraft.DataDictionary[this.FaceDirection][this.Top].left;
            if (leftMovement) {
                this.FaceDirection = leftMovement.FaceDirection;
                this.Top = leftMovement.Top;
            }
        }
    }

    turnRight() {
        if (SpaceCraft.DataDictionary[this.FaceDirection] && SpaceCraft.DataDictionary[this.FaceDirection][this.Top]) {
            const rightMovement = SpaceCraft.DataDictionary[this.FaceDirection][this.Top].right;
            if (rightMovement) {
                this.FaceDirection = rightMovement.FaceDirection;
                this.Top = rightMovement.Top;
            }
        }
    }

    turnUp() {
        if (SpaceCraft.DataDictionary[this.FaceDirection] && SpaceCraft.DataDictionary[this.FaceDirection][this.Top]) {
            // Retrieve the up movement information from the DataDictionary
            const upMovement = SpaceCraft.DataDictionary[this.FaceDirection][this.Top].Up;

            if (upMovement) {
                this.FaceDirection = upMovement.FaceDirection;
                this.Top = upMovement.Top;
            }
        }
    }

    turnDown() {
        if (SpaceCraft.DataDictionary[this.FaceDirection] && SpaceCraft.DataDictionary[this.FaceDirection][this.Top]) {
            // Retrieve the down movement information from the DataDictionary
            const downMovement = SpaceCraft.DataDictionary[this.FaceDirection][this.Top].Down;

            if (downMovement) {
                this.FaceDirection = downMovement.FaceDirection;
                this.Top = downMovement.Top;
            }
        }
    }
}

module.exports = SpaceCraft;
