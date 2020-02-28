# Console Colour
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c88a430b26e5405999de3907f967bd2b)](https://www.codacy.com/manual/AvexCodes/consolecolour?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=AvexCodes/consolecolour&amp;utm_campaign=Badge_Grade)
Console Colour, allows you to add life to your console with 9 different colours, 6 different display formats, and 8 different background colours!

# Installation
```
npm install ConsoleColour
```
# Features
- Ansi 256
- Ansi 8
- hex to ansi 256
- rgb ansi 256
- Blink, Reverse (Not support by a lot of terminals)
- Underscore, Bold, Strikethrough, Italics

 ``` js
const cc = require('consolecolour')

let con = new cc()

// Black, Red, Green, Yellow, Blue, Magenta, Cyan, White Bright Red
con.yellow("Banana!")
// or use the bright red colour
con.brightRed("Apple!")

// Black, Red, Green, Yellow, Blue, Magenta, Cyan, White
con.backMagenta("Magenta Background!").log

/*
	 Style your text!
	 => Bright, Dim, Underscore, Blink, Reverse, Hidden
*/
con.underscore("This is total important!")
con.reverse("woah reverse...").log

// rgb to ansi
con.rgbText([255,0,255], "PURPLE!").log

// Chainable Methods!
con.backYellow("Yellow background with").red("some red text!").reset().blink("Blinking...").log


```	

