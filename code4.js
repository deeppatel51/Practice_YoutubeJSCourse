// the 7 primitives are string,number,bigint,boolean,undefined,symbol,null nn bb ss u
let a = null;
let b =345;
let c =true;
let d = BigInt("567") + BigInt("3");
let e = "deep";
let f = Symbol("this is a good symbol");
let g = undefined;
console.log(a,b,c,d,e,f,g);

// objects in js
const item = {
    "deep":true,
    "patel":true,
    "harry":false
}
console.log(item["deep"]);