// in output and alert in javascript
// console.log("Hello world!");
// console.log("I will throughout the javascript course");
// window.alert("Hello world!")
// this.alert("your notification is now on!")
// this.alert("Now ready to trade!")

// Types of writing a string!

// console.log("I am very good boy!");
// console.log("I have completed my master's in aditya university");
// console.log('I am the "best."');
// console.log("I am\nLearning\nJavascript\nFrom\nSuresh tech youtube channel ");

// console.log(`I am
// Learning
// Javascript
// From
// // Suresh tech youtube channel `);

// var box = 100;
// this.alert(box)
// console.log(box);

// let ramuAmount;
// ramuAmount = 2000;
// console.log(ramuAmount);

// let somuAmount;
// somuAmount = 3000;
// console.log(somuAmount);

// var total;
// total = ramuAmount + somuAmount;
// console.log(total);

// let ball;
// console.log(ball)

// let name = "kalebu";
// let age = 23;
// console.log(age)
// age = age + 1;
// console.log(`${name}'s age is ${age}`);

// let title = "MoveWithMahesh";
// let price = 300;
// let noOfpages = 46;
// let author = "Mahesh";

// console.log(author)

// console.log(typeof title)
// console.log(typeof noOfpages )

// class and objects

// class book{
//     static author = "Mahesh Mudadla";
//     constructor(title,price,npages){
//         this.title = title;
//         this.price = price;
//         this.noofpages = npages;
//     }
//     updateprice(newprice){
//         this.price = newprice;
//     }

//     updateAuthor(newAuthor){
//         this.author = newAuthor;
//     }

//     changeTitle(newtitle){
//         this.title = newtitle;
//     }

//     static getBookId(){
//         return book.author;
//     }

// }

// class book {
//     static author = "Mahesh";
//     static producer = "kalebu";
//     constructor(title,price,noOfpages){
//         this.title = title;
//         this.price = price;
//         this.nPages = noOfpages;
//     }
// }

// let updatedBook = new book("Move With Mahesh",1200,89);

// console.log(updatedBook);

// console.log(book.author);
// console.log(book.producer);



// let vlogChannel = new book("movewithmahesh",450,69);

// console.log(vlogChannel);
// vlogChannel.updateprice(100)
// console.log(vlogChannel.price)
// console.log(vlogChannel);
// console.log(vlogChannel.noofpages)
// console.log(book.author)
// vlogChannel.updateAuthor("kalebu_dev");
// console.log(vlogChannel.author)
// vlogChannel.changeTitle("movewithtech")
// console.log(vlogChannel.title)
// console.log(book.getBookId)

// let youtubeChannel = {
//     title : "MoveWithTech",
//     noVideos : 169,
//     author : "Mahesh",
//     age : 21,
// };

// console.log(youtubeChannel);

// ****NUMBER*****

// let age = 23;
// let percentage = 67.5;
// console.log(typeof percentage);

// let number = 7671962366;
// console.log(number)
// number = number + 2;
// console.log(number)

//Builtin datatypes in javascript

// let mathsMarks = 50;
// console.log(mathsMarks);

// let englishMarks =  Number(97);
// console.log(englishMarks);

// let socialMarks = new Number(69);
// console.log(socialMarks);

// *****BigInt*****

// let noOfLikes = 9007199254740991n;
// console.log(noOfLikes);
// noOfLikes = noOfLikes + 1n;
// console.log(noOfLikes);
// console.log(typeof noOfLikes);

// let noOfLikesFromBigInt = Number(noOfLikes);
// console.log(noOfLikesFromBigInt);

// let num1 = "50";
// console.log(num1)
// console.log(typeof num1)
// console.log(+num1)
// console.log(typeof num1)

// let num2 =69n
// console.log(num2)
// console.log(typeof num2)
// console.log(Number(num2))

// let x =(Number.MAX_SAFE_INTEGER + 1);
// let y =(Number.MAX_SAFE_INTEGER + 2);
// // let y =(Number.MIN_SAFE_INTEGER + 2);

