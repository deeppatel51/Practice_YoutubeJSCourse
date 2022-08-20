console.log("good morning")
console.error("youve got yourselves an error")
console.assert(3>4)
console.table(obj)
console.warn("haha")

console.time("forloop")
for(let i=0;i<10;i++)
{
    console.log(i)
}
console.timeEnd("forloop")