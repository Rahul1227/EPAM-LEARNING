// I want you to achive the given task in sequentially.
// but how whould you achive this using promise as it is async. 
// tha task is:
// 1) light on the gas
// 2) put on the Stove 
// 3) make a good cup of tea

const promise1= new Promise((res, rej)=>{
    return res("Light on the gas");

});

const promiseTwo=promise1.then(function(data){
    console.log(data);
    return new Promise((res, rej)=>{
        return res("put On the stove");
    })
})

const promiseThree=promiseTwo.then(function(data){
    console.log(data);
    return new Promise((res, rej)=>{
        return res("Make a good cup of tea");
    })
})

promiseThree.then(function(data){
    console.log(data);
})