const CC = require("@avexcodes/consolecolour");

let con = new CC();

// Black, Red, Green, Yellow, Blue, Magenta, Cyan, White Bright Red
con.yellow("Banana!");
// or use the bright red colour
con.brightRed("Apple!");

// Black, Red, Green, Yellow, Blue, Magenta, Cyan, White
con.backMagenta("Magenta Background!").log;

/*
	 Style your text!
	 => Bright, Dim, Underscore, Blink, Reverse, Hidden
*/
con.underscore("This is total important!");
con.reverse("woah reverse...").log;

// rgb to ansi
con.rgbText([255,0,255], "PURPLE!").log;
con.rgbBack([255,0,255], "Purple BG!").log;

// Chainable Methods!
con.backYellow("Yellow background with").red("some red text!").reset().blink("Blinking...").log;