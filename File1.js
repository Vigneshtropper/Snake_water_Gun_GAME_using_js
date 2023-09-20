/*
function addThreeNumbers(a,b,c){
    return a+b+c;

}
let C = addThreeNumbers(1,2,3);
console.log(C)

 var(avoid it cause bug ), 
const(constant value that don't change  ),
let ( variable values ) , 

//{
// we cant redefine var variable 
// depricated 

var a = 45;
var b =  "String";
var c = null;
var d = undefined;
var d = "string";// var can redeclare  
}

let a = 34;
//let a = 3 ;// ce redeclaring 
a = 3 ;// right way to reassign 
let b = "string";

{
    // constant no redeclare or reassgin 
    // it is manndatory to initialize the cont value 
    
const x = "Constant ";
console.log(typeof b)
console.log("hii there" );
console.log(typeof a )
console.log( typeof d)
}




 DATA TYPES in JAVASCRIPT 
there are 7 types  of primitive data types
N -> NuLL
N-> NUMBER
B-> BOOLEAN
B-> BigInt
S-> SYMBOL
S-> STRING
U-> UNDEFINED 


let a= null;
let b = 345;
let c = true;
let d = BigInt( 78641 ) + BigInt (  465123 );
let e = "Vighneshwar Mishra ";
let f = symmbol (" this is a symbol ");
let g = undefined 
console.log(a , b,  c, d, e, f, g )

//  DEFINING  OBJECTS IN JAVA SCRIPT

let arr = [1,2,3,4,5,6,7,8,9];
console.log(arr)



/*practice code for js 
let sss = "string";
let ss = 4;
console.log(sss+ss);

//Q-2 
console.log(typeof(sss+ss))


//Q3
//create a constant object and 
//try to add some key and value later and 
//try to acess its elements later 
const a1 = {
    name:"rachit",
    age:19,
    student:true,
    principle:false

}
console.log(a1)
console.log(typeof(a1))
console.log(a1.student)
a1['age'] = 20// cahnging age element in object a1
a1['friend'] = "Rachana"//adding new element in objects 
console.log(a1.age)
console.log(a1)



//operator in js 
console.log()
let a = 30;
let b = 2;
//Arithmatic operator

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a**a)// a to the power of a 
console.log(a%b)
//increment and decrement operator 
console.log(a++)//a--
console.log(++a)//--a



// prompt - kuch mange ga 
// alert - kuch btayega 

let a = prompt("enter your age ")
alert ("your age is "+ a )

if(a>18){
    document.write("you can drive ")
}
else document.write("you are a minor can't drive according gov rules ");

// SWITCH CASE 

let a = 55;
switch(a){
    case 1:console.log("1")
    break;
    case 2:console.log("2")
    break;
    case 3:console.log("3")
    break;
    default:console.log("enter a valid value b/w 1 to 3");//jab koii match nahi hoga tab default chlega 
}

// write a program which show day by input the number 
let A =45;
switch(A){
    case 1 : console.log("Monday");
    break;
    case 2 : console.log("Tuesday");
    break;
    case 3 : console.log("Wednesday");
    break;
    case 4 : console.log("Thursday");
    break;
    case 5 : console.log("Friday");
    break;
    case 6 : console.log("Saturday");
    break;
    case 7 : console.log("Sunday");

    default : console.log("there are only seven day in a a weeek bro ") ;
}
// ternary operator 
//console.log("you can ", a>18? "drive ": "not Drive")
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()

console.log()
console.log()
console.log()






// cheeeking  out weather given values a an armstrong or anagram 
// find out first digit of a number 
// function Cheeck_Anagram(a){
//     let count = 0;
//     while(a!=0){
//        a = parseInt(a/10);
//         count++;
//     }
//     console.log(a)
//     console.log(count)

// }

// let a = prompt("enter a value ");
//  let c = Cheeck_Anagram(500);

 //LOOPS IN JS 
 //FOR LOOPS
 
 for(let i=0;i<=5;i++){
    console.log(i);
 }
 //sum of first 5 natural number 
 let sum = 0;
 for(let i = 0 ; i<=5 ; i++)
        {sum +=i;}     
  console.log(sum); 


    // for (in loop)
    // for (key in object("like for arrays or string") ){
    // code to be executed 
    // }
    // for of loop
    // for(variable of iterator ){code to be executed}


  let obj = {
    harray :12,
    garry:90,
    sweta:90,
    rachita:56,
    shivani:96
  }
  for(let a in obj ){
    console.log(a)// getting keys of object obj 
    
    console.log("Marks of "+a+"are : "+obj[a]) //getting keys +values 
  }

  for (let b of sweta){
    console.log(b)

  
  // whiel loop 
  while(true){
    console.log("hi"+" bby ")
  }


  // do while loop 

let i = 1;
  do{
    console.log(i)
    i++;
  }while(i<45)

*/
/*
// creating a function 

  
  
  let a = 56;
  let b = 45;
  let c  =56;
// traditional type to create function
  function average(a,b){
    console.log("the average of value is " + (a+b)/2)
    console.log("Done")
  }

// another type of creating a function
// arrow function 

const sum = (p,q)=>{
    return p+q;
}


// average function in arraow function 

const Average = (a,b,c) =>{
    return ((a+b+c)/2);
}

console.log(Average(b,c,a))
console.log(average(a,b))
console.log(sum(a,b))
*/

/*************** Practice set **************** */
// write a prg to print marks of a student 
/*
let marks = {
  maths:78,
  English:78,
    Hindi:78,
    Sanskrit:78
}

for(let key in marks){
    console.log("the marks of "+ key + " is " + marks[key]);
}

*/

// getting users input until user enter the correct value 

