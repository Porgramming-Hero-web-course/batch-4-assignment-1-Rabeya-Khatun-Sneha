function removeDuplicates(numbers: number[]): number[] {
    return numbers.filter((value, index) => numbers.indexOf(value) === index);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 