let phone = 90.2345;
let computer = 123.965;
let headphone = 15.678;

let max = Math.max(phone,computer,headphone);
console.log(max);

let min = Math.min(phone,computer,headphone)
console.log(min);

let sum = phone + computer + headphone;
console.log(sum);

let sumSecond = Math.floor(sum)
console.log(sumSecond);

let sumThird = Math.floor(sum)
console.log(sumThird);

let sumFourth = Math.round((sum)/100)*100
console.log(sumFourth);

if (Math.floor(sum) % 2 == 0) {
    console.log(true);
}else(console.log(false));

let rest = 500 - sum
console.log(rest);

let midSum = (sum/3).toFixed(2)
console.log(midSum);

// СЕРЕДНЄ

let discount = Math.floor(Math.random()*101)
console.log(discount);

let discountSecond = Math.random()*101
let price = (sum - discountSecond).toFixed(2)
console.log(price);

let cash = (Math.random()*501).toFixed(2) 
let discountThird = Math.floor(Math.random()*101) 
let changePrice = cash*discountThird/100 
let realPrice = cash/2
let farm = (realPrice - changePrice).toFixed(2)
console.log(farm);

console.log((`максимальне число:${max},`),(`мінімальне число:${min},`),(`сума:${sum},`),(`сума друга:${sumSecond},`),(`сума третя:${sumThird},`),(`сума четверта:${sumFourth},`),(`сума решти:${rest},`),(`середнє значення:${midSum}.`));
