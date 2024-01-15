const submit = document.getElementById('submit');
const product = document.getElementById('product');
const price = document.getElementById('price');
const productList = document.getElementById('productList');
const totalprice = document.getElementById('totalprice');

let total = 0;


document.addEventListener('DOMContentLoaded', async ()=> {
    try {
        const response = await axios.get('https://crudcrud.com/api/3b16c628026c4c0faefeb7209670403f/mentdata');
        const existingData = response.data;
        displayData(existingData);
    } catch (error) {
        console.error('Error fetching existing data:', error);
    }
});

submit.addEventListener('click', async ()=> {
    try {
        const dataList = {
            product: product.value,
            price: parseFloat(price.value),
        };

        const response = await axios.post('https://crudcrud.com/api/3b16c628026c4c0faefeb7209670403f/mentdata', dataList);
        console.log('Data submitted successfully:', response.data);

        dataList._id = response.data._id;
        displayProduct(dataList);
        total += dataList.price;
        updatePrice();
    } catch (error) {
        console.error('Error submitting data:', error);
    }
});

function displayData(data) {
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        displayProduct(item);
        total += parseFloat(item.price);
        updatePrice();
    }
}

function displayProduct(item) {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.product} ===> ${item.price}    `;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';

    listItem.appendChild(removeButton);
    productList.appendChild(listItem);

    removeButton.addEventListener('click', async function () {
        const listItemToRemove = this.parentNode;
        productList.removeChild(listItemToRemove);
        total -= parseFloat(item.price);
        updatePrice();

        if (item._id) {
            try {
                await deleteUserData(item._id);
            } catch (error) {
                console.error('Error deleting data:', error);
            }
        }
    });
}

function updatePrice() {
    totalprice.textContent = `₹${total}`;
}

async function deleteUserData(userId) {
    try {
        const response = await axios.delete(`https://crudcrud.com/api/3b16c628026c4c0faefeb7209670403f/mentdata/${userId}`);
        console.log('Data deleted successfully:', response.data);
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}

