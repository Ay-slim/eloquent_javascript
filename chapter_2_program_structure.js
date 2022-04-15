const { checkNumberValidity } = require('./utils');

function basicPrint() {
    let toPrint = '';
    for (let j = 0; j<7; j++) {
        toPrint+='#';
        console.log(toPrint);
    }
}

function fizzBuzz() {
    for(let j=1; j<=100; j++) {
        let divisibleBy3 = j%3 === 0;
        let divisibleBy5 = j%5 === 0;
        if(divisibleBy3 && divisibleBy5) {
            console.log('fizzbuz');
        } else if(divisibleBy5){
            console.log('buzz');
        } else if(divisibleBy3){
            console.log('fizz');
        }  else {
            console.log(j);
        }
    }
}

function chessBoard(n){
    checkNumberValidity(n);
    let outerSwitch;
    let toPrint='';
    for(let j=1 ; j<n+1 ; j++){
      outerSwitch = j%2 === 0;
      for(let k=1 ; k<n+1 ; k++){
        if(!outerSwitch){
          if(k%2 !== 0) {
            toPrint+='#';
          }else{
            toPrint+=' ';
          }
        } else {
          if(k%2 === 0) {
            toPrint+='#';
          }else{
            toPrint+=' ';
          }
        }
      }
      toPrint+='\n';
    }
    console.log(toPrint);
  }
//basicPrint();
//fizzBuzz();
chessBoard(8);