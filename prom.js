// #10.1 Немного практики
// Создайте простой калькулятор Calc, который будет принимать значение a и значение b, а так же идентификатор нужного действия.
// Пример вызова такой функции
// Calc(‘sum’, 1, 2) - возвращает 3
// Calc(‘multi’, 1, 2) - возвращает 2
// И так далее, со всеми математическими действиями, которые вы изучили ранее
// Но и это еще не все.
// Ваш калькулятор должен возвращать сообщение “Error” в том случае если вы не указали все 3 параметра или если вычисляемые значения оказались не числами.
// В случае с неверным “идентификатором нужного действия” возвращайте “unknown operation”


// -----------------------------------------------------------------------------------------------------------------------------------------

function Calc(func, a, b) {
    // Делаем переменную что операнды а и b не являються числами
    let isNotValid = (typeof a !== 'number') || (typeof b !== 'number');
    // Запускаем проверку на то что а и b не являються числами, если true, запускается возврат 'Erorr'
    if (isNotValid) {
        return ('Erorr');
    }
    else if (func === 'sum') {
        return (a + b);
    }
    else if (func === 'sub') {
        return (a - b);
    }
    else if (func === 'multi') {
        return (a * b);
    }
    else if (func === 'div') {
        return (a / b);
    }
    else if (func === 'rem') {
        return (a % b);
    }
    else if (func === 'con') {
        return (a ** b);
    }
    return 'unknown operation';

}

console.log(Calc('sum', 40, 10));
console.log(Calc('sub', 100, 50));
console.log(Calc('multi', 5, 10));
console.log(Calc('div', 100, 2));
console.log(Calc('rem', 50, 100));
console.log(Calc('con', 2, 6));
console.log(Calc('non', 'non', 'non'));
console.log(Calc('', '', ''));
console.log(Calc());
console.log(Calc('fff', 5, 5));