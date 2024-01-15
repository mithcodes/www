const submit = document.getElementById('submit');
const product = document.getElementById('product');
const price = document.getElementById('price');
const productList = document.getElementById('productList');
let total = 0;
const totalprice = document.getElementById('totalprice');

document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await axios.get('https://crudcrud.com/api/69f1661f6eff4b7b99e1f252dfe47c68/mentdata');
        const existingData = response.data;
        displayData(existingData);

        const response2 = await axios.get('https://crudcrud.com/api/e9099abded7e437bb5876d63985f816b/mentdata');
        const existingData2 = response2.data;
        displayData(existingData2);

    } catch (error) {
        console.error('Error while fetching data:', error);
    }
});

submit.addEventListener('click', async function () {
    const dataList = {
        product: product.value,
        price: parseFloat(price.value),
    };

    try {
        
        const response = await axios.post('https://crudcrud.com/api/69f1661f6eff4b7b99e1f252dfe47c68/mentdata', dataList);
        console.log('Data submitted successfully:', response.data);
        dataList._id = response.data._id;
        displayProduct(dataList);
        total += dataList.price;
        updatePrice();

        
         const response2 = await axios.post('https://crudcrud.com/api/e9099abded7e437bb5876d63985f816b/mentdata', { product: 'Another Product', price: 25 });
         console.log('Second data submitted successfully:', response2.data);

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
    listItem.textContent = `${item.product} ===> ₹${item.price}`;

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
    totalprice.textContent = `₹${total.toFixed(2)}`;
}

async function deleteUserData(userId) {
    try {
        const response = await axios.delete(`https://crudcrud.com/api/69f1661f6eff4b7b99e1f252dfe47c68/mentdata/${userId}`);
        console.log('Data deleted successfully:', response.data);
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}
