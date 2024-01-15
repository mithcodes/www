// index.js

document.addEventListener("DOMContentLoaded", function () {
    const transactionForm = document.getElementById("transactionForm");
    const transactionList = document.getElementById("transactionList");
    const netAmountDisplay = document.getElementById("netAmount");
    const earningDisplay = document.getElementById("earning");
    const expenseDisplay = document.getElementById("expense");
    let balance = 0;
    let earning = 0;
    let expense = 0;
  
    // Handle form submission
    transactionForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const text = document.getElementById("text").value;
      const amount = parseFloat(document.getElementById("amount").value);
  
      if (!text || isNaN(amount)) {
        alert("Please enter valid text and amount.");
        return;
      }
  
      const transactionItem = document.createElement("div");
      transactionItem.classList.add("transaction");
  
      const left = document.createElement("div");
      left.classList.add("left");
      left.innerHTML = `
        <p>${text}</p>
        <p>${amount > 0 ? "+" : ""} Rs ${amount}</p>
      `;
      transactionItem.appendChild(left);
  
      const status = document.createElement("div");
      status.classList.add("status");
      status.classList.add(amount > 0 ? "credit" : "debit");
      status.innerText = amount > 0 ? "C" : "D";
      transactionItem.appendChild(status);
  
      transactionList.appendChild(transactionItem);
  
      balance += amount;
      if (amount > 0) {
        earning += amount;
      } else {
        expense += Math.abs(amount);
      }
  
      netAmountDisplay.innerText = `Rs ${balance}`;
      earningDisplay.innerText = `₹${earning}`;
      expenseDisplay.innerText = `₹${expense}`;
  
      // Reset form
      document.getElementById("text").value = "";
      document.getElementById("amount").value = "";
    });
  });
  