const sumOfNumber = (n) =>{
    if(n === 1){
        return 1;
    }
    var sum = 0;
    for(let i=0;i<=n;i++){
        sum += i;
    }
    return sum;
}

// Start measuring time
console.time('sumOfNumber');

// Call the function
console.log(sumOfNumber(2));

// End measuring time
console.timeEnd('sumOfNumber');

// ***************************************************************************************************************************************

const sumOfNumberOptimised = (n) => {
    if (n === 1) {
        return 1;
    }
    return (n * (n + 1)) / 2;
}
console.time('sumOfNumberOptimised');

console.log(sumOfNumberOptimised(2)); 

console.timeEnd('sumOfNumberOptimised');
