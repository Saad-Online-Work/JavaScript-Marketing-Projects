let followers = 200000;
let engagement = 2.5;
let fakeFollowers = 15;
let fee = 80000;
let budget = 100000;
let verified = true;

// Check influencer requirements
let followerCheck = followers > 100000;
let engagementCheck = engagement >= 3;
let fakeFollowerCheck = fakeFollowers < 20;
let budgetCheck = fee <= budget;

// Final hiring decision
let eligible = followerCheck &&
               engagementCheck &&
               fakeFollowerCheck &&
               budgetCheck &&
               verified;

console.log("Influencer Hiring Analysis");

console.log("Followers:", followerCheck);
console.log("Engagement:", engagementCheck);
console.log("Fake Followers:", fakeFollowerCheck);
console.log("Budget:", budgetCheck);

console.log("Final Decision:", eligible ? "Hire Influencer" : "Reject Influencer");