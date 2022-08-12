// loops
let num = [2,3,4,5,6];

for(let i =0; i< num.length; i++)
{
    console.log(num[i]);
}

num.forEach((element) => {
    console.log(element+"\n")
})


for (let i of num){
    console.log(i+"\n");
}

for (let i in num){
    console.log(i+"\n");
}
