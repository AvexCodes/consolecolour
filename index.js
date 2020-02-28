// test file
import * as cc from './console.js'

var con = new cc.ConsoleColour()


// con.black("Black").red("Red").green("I am green").yellow("Banana!").blue("I'm blue dab dee dab die").magenta("A legendary colour tbh.").cyan("The colour of the ocean?").white("defualt boy.").brightRed("Fluro colours all day!").log

// con.backRed().blue("I have a red background with blue text!").log

// con.backGreen("I am green.").log
// con.backCyan("Oh Hey Console!").log
// con.bright("Bright").dim("dimmed text").underscore("underscores!!").blink("My blinkers").reverse("Just as confused buddy...").hidden("you cant see me!").log
//con.ba("red", "Red text black background").log
//con.backBlack("Control Test").

// con.rgbText([255, 0, 0], "Jordan is").rgbText([123,123,5], "g").rgbText([5,79,123], "a").rgbText([34,230,120], "y").log
con.backGreen().rgbText([255, 0, 255], "Hey Look, is that RGB to Ansi256?").log
