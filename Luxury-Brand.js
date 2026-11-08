// ALL variavles 

let customerName = "ali";

let age = 17;

let budget = 200000;

let interested = true;

let membership = "gold";

let platform = "instagram";

let productPrice = "2000";

let discount = "20";



console.log("customer name :",customerName)


// check age by using if and else.


if(age >= 18)

{

  console.log("Eligible For Dealing")

}

else

{

  console.log("Age Restriction")

}

  

  /*

  check customer is intreasted or not 

intreasted and check budget by using nested 

if else

  */

  

  if(interested ==true){

    if (budget >= 10000){

      console.log("Approved For Special Offer");

    }else{

  console.log("Budget Too Low")

}


 } else{

  console.log("Customer Not Intreasted")

}

// Decide Customer Categary 

if (budget >= 100000)

{

  console.log("PREMIUM CUSTOMER")

} else if (budget >= 50000)

{

  console.log("Gold Customer")

}



if (budget <= 1000)

{

  console.log("Normal Customer")

} else if (budget <= 5000)

{

  console.log("Low Budget Customer")

}



// Select Campaign By using Switch 

 

 switch (platform){

   case "instagram":

   console.log("Luxary Reels Campaign")

   

break ; 

   case facebook:

   console.log("Adds Campaign")

   break;

   

   case "tiktok":

   console.log("Short Videos")

   break;

 }


// check customer is vip or regular.


let status = membership == "gold" ? "VIP" : "Regular";


console.log(status);


// calculate discount

let discountPrice = productPrice * discount / 100;

let totalPrice = productPrice - discountPrice;

console.log("Total Price :",totalPrice)



