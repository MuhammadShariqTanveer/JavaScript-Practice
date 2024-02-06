// Chap 1

// alert("Hello World:JS");

// alert("Error!Please enter a valid password.");

// alert("Welcome to JS Land...\n Happy Coding!");

// alert("Welcome to JS land...");
// alert("Happy Coding!");

// console.log("Hello...I can run JS through my web browser's console");


//  Chap 2

// var userName;

// var myName = "Muhammad Shariq Tanveer";
// console.log(myName);

// var message = "Hello World";
// alert(message);

// var studentname = "Shariq";
// var age = 19;
// var course = "Web & mob application development";
// alert(Myname); alert(age); alert(course);


// var pizza = "PIZZA \n PIZZ \n PIZ \n PI \n P";
// alert(pizza);


// var email = "example@exmaple.com";
// alert("My email address is"+" " +email);

// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book" + " " +book);

// document.write("Yah! I can write HTML content through JS");

// var str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(str);


//  Chap 3

// var age=19;
// alert(`I am ${age} years old`);

// var novisits = 20;
// alert(`You have visited this site ${novisits} times`);

// var birthYear = 2004;
// document.write(`My birth year is ${birthYear} <br> Data type of my declared variable is number.`);

// var visiter = "Shariq Raja";
// var quantity = 5;
// var shirt= "T-Shirts";
// document.write(`${visiter} ordered ${quantity} ${shirt} on XYZ Clothing store`);



// chp 5

// let num1= +prompt("Enter the first value");
// let num2= +prompt("Enter the second value");
// var sum= num1 + num2;
// document.write(`Sum of ${num1} and ${num2} is ${sum}`);

// let num1= +prompt("Enter the first value");
// let num2= +prompt("Enter the second value");
// var sum= num1 - num2;
// document.write(`Sub of ${num1} and ${num2} is ${sum}`);

// let num1= +prompt("Enter the first value");
// let num2= +prompt("Enter the second value");
// var sum= num1 * num2;
// document.write(`Multiplication of ${num1} and ${num2} is ${sum}`);

// let num1= +prompt("Enter the first value");
// let num2= +prompt("Enter the second value");
// var sum= num1 / num2;
// document.write(`Division of ${num1} and ${num2} is ${sum}`);


// var myVariable;
// document.write("Value after variable declaration is: " + myVariable + "<br>")

// myVariable = 5;
// document.write("Initial Value : " + myVariable +  "<br>");

// myVariable++;
// document.write("Value after increment is : " + myVariable + "<br>")

// myVariable +=7;
// document.write("Value after addition is : " + myVariable + "<br>"); 

// myVariable--;
// document.write("Value after decrement is : " + myVariable + "<br>")

// var reminder = myVariable %3;
// document.write("The reminder is : " +reminder);

// var ticketPrice = 600;
// var numberOfTickets= 5;
// var totalCostOfTickets = ticketPrice * numberOfTickets;
// document.write("Total cost to buy 5 tickets to a movie is " +totalCostOfTickets +"PKR");/

// for( let i = 1; i <=10; i++){
//     document.write(`5 x ${i} = ${5*i} ` +"<br>" )
// }

// var celsiusTemp= 40;
// var fahrenheitTemp= (celsiusTemp * 9/5)+32;
// console.log(celsiusTemp + "°C is" + " " + fahrenheitTemp + "°F" ) ;

// var farhenheitTemp2= 40;
// var celsiusTemp2= (farhenheitTemp2-32) *5/9;
// console.log(farhenheitTemp2 + "°C is" + " " + celsiusTemp2 + "°F" ) ;


// var priceItem1 = 650;
// var quantityItem1 = 3;
// var priceItem2 = 100;
// var quantityItem2 = 7;
// var shippingCharges= 100;

// var totalCost1= priceItem1*quantityItem1;
// var totalCost2= priceItem2*quantityItem2;
// var Total= totalCost1+totalCost2;
// var subTotal= Total+shippingCharges;

// document.write("<h1>Shopping Card </h1>");
// document.write("<p>Price of item 1 is:"+ " " + priceItem1 + "</p>" );
// document.write("<p>Quantity of item 1 is:"+ " " + quantityItem1 + "</p>" );
// document.write("<p>Price of item 2 is:"+ " " + priceItem2 + "</p>" );
// document.write("<p>Quantity of item 2 is:"+ " " + quantityItem2 + "</p>" );
// document.write("<p>Shipping Charges:"+ " " + shippingCharges + "</p>"  );
// document.write("<p>--------------------------------------</p>")
// document.write("<p>Total cost of your order is:"+ " " + subTotal +"</p>")

