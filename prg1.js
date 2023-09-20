// question 
/* write a js to generate a random number 
and ask user to enter a number if user hit right number then its good guess

the score is 100- no of times user enter a number */
/*

let count = 0 ;
let input ; 
let random_number = Math.floor( Math.random()*10);
     
    while(random_number!= input){
       input = prompt("enter a number ")
        count++;
    }
    console.log(`wow! you hit that in ${count} count ` )
    console.log("your score is" , 110-(count*10))
 
 */
// use prompt function to take input of age as a value
// from the user and use 
//alert to tell if he can drive or not
// ask user if he want to pop of prompt agan  
/*

let runagain = true ;

const Can_drive  = () =>{
    return "yes! you can drive "
}
const Cant_drive= () =>{
    return "no! go to the school"
}

while(runagain){
    let age  = prompt("enter your age ")

    if(age<=0){
        alert(" Enter a valid age   ")
        console.error(" enter valid age ")}
    else if (age>18){alert(Can_drive())}
    else alert(Cant_drive())
    runagain = confirm("do you want to enter the age again ")}
    */

    //Question 2
   // if some one enter number greater than 4 then redirect to 
   //google.com

/*
   let num = prompt("enter a number ")

   if(num > 4){ location.href ="https://google.com"}
   else{ alert(`you enter ${num}`)}

*/

// Question 3 
// change the background 
//color to yellow red or any other color
// base on user input through prompt 
/*
let ask = true ;
while(ask){
let color = prompt("Enter the name of color that you want ")
document.body.style.background = color 
ask = confirm ("  do you like it to run again? ")   
}*/


//question 
// Randomly choose a element from array 
/*
let run = true; 
let u_count = 0;
let s_count = 0;


const cheeck = (random,user) =>{
    if(random == "snake"&& user == "water"){
        S_count++
        return " you Lost!</br> opponent  choose snake "}   
    else if(random == "snake" && user=="gun"){
        u_count++
        return " you win!</br>nopponent choose snake "}
    else if(random == "water" && user=="gun"){
        s_count++
        return "you Lost!</br>nopponent choose water "}
    else if(random == "water" && user == "snake"){
        u_count++
        return "you win!</br>opponenet choose water "}
    else if (random == "gun"  && user =="snake"){
        s_count++
        return "you Lost!</br>opponenet choose gun  "}
    else if(random == "gun"   && user == "water"){
        u_count++
        return "you win!<\br>opponenet choose gun"}
    else if(random == user){return "match tie! play again"}
    else return "oops! something went wrong" 
    
}

    while(run){
let arr =["snake","gun","water"]
let user = prompt("choose on of them (snake / water / gun )")
let random = arr[Math.floor(Math.random()*arr.length)]
alert(cheeck(random,user))
run = confirm("do you want to plain again ")
}
if(u_count>s_count){alert(`you Won the series by(${u_count}-${s_count}) points `)}
else if(s_count>u_count){alert(`you lost the game series by (${s_count}-${u_count})`)}
else if(u_count==s_count){alert("Game Series tie")}
*/