let order = [];

function addToOrder(item, price) {
    order.push({ item, price });
    updateOrderList();
}

function updateOrderList() {
    const orderList = document.getElementById('order-list');
    const totalElement = document.getElementById('total');
    const orderCountElement = document.getElementById('order-count');
    orderList.innerHTML = '';
    let total = 0;

    order.forEach(orderItem => {
        const li = document.createElement('li');
        li.textContent = `${orderItem.item} - $${orderItem.price}`;
        orderList.appendChild(li);
        total += orderItem.price;
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
    orderCountElement.textContent = `(${order.length})`;
}

function submitOrder() {
    if (order.length === 0) {
        alert("Your order is empty!");
        return;
    }
    alert("Order submitted successfully!");
    order = [];
    updateOrderList();
}

function toggleOrderSummary() {
    const orderSummary = document.getElementById('order-summary');
    const toggleButton = document.getElementById('toggle-order-summary-btn');
    const isCollapsed = orderSummary.classList.toggle('collapsed');

    if (isCollapsed) {
        toggleButton.textContent = 'Show Orders';
    } else {
        toggleButton.textContent = 'Hide Orders';
    }
}

function filterMenu(category) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        if (item.classList.contains(category)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });

    // Update the title and description based on the selected category
    const title = document.getElementById('menu-title');
    const description = document.getElementById('menu-description');
    if (category === 'breakfast') {
        title.textContent = 'Breakfast';
        description.textContent = 'Start your day with our Delicious Breakfast menu.';
    } else if (category === 'lunch') {
        title.textContent = 'Lunch';
        description.textContent = 'Enjoy a hearty Lunch with our special dishes.';
    } else if (category === 'supper') {
        title.textContent = 'Supper';
        description.textContent = 'Light yet fulfilling Supper options for you.';
    } else if (category === 'dinner') {
        title.textContent = 'Dinner';
        description.textContent = 'End your day with a satisfying Dinner from our menu.';
    }
}
