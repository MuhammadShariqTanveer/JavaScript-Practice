// var userName= prompt("Enter any keyword");
  
//  switch (userName) {
//     case "Shariq" :
//     alert("Han Yehi hai");
//     break;
    
//     case "Raja" :
//     alert("Han yehi hai");
//      break;

//      default :
//      alert("Nhi hai");
//  }


// var myArray =["Muhammad" , "Shariq", "Tanveer", "Student"]
// console.log(myArray);

// myArray.splice( 3,0, "Computer")
// console.log(myArray)

//  var newArray= myArray.slice(0,3);
//  console.log(newArray);

//  console.log(`${newArray[1]} is a good boy, his father name is ${newArray[2]} and he is a police officer in pakistan. `);
//  console.log(`${newArray} is a ${myArray[3]} ${myArray[4]} in Smiu`);


// var names= "shariq";
// console.log(names);

// var cap= names.toUpperCase()
// console.log(cap)

// var first= names[0].toUpperCase() + names.slice(1);
// console.log(first)


// let arr = ["raja", "shariq", "tanveer"];
// const arr2 = arr.slice(1);

// console.log(arr2+ arr[0])


// var myArray = ["A","B","C","D","E","F","H"];
// console.log(myArray);

// var arrayChanging = myArray.splice(7,0,"G");
// console.log(myArray);

// var arrayMy = typeof(myArray);
// console.log(arrayMy)

// var str= "It is a test product.";

// console.log(str);

// var firstChar= str.indexOf("test");
// if(firstChar !== -1) {
//     str = str.slice(0,firstChar) + "best" + str.slice(12,21);
//     console.log(str)
// }

// var str= "It is a test product.";
// console.log(str)
// for (var i = 0; i<str.length; i++){
//     if(str.slice(i,i+4)==="test"){
//         str = str.slice(0,8) + "best" + str.slice(12);
//         console.log(str)
//     }
// }

// var currentAge = +prompt("Enter Current Age")
// var yearsEligibleVote = 18;

// if(currentAge>=yearsEligibleVote){
//     console.log("You're Eligible For Vote")
// }else{
//     console.log("You're Not Eligible For Vote")
// }

// let num1 =6;
// let num2 =num1;

// console.log("the value of num1 is",num1);
// console.log("the value of num2 is",num2);
// num1++;
// console.log("the value after the incremetiing the value ");

// console.log("the value of num1 is",num1);
// console.log("the value of num2 is",num2);


var arr = ["muhammad", "shariq", "tanveer"];
var userName = prompt();
 flag = true;

for(i=0; i<= arr.length; i++){
    if(userName===arr[i]){
        console.log("Found");
        flag = false;
    }
    else{
        console.log("Not Found");
    }
    }



