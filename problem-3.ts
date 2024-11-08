function countWordOccurrences(sentence: string, word: string): number {
    const lowerSentence = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();

    const words = lowerSentence.split(" ");

    const count = words.filter(word => word === lowerWord).length;

    return count;
}

console.log(countWordOccurrences("I love typescript", "typescript")); 
