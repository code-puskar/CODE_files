
console.log("DOD");
// var a = [12,13];  //array in js []
// var b=a;
// b.pop();

//conditionals if else-else if ----------------->
//jab bhi baat agar magar pe ayegi aur aisa waisa pe ayi toh tub use hote hai conditionals
// if (12>13) {
    
// }
// else{

// }

// LOOPS------------------------------>
// for and while 
// for(var i=0;i<11;i++){
// console.log(i);

// }

//WHILE LOOPS
// var a = 10;
// while (a<20) {
//     console.log(a);
// a++;
    
// }

// FUNCTIONS:
//1.jub apka code app future mein chalana vhahte ho aur 
//reuse karna hai ya phir wanna use with diiferent data
//koi code ko likh kar naam dena

// function kill(a){
//     console.log(a);
    
// }
// kill(12);
/*function kill(a,b,c){//Parameters:jaha store hoti hai value
    ------------------------------->functions
    console.log(a,b,c);
    
}
kill(12,13,14);*///argurment-real values during chalate waqt

//push pop shift unshift: arr.push(x)----->add element arr.unshift(x)
//----->add at start arr.shift(x)----->remove from start
//arr.splice(2,1): matlab 2nd position se 1 element gayab



//ARRAY-Group of values.

// var arr=[1,2,3,4,5];
// arr[0];

// objects hai ek bande ke details ko hold karna like structure in C
/*1} blank obj : var a= {};
2} filled obj : var car ={
   age : 24,--------------->PROPERTies
   room : nothing ,
   fun:xy(){}<-----------------adding function makes it method
}

ACCESS---> car.age= 24;


*/
//###################################################################################################################################

/*

ADVANCE JAVA SCRIPT
 1. var function scopedd hota hai: u can use  variable any where in
  a function, eg; for loop mein declared i ko loop k bahar bhi use kar sakte hai 
 2. let braces scoped hota hai: u  can use only inside the declared bracket.
 eg; loop k bahar i nahi chalega.
 3. var adds itself to the window objects and let doesnt adds 
 - Windows have its own features collection or local IN window
 4. BROWSER context API- windows , stack and Heap Memory.
 5. STACK:jaise aate waise jaate 
 6.HEAP: var data is stored in heap.
 7.EXECUTION CONTEXT: any time w use  function, function will create its 3 imaginary container 
 i}variables.
 ii}functions inside that parent fnc.
 iii} lexical environment of that function.
8. copy reference:
var a=[1,2,3];
var a = {name:"hiru"};
var x= [...a] ...=iske baadh jobhi likha hai uske value spread operators k jagah rakh do
9.TRUTHY AND FALSY: 
10.foreach loop: used during array handling 
accessing each elements in array, it doesnt changes original 
array it only changes the imaginary copy of that array which is printed
11. Objects ko loop  karne ke lia hota hai forin loop:
var obj = {
    name = "raju";
    city  = "rajasthan ";
}
for(var key in obj{
    console.log(key,obj[key]);
}
12.call back fnc is runned after a certain, alloted time:
settimeout(function(){
    console.log("milliseconds mein time hai!");  
},2000);

13.First class Fncs:using function as a value.
var a = function(){};<--------------------------------------in javascript u can do this.
eg;
function abcd(a){

}
abcd(function(){console.log("wassup!");})
print----->wassup!

14.object : var arr = [1,2,3,4];
its not array its object u can give negative index

15.higher order function: which accepts a function as a parameter.
eg.1: function abcd(){

}
abcd(function(){})

eg.2:function abcd(){
    return function(){}
}
abcd()

16.Constructor Functions:jab aapke paas  aisa koi bhi mauka 
ho jub aapko ek jaise property wale elements banane ho.
---->"new"keyword matlab it will create a blank object
eg: function abcd(){
    this.age=12;
}
new abcd(){
    age:12;
}

17.iife => immediately invoked function expression 
eg: (function abcd(){
       var private =12; <--------------- private value inside iife which
        cant be accessed without getter.
       return{
        getter:function(){   <-----------gets the value.
            console.log(private);
        },
        setter:function(val){  <----------inputs value .
            private=val;       <----------replace the value with getter value.
        }
       }
})()

18.whenever we create an object it automatically gets proptotype property/helper property.
19.Prototype and Inheritence: getting properties of parent element.

Syntax:minorobject.__proto__= parentobject;

20.call =>if u want to point out a function or an object toward
 any element,basically assigning value to (this).
21.Apply bind: 
function abcd(val1,val2,val3){
    console.log(this,val1,val2,val3);
}

var obj={age : 24};
abcd.apply(obj,[1,2,3]);






*/