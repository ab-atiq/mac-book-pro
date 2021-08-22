// cost updating function 
function extraCost(accessories, price, button) {
    document.getElementById(button).addEventListener('click', function () {
        const extraMemory = document.getElementById('extra-' + accessories + '-cost');
        extraMemory.innerText = price;
        totalPrice();
    });
}

// final price calculating function
function totalPrice() {
    const BestPrice = document.getElementById('best-price').innerText;
    const ExtraMemoryCost = document.getElementById('extra-memory-cost').innerText;
    const ExtraStorageCost = document.getElementById('extra-storage-cost').innerText;
    const DeliveryCharge = document.getElementById('extra-delivery-cost').innerText;
    const totalCost = parseInt(BestPrice) + parseInt(ExtraMemoryCost) + parseInt(ExtraStorageCost) + parseInt(DeliveryCharge);
    console.log(totalCost);
    document.getElementById('total-price').innerText = totalCost;
    document.getElementById('total').innerText = totalCost;
}

//calling functions
extraCost('memory', 0, '8gb-memory');
extraCost('memory', 180, '16gb-memory');
extraCost('storage', 0, '256gb-storage');
extraCost('storage', 100, '512gb-storage');
extraCost('storage', 180, '1tb-storage');
extraCost('delivery', 0, 'delivery-free');
extraCost('delivery', 20, 'delivery-charge');

// dicount price function
function myFunction() {
    const promoInput = document.getElementById('promo-input');
    let promoInputValue = promoInput.value;
    if (promoInputValue == 'stevekaku') {
        const totalPrice = document.getElementById('total-price').innerText;
        const discountPrice = totalPrice - (totalPrice * 0.2);
        document.getElementById('total').innerText = discountPrice;
    }
    promoInput.value = '';
}