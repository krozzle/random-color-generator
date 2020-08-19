var randomColor = require('randomcolor');
const hue = process.argv[2];
const luminosity = process.argv[3];
var color = randomColor({ hue: hue, luminosity: luminosity });
const guessedColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
const chalk = require('chalk');

let result = hue
  ? chalk.hex(color)(
      `      ###########################
      ###########################
      #######             #######
      #######   ${color}   #######
      #######             #######
      ###########################
      ###########################
      `,
    )
  : chalk.hex(guessedColor)(
      `      ###########################
      ###########################
      #######             #######
      #######   ${guessedColor}   #######
      #######             #######
      ###########################
      ###########################`,
    );

console.log(result);
