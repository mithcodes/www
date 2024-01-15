// script.js

const itemSelect = document.getElementById('item');
const quantityInput = document.getElementById('quantity');
const addOrderButton = document.getElementById('addOrderButton');
const orderTableBody = document.getElementById('orderTableBody');

// Function to make a GET request using Axios
async function fetchData() {
    try {
        const response = await axios.get('https://crudcrud.com/api/f6873df425d24a359e72083c9628d731/appointdata');
        const data = response.data;
        // Assuming the data is an array of objects with properties like item, quantity, and price
        data.forEach((orderData) => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${orderData.item}</td>
                <td>${orderData.quantity}</td>
                <td>${orderData.price}</td>
            `;
            orderTableBody.appendChild(newRow);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the fetchData function when the page loads
window.addEventListener('load', fetchData);

addOrderButton.addEventListener('click', () => {
    const item = itemSelect.value;
    const quantity = parseInt(quantityInput.value);
    const price = calculatePrice(item, quantity);

    // Create a new row for the order and append it to the table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${item}</td>
        <td>${quantity}</td>
        <td>$${price.toFixed(2)}</td>
    `;
    orderTableBody.appendChild(newRow);

    // Clear the input fields
    itemSelect.value = 'item1';
    quantityInput.value = '1';
});

// Function to calculate the price based on the selected item and quantity
function calculatePrice(item, quantity) {
    // Add your price calculation logic here (e.g., fetch price from an API)
    // For simplicity, let's assume a fixed price for each item
    const itemPrices = {
        item1: 5.99,
        item2: 7.99,
        item3: 9.99,
    };

    return itemPrices[item] * quantity;
}
