//premitive

// 7 types:string,number,boolean,null,undefined,symbol,bigint

//const score=100
const scorevalue=100.3

//const isLoggedIn = false
//const outsidetemp=null
//let userEmail;

const id = symbol('123')
const anotherId= symbol('123')

console.log(id===anotherId);

//reference type(non pre)
//array,objects,functions

const heros= ["shaktiman","naagraj","doga"]
 let myobj={
  name:"sourabh",
  age:22
 }
 const myfunction=function(){
    console.log("hello world");
 } 
   
 console.log(typeof myfunction);
 
 //stack(primitive),Heap(non - primitive)

 //letmyyoutubename="hiteshchoduarydotcom"

 //let anothername=myyoutubename
 anothername="chaiaurcode"

 //console.log(myyoutubename);
 //console.log(anothername);
 
    let userone={
      email: "user@google.com",
      upi:"user@ibl"
    }
     let usertwo=userone

     usertwo.email="sourabh@google.com"
     console.log(userone.email);
     console.log(usertwo.email);
     
     