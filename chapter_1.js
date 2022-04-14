function basicPrint() {
    let toPrint = ''
    for (let j = 0; j<7; j++) {
        toPrint+='#'
        console.log(toPrint)
    }
}

function fizzBuzz() {
    for(let j=1; j<=100; j++) {
        let divisibleBy3 = j%3 === 0;
        let divisibleBy5 = j%5 === 0;
        if(divisibleBy3 && divisibleBy5) {
            console.log('fizzbuz')
        } else if(divisibleBy5){
            console.log('buzz')
        } else if(divisibleBy3){
            console.log('fizz')
        }  else {
            console.log(j)
        }
    }
}

//basicPrint()
fizzBuzz()