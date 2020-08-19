const randomColor = require('randomcolor');
const chalk = require('chalk');
const hue = process.argv[2];
const luminosity = process.argv[3];
const color = randomColor({ hue: hue, luminosity: luminosity });
const guessedColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

const result = hue
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
