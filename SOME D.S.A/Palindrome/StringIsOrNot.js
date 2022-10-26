function isPalindrome(s) {
    let split = s.toString().split('').join('')
    let reverse = s.toString().split('').reverse().join('')

    split === reverse ? console.log("Its a palindrome.")
    : console.log("Its not a palindrome.");

}

isPalindrome(121)