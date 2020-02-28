// COLOURS
var Reset = "\u001b[0m";
var Bright = "\x1b[1m";
var Dim = "\x1b[2m";
var Underscore = "\x1b[4m";
var Blink = "\x1b[5m";
var Reverse = "\x1b[7m";
var Hidden = "\x1b[8m";

var FgBlack = "\x1b[30m";
var FgRed = "\x1b[31m";
var FgGreen = "\x1b[32m";
var FgYellow = "\x1b[33m";
var FgBlue = "\x1b[34m";
var FgMagenta = "\x1b[35m";
var FgCyan = "\x1b[36m";
var FgWhite = "\x1b[97m";

var BgBlack = "\x1b[40m";
var BgRed = "\x1b[41m";
var BgGreen = "\x1b[42m";
var BgYellow = "\x1b[43m";
var BgBlue = "\x1b[44m";
var BgMagenta = "\x1b[45m";
var BgCyan = "\x1b[46m";
var BgWhite = "\x1b[47m";

var brightRedCol = "\x1b[91m";

function rgbtoansi256(args) {
    const r = args[0];
	const g = args[1];
	const b = args[2];

	// We use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	const ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return `\u001b[38;5;${ansi}m`;
}

function rgbtoansi256bg(args) {
    const r = args[0];
	const g = args[1];
	const b = args[2];

	// We use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	const ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return `\u001b[48;5;${ansi}m`;
}
//\u001b[38;5;${ID}m

//console.log(rgbtoansi256([123, 43, 50]) + "test?")

class ConsoleColour {
    constructor () {
        this._log = "";
    }

    get log() {
        console.log(this._log + "\u001b[0m");
        return this._log = "";
    }

    bright(text, space) {
        if (space == false) {
            this._log += `${Bright}${text || ""}${Reset}`;
            return this;
        }
        this._log += `${Bright}${text || ""}${Reset} `;
        return this;
    }

    dim(text, space) {
        if (space == false) {
            this._log += `${Dim}${text || ""}${Reset}`;
            return this;
        }
        this._log += `${Dim}${text || ""}${Reset} `;
        return this;
    }

    reverse(text, space) {
        if (space == false) {
            this._log += `${Reverse}${text || ""}${Reset}`;
            return this;
        }
        this._log += `${Reverse}${text || ""}${Reset} `;
        return this
    }

    blink(text, space) {
        if (space == false) {
            this._log += `${Blink}${text || ""}${Reset}`;
            return this;
        }
        this._log += `${Blink}${text || ""}${Reset} `;
        return this;
    }

    hidden(text, space) {
        if (space == false) {
            this._log += `${Hidden}${text || ""}${Reset}`;
            return this;
        }
        this._log += `${Hidden}${text || ""}${Reset} `;
        return this;
    }

    underline(text, space) {
        if (space == false) {
            this._log += `${Underscore}${text || ""}${Reset}`;
            return this;
        }
        this._log += ` ${Underscore}${text || ""}${Reset} `;
        return this;
    }

    black(text, space) {
        if (space == false) {
            this._log += `${FgBlack}${text || ""}${Reset}`;
            return this;
        }
        this._log += `${FgBlack}${text || ""} `;
        return this;
    }

    red(text, space) {
        if (space == false) {
            this._log += `${FgRed}${text || ""}${Reset}`;
            return this;
        }
        this._log += `${FgRed}${text || ""} `;
        return this;
    }

    green(text, space) {
        if (space == false) {
            this._log += `${FgGreen}${text || ""}${Reset}`;
            return this;
        }
        this._log +=`${FgGreen}${text || ""} `;
        return this;
    }

    yellow(text, space) {
        if (space == false) {
            this._log += `${FgYellow}${text || ""}${Reset}`;
            return this;
        }
        this._log += `${FgYellow}${text || ""} `;
        return this;
    }
    blue(text, space) {
        if (space == false) {
            this._log += `${FgBlue}${text || ""}${Reset}`;
            return this;
        }
        this._log += `${FgBlue}${text || ""} `;
        return this;
    }
    magenta(text, space) {
        if (space == false) {
            this._log += `${FgMagenta}${text || ""}${Reset}`;
            return this;
        }
        this._log += `${FgMagenta}${text || ""} `;
        return this;
    }
    cyan(text, space) {
        if (space == false) {
            this._log += `${FgCyan}${text || ""}${Reset}`;
            return this;
        }
        this._log += `${FgCyan}${text || ""} `;
        return this;
    }
    white(text, space) {
        if (space == false) {
            this._log += `${FgWhite}${text || ""}${Reset}`;
            return this;
        }
        this._log += `${FgWhite}${text || ""} `;
        return this;
    }
    
    brightRed(text, space) {
        if (space == false) {
            this._log += `${brightRedCol}${text || ""}${Reset}`;
            return this;
        }
        this._log += `${brightRedCol}${text || ""} `;
        return this;
    }

    backBlack(text) {
        if (text) {
            this._log += `${BgBlack}${FgWhite}${text || ""} `;
        }
        this._log += `${BgBlack}`;
        return this;
    }

    backRed(text) {
        if (text) {
            this._log += `${BgRed}${text || ""} `;
        }
        this._log += ` ${BgRed}`;
        return this;
    }

    backGreen(text) {
        if (text) {
            this._log += `${BgGreen}${text || ""} `;
        }
        this._log += `${BgGreen}`;
        return this;
    }

    backYellow(text) {
        if (text) {
            this._log += `${BgYellow}${text || ""}`;
        }
        this._log += `${BgYellow}`;
        return this;
    }

    backBlue(text) {
        if (text) {
            this._log += `${BgBlue}${text || ""} `;
        }
        this._log += `${BgBlue}`;
        return this;
    }

    backMagenta(text) {
        if (text) {
            this._log += `${BgMagenta}${text || ""} `;
        }
        this._log += `${BgMagenta}`;
        return this;
    }

    backCyan(text) {
        if (text) {
            this._log += `${BgRed}${text || ""} `;
        }
        this._log += `${BgCyan}`;
        return this;
    }
    backWhite(text) {
        if (text) {
            this._log += `${BgRed}${FgBlack}${text || ""} `;
        }
        this._log += ` ${BgWhite}`;
        return this;
    }
    reset() {
        this._log += `${Reset}`;
        return this;
    }
    rgbText(args, text, space) {
        let col;
        if (args < 3) {
            col = FgBlack;
            if (space == false) {
                this._log += `${FgYellow}${text || ""}${Reset}`;
                return this;
            }
            this._log += `${col}${text || ''} `;
            return this;
        }

        if (space == false) {
            this._log += `${col}${text || ""}`;
            return this;
        }

        col = rgbtoansi256(args) 
        this._log += `${col}${text} `;
        return this;
    }

    rgbBack(args, text) {
        let col;
        if (args < 3) {
            col = FgBlack;
            if (text) {
                this._log += `${col}${FgWhite}${text || ""} `;
                return this;
            }
            this._log += `${col}`;
            return this;
        }
        col = rgbtoansi256bg(args);
        if (text) {
            this._log += `${col}${text || ""} `;
            return this;
        }
        
        this._log += `${col}`;
        return this;
    }
}

export {
    ConsoleColour
}