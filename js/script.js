'use strict';

const userNum = +prompt('Введите целое число');

for (let i = 2; i <= userNum; i++) {
    if (userNum % i === 0) {
        if (i === userNum) {
            console.log(userNum, 'true Число простое');
        } else {
            console.log(userNum, 'false Число НЕ простое');
            break;
        }
    }
}
