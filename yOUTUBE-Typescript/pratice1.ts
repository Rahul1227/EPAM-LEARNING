var name1="rahul";
name1.toUpperCase();


function greetUser1 (user: {firstName:string; lastName?:string}){
    console.log(`hy ${user.firstName} ${user.lastName}`);
    

}

const user1={
    firstName:"Rahul",
    lastName:"Yadav"
}

greetUser1(user1);

greetUser1({firstName:"tahul"});


let str:string;


enum User{
    name="rahul",
    class="IDK"

}

console.log(User.class);



// union and intersection

//union
let a:string | number;
a="rahul";
a=4532;


//intersection

type City={
    pinCode:number,
    cityName:string
}

type Planet={
    planetNumber:number;
}

type cityInPlanet=City & Planet;

let newA:cityInPlanet;

newA={
    pinCode:12213,
    cityName:"hydrabad",
    planetNumber:90
}

