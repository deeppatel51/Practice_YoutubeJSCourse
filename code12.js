let marks = {
    deep:80,
    het:60,
    ritu:40
}
for(let i =0; i<Object.keys(marks).length; i++)
{
    console.log("the marks of " + Object.keys(marks).length + " are " + marks[Object.keys(marks).length]);
}

for(let key in marks)
{
    console.log(key + "  " + marks[key]);
}