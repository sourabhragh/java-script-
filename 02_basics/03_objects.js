//singleton
//object.creation

// object literals

 const mysym = Symbol("key1")
const jsuser = {
    name: "sourabh",
    "full name":"sourabh raghuwanshi",
   [mysym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"sourabh@google.com",
    isLoggedIn:false,
    lastlogindays:["monday","wednesday"]

}
  // console.log(jsuser.email);
  // console.log(jsuser["email"]);
  // console.log(jsuser["full name"]);
  // console.log(jsuser[mysym]);
   
   jsuser.email = "sourabh@chatgpt.com"
   //Object.freeze(jsuser)
   jsuser.email = "sourbh@microsoft.com"
  // console.log(jsuser);
    
     jsuser.greeting = function(){
        console.log("Hello js user");
     }
     jsuser.greetingtwo = function(){
        console.log(`Hello js user,${this.name}`);
        
     }
       console.log(jsuser.greeting());
       console.log(jsuser.greetingtwo());
       
       