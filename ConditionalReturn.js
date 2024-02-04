// Conditional Return Function

function ConditionalReturn(number) {
    if (number % 2 == 0) {
        return('Number is Even')
    }
    else {
        return('Number is Odd')
    }
}

const num = 50;
const result = ConditionalReturn(num);
console.log(result)