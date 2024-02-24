const phone = 90.2345;
const computer = 123.965;
const headphone = 15.678;

const max = Math.max(phone,computer,headphone);
console.log(`Максимальне значення: ${max}`);

const min = Math.min(phone,computer,headphone)
console.log(`Мінімальне значення: ${min}`);

const sum = phone + computer + headphone;
console.log(`Сума: ${sum}`);

const sumFloor = Math.floor(sum)
console.log(`Сума без копійок: ${sumFloor}`);

const sumFloorMin = Math.floor((sum)/100)*100
console.log(`Округлення в меншу сторону: ${sumFloorMin}`);

const sumFloorMax = Math.ceil((sum)/100)*100
console.log(`Сума округлена до сотень: ${sumFloorMax}`);

if (Math.floor(sum) % 2 == 0) {
    console.log(true);
}else(console.log(false));

const rest = 500 - sum
console.log(`Решта: ${rest}`);

const midSum = (sum/3).toFixed(2)
console.log(`Середнє значення цін, округлене до другого знаку після коми: ${midSum}`);

// СЕРЕДНЄ

let discount = Math.floor(Math.random()*101)
console.log(`Випадкова знижка: ${discount}`);

let discountSecond = Math.random()*101
let price = (sum - discountSecond).toFixed(2)
console.log(`Сумa до оплати округлена до 2 знаків після коми: ${price}`);

let cash = (Math.random()*501).toFixed(2) 
let discountThird = Math.floor(Math.random()*101) 
let changePrice = cash*discountThird/100 
let realPrice = cash/2
let farm = (realPrice - changePrice).toFixed(2)
console.log(`Чистий прибуток: ${farm}`);
// console.log((`максимальне число:${max},`),(`мінімальне число:${min},`),(`сума:${sum},`),(`сума друга:${sumSecond},`),(`сума третя:${sumThird},`),(`сума четверта:${sumFourth},`),(`сума решти:${rest},`),(`середнє значення:${midSum}.`));
