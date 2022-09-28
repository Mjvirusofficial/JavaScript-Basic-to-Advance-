function FindLetterOccuring(string) {
    let split = string.split('')
    let Map = {}

    split.map(i => Map[i] = Map[i]+1 || 1)
    console.log(Map)
}

FindLetterOccuring('Deepak')
