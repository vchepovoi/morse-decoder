const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  var str = "";
  var arr = expr.match(/(.{1,10})/gim);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toString().replace(/10/g, ".").replace(/11/g, "-").replace(/00/g, "").replace("**********", " ");
    if (arr[i] == " ") {
      str = str + arr[i];
    } else {
      str = str + MORSE_TABLE[arr[i]];
    }
  }
  return str;
}

module.exports = {
    decode
}
