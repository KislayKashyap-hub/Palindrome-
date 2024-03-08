function palindrome() {
    let str = ['B','O','B'];
    let isPalindrome = true;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            isPalindrome = false;
        }
    }
    if (isPalindrome) {
        console.log("This is a palindrome value");
    } else {
        console.log("Not a palindrome value");
    }
} palindrome();