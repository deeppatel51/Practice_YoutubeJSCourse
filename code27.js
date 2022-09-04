alert("enter a number");
let a = prompt("enter")
a = Number.parseInt(a)
alert("the no is " + (a))
let write = confirm("want to print?")
if(write){
    document.write(a)
}
else{
    console.log("i am not a text")
}