//return
function chips(price) {
    
    const result =  price - 30 ;
    return result;
}

const price = 50;
const r =chips(price);
console.log('Return = ', r, 'tk')



// Not return

function name() {
    console.log('Prosenjith Dash Pappu')
}

name();