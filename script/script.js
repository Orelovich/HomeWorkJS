'use strict'; 
alert("Привет");
console.log('Hello!');

const money = +prompt('Ваш месячный доход?');
const income = '500';
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
const deposit = confirm('Есть ли у вас депозит в банке?');
const mission = 6000;
const expenses1 = prompt('Введите обязательную статью расходов 1/2');
const expenses2 = prompt('Введите обязательную статью расходов 2/2');
const amount1 = +prompt('Во сколько это обойдется 1/2');
const amount2 = +prompt('Во сколько это обойдется 2/2');
const budgetMonth = money - (amount1 + amount2);
const period = Math.ceil(mission / budgetMonth);
const budgetDay = Math.floor(budgetMonth / 30);

console.log('ваш месячный доход ' + money);
console.log('возможные расходы за рассчитываемый период ' + addExpenses);
console.log('депозит ' + deposit);
console.log('обязательная статья расходов 1/2 ' + expenses1);
console.log('обязательная статья расходов 2/2 ' + expenses2);
console.log('расход 1 ' + amount1);
console.log('расход 2 ' + amount2);

console.log(typeof money, typeof income, typeof deposit);
console.log('период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' долларов');
console.log(addExpenses.length);
console.log(addExpenses.toLowerCase().split(', '));
console.log('бюджет на месяц ' + budgetMonth);
console.log('цель будет достигнута за ' + period + ' месяцев');
console.log('бюджет на день ' + budgetDay);

if (budgetDay < 0) {
    console.log('что то пошло не так'); 
} else if(budgetDay <= 9) {
    console.log('У вас низкий уровень дохода ');
} else if ( budgetDay <= 19) {
    console.log('У вас средний уровень дохода ');
} else if (budgetDay >= 20) {
    console.log('У вас высокий уровень дохода');
};