// var totalMarks= 980;
// var obtainedMarks =804;
// var percentage= obtainedMarks/totalMarks*100;

// document.write("<h1>Marks Sheet</h1>")
// document.write("Total Marks:"+ " " +totalMarks + "<br>")
// document.write("Marks Obtained:"+ " " +obtainedMarks +"<br>")
// // document.write("Percentage:"+ " " +percentage + "%")
// document.write("Percentage :" +obtainedMarks /totalMarks *100 + "%");

// var usDollar= 10;
// var saudiRiyal= 25;

// var usToPak = 104.80;
// var saudiToPak = 28;

// var totalRuppee = (usDollar*usToPak) + (saudiRiyal*saudiToPak);

// document.write("<h1>Currency in PKR</h1>");
// document.write("Total Currency in PKR:" + " "+totalRuppee)

// var num = 10;
// var result = ((num+5)*10) /2;
// document.write("Result: " +result)

// var currentYear= 2023;
// var birthYear = 2004;
// var yourAge= currentYear % birthYear;

// document.write("<h1>Age Calculator</h1>");
// document.write("Current Year: " +currentYear + "<br>");
// document.write("Birth Year: " +birthYear + "<br>");
// document.write("Your Age: " +yourAge + "<br>");

// var radius = 20;
// var pi = 3.142;

// var circumference = 2 * pi * radius ;

// var area = pi * Math.pow(radius,2);

// document.write("<h1>The Geometrizer</h1>" );
// document.write("Radius of a circle: " +radius + "<br>");
// document.write("The Circumference is: " +circumference + "<br>");
// document.write("The area is: " +area);





// var a = 10;

// document.write("<h1>Result: </h1>");

// document.write("The value of a is: "+a + "<br>");
// document.write("-----------------------------------------" + "<br>");
// document.write("<br>")

// ++a;
// document.write("The value of ++a is: "+a  + "<br>");
// document.write("Now the value of a is: "+a + "<br>")

// document.write("<br>")


// document.write("The value of a++ is: "+a  + "<br>");
// a++;
// document.write("Now the value of a is: "+a + "<br>")

// document.write("<br>")


// --a;
// document.write("The value of --a is: "+a  + "<br>");
// document.write("Now the value of a is: "+a + "<br>")

// document.write("<br>")


// document.write("The value of a-- is: "+a  + "<br>");
// a--;
// document.write("Now the value of a is: "+a + "<br>")


// var a =2;
// var b = 1;
// var result = (--a) - (--b) + (++b) + (b--);
// document.write("a is : "+a +"<br>");
// document.write("b is : "+b + "<br>");
// document.write("Result: "+result);

// var userInput=prompt("Enter user name");
// if(userInput){
//     alert("Assalamailikum," +userInput);
// }else{
//     alert("Real ID s aa");
// }


// var tableNumber = prompt("Enter table Number","5")

// for(let i = 1; i<=10; i++){
//     document.write(`${tableNumber} x ${i} = ${tableNumber*i}` + "<br>")
// }

// var a = prompt("Enter First Subject");
// var b = prompt("Enter Second Subject");
// var c = prompt("Enter Third Subject");

// var total1=100;
// var total2=100;
// var total3=100;

// var d = +prompt("Enter Obtained Marks of First Subject");
// var e = +prompt("Enter Obtained Marks of Second Subject");
// var f = +prompt("Enter Obtained Marks of Third Subject");

// var percentage1 = (d/100)*100;
// var percentage2 = (e/100)*100;
// var percentage3 = (f/100)*100;

// var totalMarks = 100;
// var totalObtainedMarks = d + e + f;


// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
// document.write("<tr><td>" + a + "</td><td>" + total1 + "</td><td>" + d + "</td><td>" + percentage1 + "%</td></tr>");
// document.write("<tr><td>" + b + "</td><td>" + total2 + "</td><td>" + e + "</td><td>" + percentage2 + "%</td></tr>");
// document.write("<tr><td>" + c + "</td><td>" + total3 + "</td><td>" + f + "</td><td>" + percentage3 + "%</td></tr>");
// document.write("<tr><th>Total</th><th>"  + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th><th>" + ((totalObtainedMarks / (totalMarks * 3)) * 100) + "%</th></tr>" );
// document.write("</table>");



