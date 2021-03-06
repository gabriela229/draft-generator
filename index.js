const _ = require('lodash');

function setDelay(str, time){
  setTimeout(() => console.log(str), time);
}

function draftGenerator(str){
  const arr = str.split(' ');
  const shuffledArr = _.shuffle(arr);
  let count = 0;
  for (var i = 0; i < shuffledArr.length; i++){
    count++;
    setDelay(`${count}. ${shuffledArr[i]}`, i * 7000);
  }
  let secondCount = 0;
  for (var j = shuffledArr.length - 1; j >= 0; j--){
    secondCount++;
    const timeout = (secondCount + shuffledArr.length) * 7000;
    setDelay(`${secondCount}. ${shuffledArr[j]}`, timeout);
  }
  return 'start' ;
}


//Senior fellows
// console.log(draftGenerator('Ari David Hannah James Jonathan Julia Kevin Leah LeMona Owen Sam Sara_Rose Sarah Shmuel'));

//Junior fellows
console.log(draftGenerator('Beth Bruce Connor Dani Gabby Jeff Jon Josh Kait Lindsay Michaela Noelle Philip Rob Roxie Xifeng'));


module.exports = draftGenerator;
