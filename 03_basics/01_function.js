function sayMyname(){
    console.log("s");
    console.log("o");
    console.log("u");
    console.log("r");
    console.log("a");
    console.log("b");
    
}
  //sayMyname()

//  function addTwoNumbers(number1,number2){
 //   console.log(number1+number2);
 // }
  function addTwoNumbers(number1,number2){
   //let result = number1 + number2
   // return result
    return number1 + number2
    
  }
          const result = addTwoNumbers(3,5)
        //  console.log("Result:",result);

        function loginuserMessage(username){
          if(!username){
            console.log("please enter a username");
                return

          }
          return`${username} just logged in`
        }
         // console.log(loginuserMessage("sourabh"));
            console.log(loginuserMessage("sourabh"));
            