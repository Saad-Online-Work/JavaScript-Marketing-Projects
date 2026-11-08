let productPrice = 25000;
let quantity = 3;
let stock = 8;
let customerType = "platinum";
let coupon = true;
let payment = "online";

// Check stock availability
if (quantity <= stock) {

    console.log("Stock Available");

    let totalPrice = productPrice * quantity;

    // Check coupon eligibility
    if (coupon === true) {

        if (customerType === "platinum") {
            console.log("20% Discount Applied");
            totalPrice = totalPrice - (totalPrice * 0.20);
        } 
        else {
            console.log("Platinum Membership Required");
        }

    } 
    else {
        console.log("Invalid Coupon");
    }

    console.log("Payment Method:", payment);
    console.log("Final Price: Rs.", totalPrice);
    console.log("Order Confirmed");

} 
else {
    console.log("Insufficient Stock");
    console.log("Order Rejected");
}