// var city= prompt("Enter City Name");
// if(city==="karachi"){
//     alert("Welcome to the city of lights");
// }else{
//     alert("Welcome to the city");
// }

// document.write(city);

// var gender= prompt("Enter Yours Gender");
// if(gender==="male"){
//     alert("Good Morning Sir");
// }
// else if(gender==="female"){
//       alert("Good Morning Ma'am");
// }else{
//     alert("Good Morning");
// }

// document.write(gender);

// var light = prompt("Enter signal light cover");
// if(light ==="Red"){
//     alert("Must Stop");
// }

// else if(light ==="Yellow"){
//     alert("Ready to move");
// }

// else if(light ==="Green"){
//     alert("Move now");
// }else{
//     alert("Enter valid color");
// }

// document.write(light);

// var carFuel = prompt("Enter Fuel in ltr");

// if(carFuel < "0.25"){
//     alert("Please,refill your tank");
// }else{
//     alert("Your tank is full!")
// }

// document.write(carFuel);

//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// var totalMarks = 300;
// var marksObtained = prompt("Marks Obtained:");
// var percentage = (marksObtained/totalMarks)*100

// document.write("<h1>Marks Sheet</h1>");
// document.write("Total Marks: "+totalMarks + "<br>");
// document.write("Marks Obtained: " +marksObtained + "<br>");
// document.write("Percentage: "+percentage +"%" + "<br>");

// if(percentage >= 80){
//     document.write("Grade: A-one" +"<br>");
//     document.write("Remarks: Excellent");
// }

// else if(percentage >= 70){
//     document.write("Grade: A" +"<br>" );
//     document.write("Remarks: Good");
// }

// else if(percentage >= 60){
//     document.write("Grade: B" +"<br>");
//     document.write("Remarks: Satisfactory");
// }

// else if(percentage >=50){
//     document.write("Grade: D" +"<br>");
//     document.write("Remarks: Unsatisfy");
// }

// else if(percentage >=40){
//     document.write("Grade: E" +"<br>");
//     document.write("Remarks: You need to improve");
// }else{
//     document.write("Grade: F" +"<br>");
//     document.write("Remarks: Sorry");
// }


// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var guess = prompt("Guess Secret Number");
// if(secretNumber==guess){
//     alert("Bingo!Correct answer");
// }else{
//     alert("Close enough to the correct answer");
// }

// var userInput = prompt();
// var dividedValue = 3;
// var divider = (userInput/dividedValue);

// if(userInput % 3===0){
//     alert("Divided");
// }else{
//     alert("Not Divided");
// }

// var check = prompt("Even No or Odd");
// if(check %2===0){
//     alert("It's an even number");
// }else{
//     alert("It's an odd number");
// }

// var temp = prompt("Enter Temperature ");
// if(temp >= 40){
//     alert("It is too hot outside");
// }

// else if(temp >= 30){
//     alert("The weather today is normal.");
// }

// else if(temp >= 20){
//     alert("Today’s Weather is cool.");
// }

// else if(temp >= 20){
//     alert("Today’s Weather is cool.");
// }else{
//     alert("OMG! Today’s weather is so Cool.");
// }



// var firstValue = +prompt("Enter First Value");
// var secondValue = +prompt("Enter Second Value");
// var operation = prompt("Which operation you want to perform");

// if(operation==="+"){
//     alert(`The Sum of ${firstValue} and ${secondValue} is ${firstValue+secondValue}`);
// }
// else if (operation==="-"){
//     alert(`The Sub of ${firstValue} and ${secondValue} is ${firstValue-secondValue}`);
// }
// else if (operation==="/"){
//     alert(`The Division of ${firstValue} and ${secondValue} is ${firstValue/secondValue}`);
// }
// else if (operation==="*"){
//     alert(`The Multiplication of ${firstValue} and ${secondValue} is ${firstValue*secondValue}`);
// } 
// else if (operation==="%"){
//     alert(`The Modulus of ${firstValue} and ${secondValue} is ${firstValue%secondValue}`);
// }else{
//     alert("Input any number");
// }


// let studentName = [];
// studentName.push("Muhammad");
// studentName.push("Shariq");
// studentName.push("Tanveer");
// document.write(studentName);

// let fruits = ["Mango","Banana","Apple","Graphs"];
// console.log(fruits);

// let numbers = [1,2,3,4,5];
// console.log(numbers);

// let booleanArray = [true,false,false,true];
// console.log(booleanArray);

