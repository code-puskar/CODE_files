
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
/* HTML NOTES


<!-- <h1>my bookmarks</h1>
    <h2>primary bookmarks </h2>
    <p><a target="_blank" href="https://google.com">open google</a></p>-------- 
    <target _blank allows to open links in a new tab
    <p></p><a href="https://amazon.com">open amazon</a>-->
    <!-- <img width="100%"height="100%" 
        src="https://t4.ftcdn.net/jpg/02/55/17/43/240_F_255174366_ojDuATz84e5h7lIlxh2moUJa9Kpd5wKk.jpg" alt=""> 
    -->
    <!-- inline: elements take only required space ie jitna line hai 
        utna hee colour,block elements:pura line ko coloured kardete hai jaha words nahi hai waha bhi 

2.ID and classes:it gives unique identity to an element so that it can be further used by accesssing
it through its id|| CLASSES: ID element ko alag karta hai aur Classes uss id k andhar k categories ko 
alag karte hai.

3.CSS access: # lagake ID access karte hai aur (.)lagake uske andhar k classes ko.
4. AUDIO TAG:
<audio src="audio.mp3" controls></audio>
Copy
Attributes for <audio> Tag
src: Specifies the path to the audio file.
controls: Adds audio controls, like play, pause, and volume.
autoplay: Automatically starts playing the audio when the page loads.
loop: Repeats the audio once it ends.
muted: Mutes the audio by default.
preload: Specifies if and how the audio should be loaded when the page loads ('auto', 'metadata', 'none').
 

The "preload" attribute can have the following values:

none: This is the default value. It indicates that the browser should not preload the audio file at all.
 The audio file will only start downloading when the user initiates playback.

metadata: This value tells the browser to preload only the metadata of the audio file,
 such as its duration and basic information about the audio. This can be useful if you want to
  display the audio duration to the user without fully loading the audio data.

auto: This value instructs the browser to preload the entire audio file as much as possible 
without delaying the loading of other important page content. The browser will try to load the 
audio file in the background so that it's ready to play when the user decides to start it.

  5.EMBEDING EXTERNAL VIDEO:
   <iframe width="500" height="300" src="https://www.youtube.com/embed/XewspIh58Qg?si=J7Xc_MD-8AKjfZEs&amp;start=1" title="YouTube video player" controls frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    -  6.SEMANTIC tag:  differentiates position of fifferent element
    7.html entities:<pre></pre> is used to display elements as written 
    8.for space write &nbsp:codetag:
    
    
    
    
    
    
    
    
    
--->*/ 