//Multiplos 3
let multiplos3 = [];
for(let a= 3; a<= 1000; a+= 3){
    multiplos3.push(a)
}

//Multiplos 5
let multiplos5 = [];
for(let b= 5; b<= 1000; b+= 5){
    multiplos5.push(b)
}
//multiplos 3 y 5
//let multiplos35 = [];

//Contador
let contador = () => {
    for(let i= 1; i<= 1000; i++){  
        if(multiplos3.includes(i) && multiplos5.includes(i)){
            console.log('FizzBuzz');
        } else if(multiplos5.includes(i)){
            console.log('Buzz')
        }else if(multiplos3.includes(i)){
            console.log('Fizz')
        } else console.log(i)
    }
}

//Otro contador 
let contador2 = () => {
    for(let i= 1; i<= 1000; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        } else if(i % 5 === 0){
            console.log('Buzz');
        } else if(i % 3 === 0){
            console.log('Fizz');
        } else  console.log(i);
    }
}
console.log(contador2());