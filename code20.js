let num = [2,3,4,5,6];

let a=num.map((value,index,array)=>{
    console.log(value,index,array);
    return value*1000;
})
console.log(a);

a2=num.filter((b)=>{
    return b<5;
})
console.log(a2);

a3=num.reduce((h1,h2)=>{
    return h1*h2;
})

console.log(a3);