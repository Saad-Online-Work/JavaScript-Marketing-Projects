let views = 500000;
let clicks = 10000;
let sales = 100;
let adBudget = 100000;
let productPrice = 2000;
let campaignStatus = "running";
let feedback = "poor";

// Calculate campaign performance
let ctr = (clicks / views) * 100;
let totalRevenue = sales * productPrice;
let profit = totalRevenue - adBudget;

// Campaign decision using Ternary Operator
let campaignDecision = ctr >= 2 ? "Continue Campaign" : "Stop Campaign";

// Display results
console.log("Campaign Performance Analysis");

console.log("Total Views:", views);
console.log("Total Clicks:", clicks);
console.log("Total Sales:", sales);
console.log("CTR:", ctr + "%");
console.log("Total Revenue: Rs.", totalRevenue);
console.log("Ad Budget: Rs.", adBudget);
console.log("Profit/Loss: Rs.", profit);

console.log("Campaign Status:", campaignStatus);
console.log("Customer Feedback:", feedback);

console.log("Final Decision:", campaignDecision);