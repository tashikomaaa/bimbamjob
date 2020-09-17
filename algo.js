const text = `44 S
GADDAAGADAA
22 N
AADGGDADGA`
const sizeInit = '5, 5'
let posGrid = [];


const split = (string, type) => {
    if(type == 'size') {
        return string.split(',')
    } 
    else {
        let actions = string.split('\n')
        actions.forEach((el, i) => {
            actions[i] = el.split(' ')
        });
        return actions
    }
}

const buildLawn = (size) => {
    let grille = new Array(parseInt(size[0], 10));
    for (var x = 0; x < parseInt(size[0], 10)+1; x++) {
        grille[x] = new Array(parseInt(size[1], 10));
        for (var y = 0; y < parseInt(size[1], 10)+1; y++) {
            grille[x][y]='*';
        }
    }
    posGrid = grille

    let lawn = ``;
    grille.forEach( row => {
        lawn += '|'
        row.forEach(cell => {
            lawn += `${cell}|`
        });
        lawn += '\n'
    });
    return grille;
}

const checkCase = (grille, x, y) => {
    switch (grille[x, y]) {
        case 0:
            grille[x,y] = -1;
            return true;
        case -1:
            return true;
        default:
            return false;
    }
}

const mower2 = (actions, grille) => {
    let mower = actions[2];
    let pos = mower[0]
    let oldcardinal = mower[1];
    let newCardinal = mower[1];
    let x = parseInt(pos[0], 10);
    let y = parseInt(pos[1], 10);
    let moves = actions[3][0].split('');
    posGrid[x][y] = 'o'
    moves.forEach(element => {
        switch (element) {
            case "G":
                switch (oldcardinal) {
                    case 'N':
                        newCardinal = 'W';
                        break;
                    case 'E':
                        newCardinal = 'N';
                        break;
                    case 'S':
                        newCardinal = 'E';
                        break;
                    case 'W':
                        newCardinal = 'S';
                    default:
                        break;
                }
                break;
            case "D":
                switch (oldcardinal) {
                    case 'N':
                        newCardinal = 'E';
                        break;
                    case 'E':
                        newCardinal = 'S';
                        break;
                    case 'S':
                        newCardinal = 'W';
                        break;
                    case 'W':
                        newCardinal = 'N';
                    default:
                        break;
                }
                break;
            case "A":
                switch (newCardinal) {
                    case 'N':
                        (x+1) != grille[0].length ? x= x+1 : newCardinal = oldcardinal;
                        break;
                    case 'S':
                        (x-1) != -1 ? x=x-1 : newCardinal = oldcardinal;
                        break;
                    case 'E':
                        (y+1) != grille.length ? y=y+1 : newCardinal = oldcardinal;
                        break;
                    case 'W':
                        (y-1) != -1 ? y=y-1 : newCardinal = oldcardinal;
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
        oldcardinal = newCardinal
        console.log('$ position: ', y, x)
        switch (oldcardinal) {
            case 'N':
                console.log('direction: N \u2191')
                break;
            case 'E':
                console.log('direction: E \u2192')
                break;
            case 'S':
                console.log('direction: S \u2193')
                break;
            case 'W':
                console.log('direction: W \u2190')
            default:
                break;
        }
    }
)
return true;
}

const mower1 = (actions, grille) => {
    let mower = actions[0];
    let pos = mower[0]
    let oldcardinal = mower[1];
    let newCardinal = mower[1];
    let x = parseInt(pos[0], 10);
    let y = parseInt(pos[1], 10);
    let moves = actions[1][0].split('');

    posGrid[x][y] = 'o'

    moves.forEach(element => {
        switch (element) {
            case "G":
                switch (oldcardinal) {
                    case 'N':
                        newCardinal = 'W';
                        break;
                    case 'E':
                        newCardinal = 'N';
                        break;
                    case 'S':
                        newCardinal = 'E';
                        break;
                    case 'W':
                        newCardinal = 'S';
                    default:
                        break;
                }
                break;
            case "D":
                switch (oldcardinal) {
                    case 'N':
                        newCardinal = 'E';
                        break;
                    case 'E':
                        newCardinal = 'S';
                        break;
                    case 'S':
                        newCardinal = 'W';
                        break;
                    case 'W':
                        newCardinal = 'N';
                    default:
                        break;
                }
                break;
                case "A":
                    switch (newCardinal) {
                        case 'N':
                            (x+1) != grille[0].length ? x= x+1 : newCardinal = oldcardinal;
                            break;
                        case 'S':
                            (x-1) != -1 ? x=x-1 : newCardinal = oldcardinal;
                            break;
                        case 'E':
                            (y+1) != grille.length ? y=y+1 : newCardinal = oldcardinal;
                            break;
                        case 'W':
                            (y-1) != -1 ? y=y-1 : newCardinal = oldcardinal;
                            break;
                        default:
                            break;
                    }
                    break;
            default:
                break;
        }
        oldcardinal = newCardinal
        console.log('position: ', y, x)
        switch (oldcardinal) {
            case 'N':
                console.log('direction: N \u2191')
                break;
            case 'E':
                console.log('direction: E \u2192')
                break;
            case 'S':
                console.log('direction: S \u2193')
                break;
            case 'W':
                console.log('direction: W \u2190')
            default:
                break;
        }    
    }
)
return true;
}

const main = () => {
    const size = split(sizeInit, 'size');
    const actions = split(text, '')
    const grille = buildLawn(size)
    mower1(actions, grille)
    console.log('===============================')
    mower2(actions, grille)

}

main()