// console.log(x);
// console.log(y);

// console.log(x === y);

// Boolean

// let isBookGood = Boolean(true);
// console.log(isBookGood)

// if(isBookGood){
//     this.alert("You can buy the book");
// }else{
//     console.log("Don't buy this book");
// }

// String

// let name = new String("MoveWithMahesh");
// console.log(name);
// console.log(typeof name)

//Null

// let myMoney;
// myMoney = 550;
// console.log(myMoney);
// myMoney = null;
// console.log(null)
// console.log(typeof myMoney)
// myMoney = undefined;
// console.log(myMoney)

// Symbol

// let id1 = Symbol("idl");
// console.log(id1.description);
// let id2 = Symbol("id2");
// console.log(id2)
// console.log(typeof id2)

// small function logic

// function myBalance(){
//         return 520;
// }

// let yourBalance = myBalance();
// console.log(yourBalance);

// function miniStatement(){
//  console.log("Present Not Available");
// }

// let yourStatement = miniStatement();
// console.log(yourStatement);

// ***Prompt***

// let userName = prompt("Enter Your UserName");
// console.log(`Welcome ${userName},Please Sit Here`)

// let height = Number(prompt("Enter your height in cm"));
// let heightInMeters = height / 100;
// let weight = Number(prompt("Enter your weight in kg"));
// console.log(typeof height)
// console.log(typeof weight);

// let heightInNumber = Number(height);
// let weightInNumber = Number(weight);

// console.log(typeof heightInNumber);
// console.log(typeof weightInNumber);

// console.log("height",height);
// console.log(heightInMeters);
// console.log("weight",weight);

// let name = 7671962366;
// console.log(name);

// let strname = String(name);
// console.log(strname)

// let name = "7671962366";
// console.log(name);

// let numname = Number(name);
// console.log(numname)

// *****operators in javaScript****

// let num1 = Number(prompt("Enter your first operand"));
// let num2 = Number(prompt("Enter your second operand"));
// console.log("addition ",num1 + num2);
// console.log("substraction ",num1 - num2);
// console.log("multiplication ",num1 * num2);
// console.log("division ",num1 / num2);
// console.log("remainder ",num1 % num2);
// console.log("expotional ",num1 ** num2);

// let divisonResult = num1 / num2;
// console.log(divisonResult.toFixed(2))

// let fName = "Kalebu";
// let lName = " Mudadla";
// let fullName = fName + lName;
// console.log(fullName);

// let num1 = 10;
// let num2 = 5;

// console.log((result = num1 - num2))

// let marks = 72;
// marks += 1;
// console.log(marks)

// let marks = 20;
// marks = marks + 1;
// console.log(marks)

// let marks1 = 20;
// marks1 += 1;
// console.log(marks1)

// let marks2 = 20;
// console.log(++marks2)

// let marks3 = 20;
// console.log(--marks3)

// let marks4 = 20;
// console.log(marks4++)
// console.log(marks4)

// let marks5 = 20;
// console.log(marks5--);
// console.log(marks5)

// console.log((0.1 + 0.7).toFixed(2))

// let userName = prompt("Enter your name");
// console.log(userName)
// let height = Number(prompt("Enter your height in cm"))
// let weight = Number(prompt("Enter your name in kg"))

// console.log("height in cms",height);
// let heightInMeters = height / 100;
// console.log("height in meters",heightInMeters)
// console.log("weight in kgs ",weight);

// let bmi = weight / heightInMeters ** 2;
// console.log("Your Body Mass Index is ",bmi);

// if(bmi > 25){
//         console.log("Your very fatty workout everyday")
// }
// else if(bmi < 18.5){
//         console.log("Thin guy");
// }
// else {
//         console.log("perfect!");
// }

// bmi > 25 ? console.log("Fat") : bmi < 18.5 ? console.log("Thin") : console.log("Average")

// let kalebuMarks = Number(prompt("Enter your marks"));
// let maheshMarks = Number(prompt("Enter your marks"));
// console.log(`kalebuMarks ${kalebuMarks}`)
// console.log(`maheshMarks ${maheshMarks}`)
// console.log(kalebuMarks > maheshMarks)

