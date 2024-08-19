// Function to print numbers from 1 to 10
function printNumbers() {
    for (let i = 1; i <= 10; i++) {  
        console.log("Giá trị từ 1-10:", i);
    }
}

// Function to print odd numbers less than 100
function printOddNumbers() {
    for (let i = 1; i < 100; i += 2) {
        console.log("Giá trị lẻ nhỏ hơn 100: ", i);
    }
}

// Function to print the multiplication table with 7
const printMultiplicationTable7 = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(`7 x ${i} = ${7 * i}`);
    }
}

// Function to print all the multiplication tables from 1 to 10
function printTable1To10() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}

// 5. Calculate the sum of numbers from 1 to 10
function chkSum() {
    let sum = 0;
    for(let i = 1; i <= 10; i++) {
        sum += i;
    }
    console.log("Tổng từ 1 đến 10 là:", sum);
}

// 6. Calculate 10!
function luyThua() {
    let fact = 1;
    for(let i = 1; i <= 10; i++) {
        fact *= i;
    }
    console.log("10! =", fact);
}

// 7. Calculate the sum of even numbers greater than 10 and less than 30 
function evenNumbers() {
    let sum = 0;
    for(let i = 12; i < 30; i += 2) {
        sum += i;
    }
    console.log("Tổng các số chẵn từ 12 đến 28 là:", sum);
}

// 8. Convert from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// 9. Convert from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// 10. Calculate the sum of numbers in an array of numbers 
function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log("Tổng của mảng:", sumArray(numbers));

// 11. Calculate the average of the numbers in an array of numbers
function averageArray(arr) {
    let sum = sumArray(arr);
    return sum / arr.length;
}
console.log("Trung bình cộng của mảng:", averageArray(numbers));

// Gọi các hàm
printNumbers();
printOddNumbers();
printMultiplicationTable7();
printTable1To10();
chkSum();
luyThua();
evenNumbers();


// Kiểm tra chuyển đổi nhiệt độ
console.log("100 độ C bằng bao nhiêu độ F:", celsiusToFahrenheit(100));
console.log("212 độ F bằng bao nhiêu độ C:", fahrenheitToCelsius(212));
