//var c = 300
 let a = 300

if(true){
    let a = 10
    const b =20
    c=30
    //console.log("INNER",a);
    
}
 //console.log(a);
//console.log(b);
//console.log(c);

 function one(){
    const username = "souabh"

    function two(){
         const website = "youtube"
         console.log(username);
         
    }
        //console.log(website);
        two()
        
 }
   // one()
   if(true){
      const username = "sourabh"
      if(username== "sourabh"){
        const website = " youtube"
        //console.log(username + website);
        
      }
          // console.log(website);
           
   }
     // console.log(username);
      
  // ***********interesting********************
  addone(5)
    function addone(num){
        return num + 1
    }
      // jab ase function declear karte hai too phle initilization nii kar sakte haii
      addtwo(5)
      const addtwo = function(num){
        return num + 2
      }
        