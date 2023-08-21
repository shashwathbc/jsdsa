const reverseString = (s) => {
    // Convert the string to an array
    const arr = s.split('');

    // Initialize pointers
    let start = 0;
    let end = arr.length - 1;

    // Swap characters using a temporary variable
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }

    // Convert the array back to a string
    const reversedString = arr.join('');
    return reversedString;
}

const reversed = reverseString('shash');
console.log(reversed); // Outputs: 'hsahs'
