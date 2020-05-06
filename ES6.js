var myFunction=()=>
{
  for(let fruit of fruits){
    const price = fruit.quantity* fruit.pricePerUnit;
    if(price>250)
    {
      console.log("Name of the fruit : " +  fruit.fruitName);
    }
  }
}

  const fruit1={fruitName:"strawberry", quantity: 15,pricePerUnit: 10};
  const fruit2={fruitName:"pineapple", quantity: 10,pricePerUnit: 40};
  const fruit3={fruitName:"apple", quantity: 6,pricePerUnit: 20};
  const fruit4={fruitName:"mango", quantity: 12,pricePerUnit: 50};
  const fruit5={fruitName:"pear", quantity: 10,pricePerUnit: 80};

  const fruits=[fruit1,fruit2,fruit3,fruit4, fruit5]

myFunction(fruits);
