"use strict";
var name1 = "rahul";
name1.toUpperCase();
function greetUser1(user) {
    console.log(`hy ${user.firstName} ${user.lastName}`);
}
const user1 = {
    firstName: "Rahul",
    lastName: "Yadav"
};
greetUser1(user1);
greetUser1({ firstName: "tahul" });
let str;
var User;
(function (User) {
    User["name"] = "rahul";
    User["class"] = "IDK";
})(User || (User = {}));
console.log(User.class);
// union and intersection
//union
let a;
a = "rahul";
a = 4532;
let newA;
newA = {
    pinCode: 12213,
    cityName: "hydrabad",
    planetNumber: 90
};
