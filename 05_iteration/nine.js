const mynums = [1,2,3]
  // const mytotal=mynums.reduce(function(acc,currval){
  //    console.log(`acc:${acc} and currval: ${currval}`);
     
  //    return acc + currval

  // },0)
   //console.log(mytotal);
    const shoppingcart = [
      {
        item:"js course",
        price: 2999
      },
      {
        item:"python course",
        price: 999
      },
      {
        item:"mobile dev course",
        price: 2000
      },
      {
        item:"data science course",
        price: 12000
      },
    ]
        const pricetopay  = shoppingcart.reduce((acc,item)=> acc + item.price,0)
        console.log(pricetopay);
        