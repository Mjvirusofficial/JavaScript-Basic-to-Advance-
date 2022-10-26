function PrintPalindrome(s, e) {
    for (let i = s; i < e; i++) {
        let serilItem = i.toString().split('').join('')
        let reverseItem = i.toString().split('').reverse().join('')

        if (serilItem === reverseItem) {
            console.log(i)
        }
    }
}

PrintPalindrome(100, 500)