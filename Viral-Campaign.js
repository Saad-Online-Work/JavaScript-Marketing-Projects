let budget = 200000;
let website = true;
let seo = true;
let videoEditing = false;
let socialMedia = true;
let experience = 3;
let country = "USA";

// Select marketing package
let packageName;

if (website && seo && socialMedia && videoEditing) {
    packageName = "Premium Package";
}
else if (website && seo && socialMedia) {
    packageName = "Professional Package";
}
else if (website || seo || socialMedia || videoEditing) {
    packageName = "Basic Package";
}
else {
    packageName = "No Package Selected";
}

// Identify target market
let targetMarket;

switch (country) {
    case "USA":
        targetMarket = "North American Market";
        break;

    case "UK":
        targetMarket = "British Market";
        break;

    case "Pakistan":
        targetMarket = "Local Market";
        break;

    default:
        targetMarket = "International Market";
}

console.log("Selected Package:", packageName);
console.log("Target Market:", targetMarket);
console.log("Agency Experience:", experience, "Years");
console.log("Client Budget: Rs.", budget);

console.log("Final Decision: Offer", packageName);