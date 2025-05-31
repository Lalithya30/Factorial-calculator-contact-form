document.getElementById("factorialForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const number = parseInt(document.getElementById("number").value);
  const method = document.getElementById("method").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(number) || number < 0) {
    resultDiv.innerText = "Please enter a valid non-negative integer.";
    return;
  }

  let result;
  if (method === "iterative") {
    result = factorialIterative(number);
  } else {
    result = factorialRecursive(number);
  }

  resultDiv.innerText = `Factorial of ${number} using ${method} method is: ${result}`;
});

function factorialIterative(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

function factorialRecursive(n) {
  if (n <= 1) return 1;
  return n * factorialRecursive(n - 1);
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const contactResult = document.getElementById("contactResult");

  if (!name || !email || !message) {
    contactResult.innerText = "All fields are required.";
    return;
  }

  if (!validateEmail(email)) {
    contactResult.innerText = "Please enter a valid email address.";
    return;
  }

  contactResult.innerText = "Message sent successfully (simulation).";
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}