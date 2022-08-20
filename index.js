//////////////////////////////////////////////////////////////////////////////////
// p1

/*
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('enter a number: ', num =>{

    let i = 0;
    while(i**2 < num){
        ++i;
        continue;
    }
    console.log("answer is: " + i);

    rl.close();
});
*/

//////////////////////////////////////////////////////////////////////////////////
// p2

/*
const readline = require("readline");
const rl1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl1.question('enter a number: ', num =>{

    let a = 0;
    let sum = 0;
    for(a = 0; a < num; ++a){
      if(num % a == 0){
        sum += a;
      }
    }
    if(sum == num){
      console.log("yse");
    }
    else {
      console.log("no");
    }
    
    rl1.close();
});
*/

//////////////////////////////////////////////////////////////////////////////////
// p3

/*
const readline = require("readline");
const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
return new Promise((resolve, reject) => {
    rl2.question('enter a list of 3 number: ',(arr) =>{

      var list = arr.split(' ').sort(function(a, b){return a - b});
      console.log(list);
      var a1 = Number(list[0]);
      var a2 = Number(list[1]);
      var a3 = Number(list[2]);

      if (a1**2 + a2**2 == a3**2){
        console.log("yes");
      }
      else {
        console.log("no");
      }

      rl2.close();
      resolve(list);
    });
})
*/

//////////////////////////////////////////////////////////////////////////////////
// p4

/*
const readline = require("readline");
const rl3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
return new Promise((resolve, reject) => {
    rl3.question('Enter a list of first name, last name, age, gender, phone number and email : ',(arr) =>{

      var list = arr.split(' ');
      const obj = {firstName: list[0], lastName: list[1], age: list[2], gender: list[3], phoneNumber: list[4], email: list[5]};
      console.log(obj);

      rl3.close();
      resolve(list);
    });
})
*/

//////////////////////////////////////////////////////////////////////////////////
// p5

/*
const readline = require("readline");
const rl4 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
return new Promise((resolve, reject) => {
    rl4.question('Enter WEIGHT in kilograms and HEIGHT in meters: ',(arr) =>{

      var list = arr.split(' ');
      const weight = list[0];
      const height = list[1];

      let BMI = (weight / (height**2)).toFixed(2);

      if(BMI < 18.5){
        console.log(BMI + " ,Underweight"); 
      }
      else if(BMI >= 18.5 && BMI < 25){
        console.log(BMI + " ,normal");
      }
      else if(BMI >= 25 && BMI < 30){
        console.log(BMI + " ,Overweight");
      }
      else if(BMI >= 30){
        console.log(BMI + " ,Obese");
      }
      else {
        console.log(BMI + " ,undefined");
      }

      rl4.close();
      resolve(list);
    });
})
*/

//////////////////////////////////////////////////////////////////////////////////
// p6

/*
function Score (firstScor , numOfDay){

    if(numOfDay == 0){
      return 20;
    }
    else if(numOfDay == 7){
      return firstScor;
    }
    else {
      return (firstScor-numOfDay) > 0 ? firstScor-numOfDay : 0;
    }   
}

const readline = require("readline");
const rl5 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
return new Promise((resolve, reject) => {
    rl5.question('Enter a list of "first score" and "number of travetl days" : ',(arr) =>{

      var list = arr.split(' ');
      const firstScore = list[0];
      const numOfTravelDays = list[1];
      let finalScore = Score(firstScore, numOfTravelDays);
      console.log(finalScore);

      rl5.close();
      resolve(list);
    });
})
*/

//////////////////////////////////////////////////////////////////////////////////