// let mixedArray = [1,"Apple",true];
// console.log(mixedArray);

// const qualifications = [" ", "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// for(let i = 1 ; i <qualifications.length; i++){
//         document.write(`${i}) ${qualifications[i]} <br>`)
//     }

// let studentName = ["Michael", "John", "Tony"]
// let studentMarks = [320,230,480];
// var totalMarks= 500;

// document.write( `Score of ${studentName[0]} is ${studentMarks[0]}. Percentage: ${studentMarks[0]/totalMarks*100}% <br>`)
// document.write( `Score of ${studentName[1]} is ${studentMarks[1]}. Percentage: ${studentMarks[1]/totalMarks*100}% <br>`)
// document.write( `Score of ${studentName[2]} is ${studentMarks[2]}. Percentage: ${studentMarks[2]/totalMarks*100}% <br>`)

// for(var i = 0; i<5; i++){
//     for(var j = 0; j<5; j++){
//         console.log(i,j);
//     }
// }

// let colorArray = ["Red", "Green", "Blue", "Yellow", "Purple"];
// document.write(colorArray);

// var userInput = prompt("Enter color at the beginning");
// colorArray.unshift(userInput);
// document.write(colorArray);

// var userInput = prompt("Enter color at the beginning");
// colorArray.push(userInput);
// document.write(colorArray);

// var userInput = prompt("Enter color at the beginning");
// colorArray.unshift("Laal" , "Nilla");

// colorArray.pop();


// const IndexAdd = parseInt(prompt("Enter the index to Add colors from:"));
// const deleteCount = parseInt(prompt("Enter the number of colors to delete:"));
// const AddColor = parseInt(prompt("Enter the number of colors to :"));

// colors.splice(IndexAdd, deleteCount, AddColor);
// document.write();



// let colors = ["red","green","blue","purple","pink","yellow"]
// document.write("<h2>original array </h2>")
// for(let i = 0 ;i<colors.length; i++){
//     document.write(`${i} ${colors[i]} <br>`)
// }

// const indexNumber = parseInt(prompt("Enter the index number to add:"));
// const deleteCount = parseInt(prompt("Enter the number of index to add :"));
// const addIndex =    (prompt("Enter the Color to add :"));

// colors.splice(indexNumber, deleteCount, addIndex);

// document.write("<h2>updated array </h2>")
// for(let i = 0 ;i<colors.length; i++){
//     document.write(`${i} ) ${colors[i]} <br>`)
// }


// let colors = ["red","green","blue","purple","pink","yellow"]
// document.write("<h2>original array </h2>")
// for(let i = 0 ;i<colors.length; i++){
//     document.write(`${i} ) ${colors[i]} <br>`)
// }

// const deleteIndex = parseInt(prompt("Enter the index to delete colors from:"));
// const deleteCount = parseInt(prompt("Enter the number of colors to delete:"));
// colors.splice(deleteIndex, deleteCount);

// document.write("<h2>updated array </h2>")
// for(let i = 0 ;i<colors.length; i++){
//     document.write(`${i} ) ${colors[i]} <br>`)
// }


                                 // CHAPTER 17-20

// Q1
// var emptyTwoDArray = [];

// emptyTwoDArray[0] = [];
// emptyTwoDArray[1] = [];
// emptyTwoDArray[2] = [];

// console.log(emptyTwoDArray); 

// Q2
// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
//   ];
//   console.log(matrix[0][2]); 
//   console.log(matrix[1][3]); 
//   console.log(matrix[2][1]); 
//   console.log(matrix);
  
// Q3
// for(let i = 1; i<=10; i++){
//     console.log(i);
// }


// Q4
// var tableNumber= +prompt("Enter Table Number");
// var tableLength= +prompt("Enter Table Length");

// for(let i =1; i<=tableLength; i++){
//     console.log(`${tableNumber} x ${i} = ${tableNumber*i} `);
// }


// Q5
// var fruits = ["apple","banana","mango","orange","strawberry"];

// for(let i =0; i < fruits.length; i++){
// document.write(fruits[i] + "<br>")
// }

// document.write(`Element at index 0 is ${fruits[0]} <br>`);
// document.write(`Element at index 1 is ${fruits[1]} <br>`);
// document.write(`Element at index 2 is ${fruits[2]} <br>`);
// document.write(`Element at index 3 is ${fruits[3]} <br>`);
// document.write(`Element at index 4 is ${fruits[4]} <br>`);


