import background from './background.jpg';

export function randomArray(array) {
    let randomArray = array.splice(Math.floor(Math.random() * (563 - 10)), 10);
    randomArray.map(item => item.background = {background})
    console.log(randomArray);
    return randomArray;
}

export function newData(array) {

}