// If statements

// let result = prompt("Are you interested this book !")
// // console.log(result)

// if(result.toLowerCase() == "yes"){
//         console.log("Buy this book");
// }
// else{
//         console.log("Don't buy this book")
// }

// let totalMarks = Number(prompt("Enter your marks"));
// console.log(`Your marks ${totalMarks}`)

// if(totalMarks == 25){
//         console.log("Excellent");
// }
// else if(totalMarks >= 20){
//         console.log("Good")
// }
// else{
//         console.log("Average")
// }

// let isSubscribe = prompt("you had subscribe our channel yes or no");
// console.log(isSubscribe);

// if(isSubscribe.toLowerCase() == "yes") console.log("Thank you for subscribed!");
// else console.log("Please subscribe")

// isSubscribe.toLowerCase() == "yes"
// ? console.log("Thank you for subscribed!")
// : console.log("Please subscribe");

// let isSeatAvailable = prompt("Is seat available now");

// if(isSeatAvailable == "yes"){
//         console.log("Seat is availble now")
//         let yourAgeAbove50 = prompt("Your age above 50");
//         if(yourAgeAbove50 == "yes"){
//         console.log("Your eligible");
//         let youHaveAadhaar = prompt("You have aadhaar");
//         if(youHaveAadhaar == "yes"){
//         console.log("proved Aadhaar");
//       let confirmMsg = confirm("Are you sure ? come inside the bus !")
//                 console.log("confirm your booking now",confirmMsg)
//                 if(confirmMsg){
//                         alert("Please open the door!")
//                         console.log("yeah! youre always welcome")
//                 }
// }else alert("your aadhaar is invalid !")
// }else alert("You have improper age!")
// } else {
//         alert("No seats are required at this time!");
// }

// let userName = prompt("Enter your username")
// let password = prompt("Enter your password")
// if(userName == "kalebu" && password == "12345"){
//         console.log("Welcome to instagram ")
// }else
//         console.log("Invalid crendentials");

// let x = Number(prompt("Enter your number"));
// if(x > 5 && x < 15) console.log(`${x} is 5 between 15`);
// else console.log("Invalid")

// let name;
// console.log(name);
//  name = 'kalebu';
// console.log(name);

// ******Functions*****

// let kalebuAge,vinayAge,maheshAge;

// kalebuAge = prompt("Enter your age");
// let updatedAge = 0;
// console.log(`kalebu age is ${kalebuAge}`);
// let updatedAge = +kalebuAge + 0;
// console.log("current total age is: ",updatedAge)
// thankYou("Kalebu",kalebuAge);

// vinayAge = prompt("Enter your age");
// console.log(`vinay age is ${vinayAge}`);
// updatedAge += +vinayAge
// console.log("current total age is: ",updatedAge)
// thankYou("Vinay",vinayAge);

// maheshAge = prompt("Enter your age");
// console.log(`mahesh age is ${maheshAge}`);
// updatedAge += +maheshAge
// console.log("current total age is: ",updatedAge)
// thankYou("Mahesh",maheshAge);

// function thankYou(name,age){
//     console.log(`${name} age is ${age || "Not entered"}`);
//     updatedAge = updatedAge + +age;
//     if(age > 18){
//         console.log(`${name}, You will get a driving licence`)
//     }else{
//         console.log(`${name}, You need to wait for ${18 - age} more years to get driving licence`)
//     }
//     console.log("current total age is: ",updatedAge)
//     console.log("Thanks for response");
//     if(age > 18){
//         console.log("Please subscribe our channel");
//     }else{
//         console.log(`You will wait for ${18 - age} more years to get subscribed!`)
//     }
// }

// let thankYouMessage = function () {
//   console.log("Thank you for answering");
//   console.log("Please subscribe our channel");
// };

// *** Scopes ***
// {
//     let a = 25;
//     let b = 35;
//     console.log(a + b);
// }

