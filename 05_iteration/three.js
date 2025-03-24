// for of 

//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
     
}
const greetings = "hello world!"
for (const greet of greetings){
     //console.log(`each char is $(greet)`);
     
}
 //unique value
  const map = new Map()
  map.set('IN',"India")
  map.set('USA',"united states of america")
  map.set('fr',"france")
  //console.log(map);
 for (const [key,value] of map) {
      // console.log(key,':-',value);
       
 }
 const myobject = {
    'game1': 'nfs',
    'game2': 'spiderman'
  
 }
//   for (const [key,value] of myobject) {
//        console.log(key,':-',value);
       
//   }