// Q6
// var counting= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// document.write(`<h2>Counting:</h2> ${counting}`)

// var reverseCounting = [10,9,8,7,6,5,4,3,2,1];
// document.write(`<h2>Reverse Counting:</h2> ${reverseCounting}`)

//  var numArray =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// var evenArray=[];
// var oddArray=[];

// for(var i =0; i< numArray.length; i++){
//     if(numArray[i] % 2===0){
//         evenArray.push(numArray[i]);
//     }else{
//         oddArray.push(numArray[i]);

//     }
// }
// document.write(`<h2>Even:</h2>  ${evenArray.join(", ")} <br>`);
// document.write(`<h2>Odd:</h2>  ${oddArray.join(", ")} <br>`);


// var series = ["2k","4k","6k","8k","10k","12k","14k","16k","18k","20k"];
// document.write(`<h2>Series:</h2> ${series}`);


// Q7
// Array of items
// const items = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Prompt user for input
// const userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");

// // Check if the entered item is in the array
// if (userInput !== null) {
//   const searchedItem = userInput.toLowerCase(); // Convert to lowercase for case-insensitive comparison

//   if (items.includes(searchedItem)) {
//     document.write(`${searchedItem} is available at index ${items.indexOf(searchedItem)} in our bakery.`);
//   } else {
//     document.write(`We are sorry."${searchedItem}" is not available in our bakery.`);
//   }
// } else {
//   document.write("Invalid input or user canceled.");
// }


// Q8

// var arrNum = [24,53,78,91,12];
// var largestNumber = arrNum[0];

// for(var i = 1; i< arrNum.length; i++){
//     if(arrNum[i] > largestNumber){
//         largestNumber=arrNum[i];
//     }
// }

// document.write(`Array items: 24,53,78,91,12 <br>`);
// document.write(`The Largest Number is ${largestNumber}`)


// Q9
// var arrNum = [24,53,78,91,12];
// var smallestNumber = arrNum[0];

// for(var i = 1; i<=arrNum.length; i++){
//     if(arrNum[i] <  smallestNumber){
//         smallestNumber=arrNum[i];
//     }
// }

// document.write(`Array items: 24,53,78,91,12 <br>`);
// document.write(`The Smallest Number is ${smallestNumber}`)


// Q10
// for(i = 1; i <= 100; i++){
//     if(i % 5 === 0){
//         document.write(`${i}`);
//         }
// }



                              //  CHAP 21 -25


//  Q1

// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName + lastName;

// console.log(fullName);

// Q2

// var phoneNum = "Oppo A5s";
// var phoneLength = phoneNum.length;

// console.log(`My Favourite Phone is: ${phoneNum}`);
// console.log(`Length of String: ${phoneLength}`)

// Q3

// var str =`Pakistani`;
// var str2= str.indexOf("n");

// console.log(`String:${str}`);
// console.log(`Index of 'n':${str2}`);


// Q4

// var greet = "Hello World";

// console.log(`String: ${greet}`);
// console.log(`last index of l is: ${greet.lastIndexOf("l")}`)

//  Q5

// var str =`Pakistani`;
// var str2= str[3];

// console.log(`String:${str}`);
// console.log(`Character at index 3 is:${str2}`);


// Q6

// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// console.log(firstName + " " +lastName);


// Q7

// var city = "Hyderabad";
// var word = "Hyder";
// var replace = "Islam";

// console.log(`City: ${city}`)
// console.log(`After replacement: ${city.replace(word,replace)}`);

// Q8

// var msg = "Ali and Sami are bestfriends.They play cricket and football together."
// var word = "and";
// var replace = "&";

// document.write(`<p>Before replacement: ${msg}</p>`);
// document.write(`<p>After replacement: ${msg.replaceAll(word,replace)}</p>`);

// Q9

// var value= "472";
// var value2 = Number("472");

// document.write(`<h4>Value: ${value}</h4>`);
// document.write(`<h4>Type: ${typeof(value)}</h4>`);

// document.write(`<h4>Value: ${value2}</h4>`);
// document.write(`<h4>Type: ${typeof(value2)}</h4>`);


// Q10

// var userInput = prompt("Enter Any Key");

// document.write(`<h4>User Input: ${userInput}</h4>`);
// document.write(`<h4>Upper Case: ${userInput.toUpperCase()}</h4>`);

//  Q11

// var userInput = prompt("Enter Any Key");