/*
let ch = 100
let i ;
while( i!=ch){
    console.log("Try again")
     i = prompt("Enter a number ")
}
console.log("you entered a correct number ")

*/
/***** chapter 3 ******/
/***********STTRING*********/
// @imp in if we do operation in string than changes cant reflect 
//the string remain same but in array changes are save   
/*
let a ="String"
let b = 'Banana'
console.log(a.toUpperCase())
console.log(a.slice(1))
console.log(a.slice(0,5))
console.log(a.replace("string","integer"))
console.log(a.concat(b))

let c = "   meena      ";
console.log(c.trim())

console.log(a.length)
 b = 'Banana'
console.log(b.length)
console.log(b);

let a = "stringSingh"
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
let b = "str"+"ing"+"singh"
console.log(b);*/
/***********chapter 4 practice set  *****/

//conacat two string
/*
let boy1 = "aman"
let boy2  ="naman"
// backtick (```````````)
console.log(`${boy1} is friend of ${boy2}`)
*/
/*
let a = "harry\""
console.log(a)
console.log(a.length)
*/
/*
//cheeck weather the string contain character 
let b ="the quick brown fox jump over a lazy dog"
console.log(b.includes("quick"))

let word = "quick"
console.log(`the word ${word} `+(b.includes(`${word}`)? "is" : "not" )+" present in the sentence")

// get amount from string
let string = "please give me Rs 4500"
console.log(parseInt(string.slice("please give me Rs".length)))
console.log(parseInt(string.slice(18))) 

// change a string 
let a = "Deepika"
a[1] = R ; // can not change the string string is immutable 
console,log(a);
*/
/****** arrays **** */
// array 
/*
let nums = [1,2,3,4,5,6,7]
console.log(nums,typeof nums)
console.log(nums[0])
console.log(nums[1])
console.log(nums.toString())
console.log(nums.join("-"))
console.log(nums.pop()) // pop last element of the array 
*/
// @imp in if we do operation in string than changes cant reflect 
//the string remain same but in array changes are save   
/*
let marks = [1,2,3,4,5,6,7,8,9]

console.log(marks.push(8),marks)// adding without using index an element in an array 
marks[9]=79 // adding an element at specific location using index of array 
marks[1]= 56 ;// averriding a value of an array 
console.log(marks) 
console.log(marks.shift(),marks)// remove an element from first 
console.log(marks.unshift(45),marks)// adding element to start of array

let grade = [1,2,3,4,5,6,4]
console.log(marks.concat(grade))
*//*
let grade = [1,2,3,4,5,6,4]
console.log(delete grade[0])// there is no  change in length the element got null value 
console.log(grade)
console.log()


//  example of book
const compare = (a,b) =>{// for ascending order 
  return a-b;
} 
const compare_des  = (a,b)=>{//f or descending order
  return b-a;
}
let arr =[5,6,71,19,24,95,16,4,2,6,5]
console.log(arr.sort());
console.log(arr.sort(compare_des))
for (let i in arr){
  console.log(i)
}
// classicale for loop 
for (let i = 0; i<arr.length;i++){
  console.log(arr[i]);
}
// for each loop in js

arr.forEach ((element)=>{
  console.log(element)
})

//array from create an array form any object (string or collection )
let Name  ="harrray"
let rrr =Array.from(Name)
console.log(rrr)

//for of acess the elements of array 
for (let i of arr){
  console.log(i)
}*/
/*
let arr =[5,6,71,19,24,95,16,4,2,6,5]
// map method 
arr.map((value)=>{
  //console.log(value)
})

arr.forEach((value,index)=>{console.log(value,index) })
let arrr = arr.map((value)=>{
 console.log(value)
 return value+1;
 })
 console.log(arrr)
*//*
let arr =[5,6,71,19,24,95,16,4,2,6,5]

let arrr = arr.filter((a)=>{
  return a>5
})
console.log(arrr)

//reduce 
let arr2  = arr.reduce((i,j)=>{
  return i+j
})
console.log(arr2)
*/
/*******practice set array ******/
/*
//add a numberin array 
 let a =[1,2,3]
// a.push(prompt("enter a number "))
// //console.log(a)
// add until zero 
let b ;
do{
   b  = (prompt("enter a number",'0'))
  a.push(b)
}while(b!= 0);
*/
//console.log(a)

// problem 3 
//use filter for find number dividible by 10 
/*
let arr = [102,100,5655,450,400,2]

console.log(arr.filter((element)=>{
  return  element%10 == 0 ;
}))
*/
// problem 4 
// create an array of square of given number 
/*let a = []
for(i=0;i<=5;i++){
  let value = prompt("enter a value ")
  a.push(value*value)}
console.log(a)

let arr  = [1,2,3,4,,56]
let arr1 = arr.map((a)=>{
  return a*a
})
console.log(arr1)
*/
// use reduce to calculate factorial of a given number from an array
// of first n natural number 
/*
let arr = [1,2,3,4,5,6,7,8,9] 
console.log(arr.reduce((i,j)=>{
    return i*j
}))

// doing opertion along with operation with string
console.log("the length of string is ",(10*10))
// invoking a method 
const add_two_number  = (a,b) =>{
  return a+b ;
}
let c = add_two_number(1,2)
console.log(c)
*/
/*
// write an array to store the square of elements that 
//put until zero comes 
let a;
let arr = []
while(a!=0){
  a = prompt("enter a number")
  arr.push(a*a);
}
alert(arr)*/
// create an ew array having square of all number 
/*
let a = [54,56,564,45,45,5]
a.forEach((values)=>{
  console.log( values*values)
})

let arr = a.map((values)=>{return values*values})
console.log(arr) */

//randomly get a element from array 
/*
let arr =["ram","shyam","ghanshyam","vijay raj"]

let random  = Math.floor(Math.random()*arr.length)
console.log(arr[random])  */