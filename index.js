
//1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0, 5(20 20, 5 21 21, 5….).
for (let i = 20; i <= 30; i = i + 0.5) {
    console.log(i);
};

//2. Один долар коштує 27 гривень.Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
for (let i = 10; i <= 100; i = i + 10) {
    const dol = 27;
    console.log(dol * i);
};

//3. Дане ціле число.Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
const num = prompt('Enter your number');
for (let i = 1; i <= 10; i++) {
    if (i * i <= num) {
        console.log(i);
    };
};

//4. Дане ціле число.З'ясувати, чи є воно простим (простим називається число, більше 1,
//   які не мають інших дільників крім 1 і себе).
const n = 19;
for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        console.log('Не просте');
        break;
    } else {
        console.log('Просте');
        break;
    };
};


//5. Дане деяке число.Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.
//  (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

const x = 3;
let z = '';
for (let i = 1; i < x; i++) {
    let n = 0;
    if (3 ** i === x) {
        z = 'yes';
        console.log(z);
    } else if (3 ** i < x) {
        n = 3 ** i;
    };
};
z != 'yes' ? console.log('no') : false;