// document.write(`<h4>User Input: ${userInput}</h4>`);
// document.write(`<h4>Title Case: ${userInput.charAt(0).toUpperCase() + userInput.slice(1)}</h4>`);


//  Q12

// var num = 35.36;
// var num2 = num.toString().replace('.','');
// document.write(`Number: ${num}<br>`);
// document.write(`Result: ${num2}<br>`);


//  Q13

// Q14

// Array of items
// const items = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Prompt user for input
// const userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");

// // Check if the entered item is in the array
// if (userInput !== null) {
//   const searchedItem = userInput.toLowerCase(); // Convert to lowercase for case-insensitive comparison

//   if (items.includes(searchedItem)) {
//     document.write(`${searchedItem} is available at index ${items.indexOf(searchedItem)} in our bakery.`);
//   } else {
//     document.write(`We are sorry."${searchedItem}" is not available in our bakery.`);
//   }
// } else {
//   document.write("Invalid input or user canceled.");
// }


// Q15

// Q16

// var university = "Sindh Madressatul-Islam University Karachi";
// var universityArray = university.split(" ");

// for(i= 0; i < universityArray.length; i++)
// document.write(universityArray[i]+"<br>")

// Q17
// var userInput = prompt(`Enter any Key`);

// document.write("User Input: "+userInput +"<br>");
// document.write(`Last Character of Input: ${userInput.charAt(userInput.length-1)}`) 


// Q18
// var str ="The quick brown fox jumps over the lazy dog";

// document.write("Text: "+str);
// document.write(charo)


                              //CHAP 26-30
//Q1   
// var userInput = (prompt("Enter positive integer:"));

// document.write(`number: ${Number(userInput)} <br>`);
// document.write("round off value: " +Math.round(userInput) +"<br>");
// document.write("Floor value: " +Math.floor(userInput) +"<br>");
// document.write("ceil value: " +Math.ceil(userInput) +"<br>");

// Q2
// var userInput = (prompt("Enter negative integer:"));

// document.write(`number: ${Number(userInput)} <br>`);
// document.write("round off value: " +Math.round(userInput) +"<br>");
// document.write("Floor value: " +Math.floor(userInput) +"<br>");
// document.write("ceil value: " +Math.ceil(userInput) +"<br>");

// Q3
// var num =-4;
// var num2 = 5;
// document.write(`The absolute value of ${num} is ${Math.abs(num)}<br>`);
// document.write(`The absolute value of ${num2} is ${Math.abs(num2)}`);

// Q4
// var firstRandom = Math.round(Math.random()*6);
// var secondRandom = Math.round(Math.random()*6);

// document.write(`Random dice value: ${firstRandom} <br>`);
// document.write(`Random dice value: ${secondRandom} <br>`);

// Q5
// var firstRandom = Math.floor(Math.random()*3);
// // var secondRandom = Math.round(Math.random()*3);

// if (firstRandom === 2){
// document.write(`${firstRandom} <br> Random coin value: Heads`);
// }
// else if(firstRandom === 0){
//     document.write(`${firstRandom} <br> Random coin value: Try Again`)
// }else{
// document.write(`${firstRandom} <br> Random coin value: Tails`);
// }

// Q6

// var randomNumber = Math.floor(Math.random()*101);

// document.write(`<h2>Random Number Between 1 to 100: ${randomNumber}</h2>`);

// Q7
// var weight = parseFloat(prompt("Enter user weight"));

// document.write(`The weight of user is ${weight}KGS`);


// Q8
// var userInput = +prompt("Enter a number between 1 to 10");
// var secretNumber = Math.floor(Math.random()*11);

// if(userInput===secretNumber){
//     alert("Congratulations")
// }
// else if(userInput !==null){
//     alert("Enter any number");
// }else{
//     alert("Try again!");
// }



// } else {
//   document.write("Invalid input or user canceled.");


// // Check if the entered item is in the array
// if (userInput !== null) {
//   const searchedItem = userInput.toLowerCase(); // Convert to lowercase for case-insensitive comparison

//   if (items.includes(searchedItem)) {
//     document.write(`${searchedItem} is available at index ${items.indexOf(searchedItem)} in our bakery.`);
//   } else {
//     document.write(`We are sorry."${searchedItem}" is not available in our bakery.`);
//   }
// } else {
//   document.write("Invalid input or user canceled.");
// }


document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.transform = translate(${e.clientX - 10}px, ${e.clientY - 10}px);
});


















