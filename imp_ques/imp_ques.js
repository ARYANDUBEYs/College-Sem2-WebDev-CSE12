function checkNumber() {
    const num = parseInt(document.getElementById('userInput').value);
    const display = document.getElementById('result');

    if (isNaN(num)) {
        display.innerHTML = "Please enter a valid number.";
        return;
    }

    const isEven = num % 2 === 0 ? "Even" : "Odd";

    let isPrime = num > 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    const digits = num.toString().split('');
    const power = digits.length;
    const armstrongSum = digits.reduce((acc, d) => acc + Math.pow(parseInt(d), power), 0);
    const isArmstrong = armstrongSum === num;

    const sumTillN = (num * (num + 1)) / 2;

    display.innerHTML = `
        <p><strong>Type:</strong> ${isEven}</p>
        <p><strong>Prime:</strong> ${isPrime ? "Yes" : "No"}</p>
        <p><strong>Armstrong:</strong> ${isArmstrong ? "Yes" : "No"}</p>
        <p><strong>Sum (1 to ${num}):</strong> ${sumTillN}</p>
    `;
}