// let userName = "kalebu";
// let password = 693197;


// function isValidUser(name){
//     if(userName === "kalebu" && password === 693197){
//         console.log("Welcome, valid user")
//     }else{
//         console.log("invalid crendentails");
//     }
//     console.log(name);
// }

// isValidUser("kalebu")


// let globalVar = "I am in the global scope";

// function outerFunction(){
//     let outerVar = "I am in the outer scope";

//     function innerFunction(){
//         let innerVar = "I am in the inner scope";

//         console.log(innerVar);
//         console.log(outerVar);
//         console.log(globalVar);
//     }innerFunction()
// }outerFunction()


// ****Objects in javascript*****
// And classes with objects in javascript

// class Student{
//     static COLLEGE_NAME = "Aditya University";
//     constructor(name,phone,address){
//         this.name = name;
//         this.phone = phone;
//         this.addres = address;
//     }
// }

// let student1 = new Student("Kalebu",7671962366,"CTRI,Rajahmundry");
// console.log(student1);
// console.log(student1 instanceof Student);
// let student2 = new Student("Mahesh",9064848494,"CTRI,Rajahmundry");
// console.log(student2);
// console.log(Student.COLLEGE_NAME);

// let student = {
//     name:"kalebu",
//     roll:2366,
//     address:"CTRI,RJY",
// };

// console.log(student)

// student.roll = 6224;
// console.log(student);

// student.address = "RK Beach,Vizag";
// console.log(student);

// student.phone = 7671962773;
// console.log(student);

// delete student.phone;

// console.log(student)

// let student = {
//     name : "kalebu",
//     rollNO : 2366,
//     course : "BTech",
// };
// console.log(student)
// console.log(student.rollNO)

// student.name ="mahesh";
// console.log(student)

// student.address = "CTRI RJY";
// console.log(student)

// delete student.address;
// console.log(student)


// Rough figure for class

// class Student{
//     static college_Name = "AdityaUniversity";
//     constructor(name,rollNo,branch){
//         this.name = name;
//         this.rollNo = rollNo;
//         this.branch = branch;
//         this.college_Name = Student.college_Name;
//     }

//     updatedBranch(newbranch){
//         this.branch = newbranch;
//     }
// }

// let stu1 = new Student("mahesh",2366,"Mech", Student.college_Name);
// console.log(stu1);

// stu1.updatedBranch("AI&ML");
// console.log(stu1)

// class book{
//     static author = "Mahesh";   // static properties
//     constructor(title,price,npages){
//         this.title = title;   // instance properties
//         this.price = price;
//         this.npages = npages;
//     }

//     static getBookId(){   // static method
//         return book.author;
//     }

//     updatedPrice(newPrice){  // instance method
//         this.price = newPrice;
//     }

// }

// let book1 = new book("Move with mahesh",500,329);
// console.log(book1)
// book1.updatedPrice(720);

// console.log(book1)


// console.log(book.author)
// console.log(book.getBookId())


// let student = {
//     name : "kalebu",
//     age : 23,
//     phNo : "088076",
//     gender : "male",
// }

// console.log(student)
// student.gender = "Female";
// console.log(student)



// *****Learning Objects****

// alert("welcome to part 2 of objects");

// let wish = function(){
//     console.log("Happy birthday");
//     console.log("Everything is fine")
// }

// wish()

// let student = {
//     name : "Mahesh",
//     Ph : "76719767",
//     Age : 23,
//     wish : function(){
//     console.log("Happy birthday");
//     console.log("Everything is fine")
// }
// };

// alert(JSON.stringify(student))

// student.wish();

// let key = prompt("Enter key what do you want name or age ?");
// let key1 = prompt("Enter key what do you want name or age ?");
// // console.log(key);
// const user = {
//     name : "kalebu",
//     age : 23,
// }

// console.log(user[key])
// console.log(user[key1])

const name = "kalebu";
const age = 23;
const role = "Software developer";

// const employe = {
//     name : name,
//     age : age,
//     role :role,
// }

const employe = {name,age,role}

console.log(employe)