// COLOURS
var Reset = "\x1b[0m"
var Bright = "\x1b[1m"
var Dim = "\x1b[2m"
var Underscore = "\x1b[4m"
var Blink = "\x1b[5m"
var Reverse = "\x1b[7m"
var Hidden = "\x1b[8m"

var FgBlack = "\x1b[30m"
var FgRed = "\x1b[31m"
var FgGreen = "\x1b[32m"
var FgYellow = "\x1b[33m"
var FgBlue = "\x1b[34m"
var FgMagenta = "\x1b[35m"
var FgCyan = "\x1b[36m"
var FgWhite = "\x1b[97m"

var BgBlack = "\x1b[40m"
var BgRed = "\x1b[41m"
var BgGreen = "\x1b[42m"
var BgYellow = "\x1b[43m"
var BgBlue = "\x1b[44m"
var BgMagenta = "\x1b[45m"
var BgCyan = "\x1b[46m"
var BgWhite = "\x1b[47m"

var brightRedCol = "\x1b[91m"

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

//\u001b[38;5;${ID}m

//console.log(rgbtoansi256([123, 43, 50]) + "test?")

class ConsoleColour {
    constructor () {
        this._log = "";
    }

    get log() {
        console.log(this._log + Reset)
        return this._log = ""
    }

    bright(text) {
        this._log += `${Bright}${text || ""}${Reset} `
        return this
    }

    dim(text) {
        this._log += `${Dim}${text || ""}${Reset} `
        return this
    }

    reverse(text) {
    this._log += `${Reverse}${text || ""}${Reset} `
        return this
    }

    blink(text) {
        this._log += `${Blink}${text || ""}${Reset} `
        return this
    }

    hidden(text) {
        this._log += `${Hidden}${text || ""}${Reset} `
        return this
    }

    underscore(text) {
        this._log += ` ${Underscore}${text || ""}${Reset} `
        return this
    }

    black(text) {
        this._log += `${FgBlack}${text || ""} `
        // console.log(`%s${text}%s`, FgBlack, Reset);
        return this;
    }

    red(text) {
        this._log += `${FgRed}${text || ""} `
        return this;
    }

    green(text) {
        this._log +=`${FgGreen}${text || ""} `
        return this;
    }

    yellow(text) {
        this._log += `${FgYellow}${text || ""} `
        return this;
    }
    blue(text) {
        this._log += `${FgBlue}${text || ""} `
        return this;
    }
    magenta(text) {
        this._log += `${FgMagenta}${text || ""} `
        return this;
    }
    cyan(text) {
        this._log += `${FgCyan}${text || ""} `
        return this;
    }
    white(text) {
        this._log += `${FgWhite}${text || ""} `
        return this;
    }
    
    brightRed(text) {
        this._log += `${brightRedCol}${text || ""} `
        return this;
    }

    backBlack(text) {
        this._log += `${BgBlack}${text || ""}`
        return this;
    }

    backRed(text) {
        this._log += ` ${BgRed}${text || ""}`
        return this;
    }

    backGreen(text) {
        if (text) {
            this._log += `${BgGreen}${text || ""}}`
        }
        this._log += `${BgGreen}`
        // this._log += ` ${BgGreen}${text || ""}`
        return this;
    }

    backYellow(text) {
        this._log += ` ${BgYellow}${FgBlack}${text || ""}`
        return this;
    }

    backBlue(text) {
        this._log += ` ${BgBlue}${text || ""}`
        return this;
    }

    backMagenta(text) {
        this._log += ` ${BgMagenta}${text || ""}`
        return this;
    }

    backCyan(text) {
        this._log += ` ${BgCyan}${text || ""}`
        return this;
    }
    backWhite(text) {
        this._log += ` ${BgWhite}${FgBlack}${text || ""} `
        return this;
    }
    reset() {
        this._log += `${Reset}`
        return this;
    }
    rgbText(args, text) {
        let col;
        if (args < 3) {
            col = FgBlack
            this._log = `${col}${text || ''}`
            return this
        }

        col = rgbtoansi256(args) 
        this._log += `${col}${text} `
        return this
    }
}

export {
    ConsoleColour
}