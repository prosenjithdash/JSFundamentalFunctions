// Types of parameter

// String Functions

function stringLength(string) {
    const len = string.length;
    if (len % 2 == 0) {
        return('String length is ' +  len  +' So it is Even string.')
    }
    else {
        return('String length is ' +  len  + ' So it is Odd string.')

    }
}

const input_s = 'Prasenjit';
const result = stringLength(input_s);
console.log(result);

// function lenstr(str) {
//     console.log(str)
// }
// lenstr('Prosenjith Dash Pappu');