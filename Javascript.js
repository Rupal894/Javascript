
function myFunction()
{var i,price;
var fruits=[["strawberry", 15, 10],
            ["pineapple", 10, 40],
            ["apple",6,20],
            ["mango", 12, 50],
            ["pear", 10, 80]];

for(i=0; i<fruits.length; i++)
{

 price=fruits[i][1]*fruits[i][2];
 if(price>250)
 {
   console.log("Name of the fruit : " +  fruits[i][0]);

 }
}
}
myFunction();
