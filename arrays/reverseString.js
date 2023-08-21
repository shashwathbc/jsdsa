// TYPE 1:
const reverseString = (s) => {
  // Convert the string to an array
  const arr = s.split("");

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
  const reversedString = arr.join("");
  return reversedString;
};

const reversed = reverseString("shash");
console.log(reversed); // Outputs: 'hsahs'
// The time complexity of your provided solution is O(n), where n is the length of the input string.
//  This is because the algorithm iterates through the array of characters once, performing constant-time operations 
// (swapping characters and updating pointers) for each character. Since each character is processed exactly once, 
// the time complexity is linear with respect to the length of the input string.
// The space complexity of your solution is O(n) as well. This is due to the additional space required to store the array of 
// characters after splitting the input string. As the input string grows longer, the array to hold the characters will also
//  grow proportionally.
// In summary, your solution is efficient in terms of time complexity and space complexity. It reverses the string 
// using an in-place swapping approach, and the space required for the array is directly related to the length of the input string.


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// TYPE 2:
const reverseString2 = (s) => {
  // Split the string into an array of characters
  const arr = s.split("");

  // Use the Array.prototype.reverse() method
  arr.reverse();

  // Join the array back into a string
  const reversedString = arr.join("");
  return reversedString;
};

const reversed2 = reverseString2("shash2");
console.log(reversed2); // Outputs: 'hsahs'
// This solution also has a time complexity of O(n),
// where n is the length of the input string.
// The key difference is that it uses the built-in Array.prototype.reverse()
// method to reverse the array of characters
