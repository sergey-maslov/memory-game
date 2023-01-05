export function shuffleArray(array) {
    console.log(array);
    let randomArray = [];
    while (randomArray.length < 20) {
        randomArray.push(array[Math.floor(Math.random() * 563)]);
    }
    console.log(randomArray);
    return randomArray;
}