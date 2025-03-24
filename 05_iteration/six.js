// const coding = ["js","ruby","java","python","cpp"]
  
//  const values = coding.forEach((item)=>{
//     //console.log(item);
//       return item
//  })
//   console.log(values);
  const mynums = [1,2,3,4,5,6,7,8,9,10]
   // const newnums = mynums.filter( (num)=>{
   //      return   num>4})
   //       const newnums = []
   //       mynums.forEach( (num)=>{
   //          if(num>4){
   //             newnums.push(num)
   //          }
   //       })
   //   console.log(newnums);
        const books= [
          {
            title:'book one',genre:'fiction',publish:1981,
            edition: 2004},
          {
            title:'book two',genre:'non fiction',publish:2003,
            edition: 2005},
          {
            title:'book three',genre:'history',publish:1981,
            edition: 2006},
          {
            title:'book four',genre:'non fiction',publish:2005,
            edition: 2007},
          {
            title:'book five',genre:'science',publish:2007,
            edition: 2008},
          {
            title:'book six',genre:'fiction',publish:1999,
            edition: 2009
          },
          {
            title:'book seven',genre:'history',publish:1981,
            edition: 2010
          },
        ];
          let userbooks = books.filter((bk) =>bk.genre==='history')
           
           userbooks = books.filter((bk)=>{return bk.publish>=2000})
           console.log(userbooks);
    
        