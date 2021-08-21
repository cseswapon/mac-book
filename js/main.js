// use to functio //

// memory cost //

function memoryCost(price)
{
    const memeoyCost = document.getElementById('memory-cost').innerText = price;
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const totalSum = parseFloat(memeoyCost) + parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(deliveryCost);
    document.getElementById("total-price").innerText = totalSum;
    document.getElementById('total').innerText = totalSum;
}

// storage //

function storage(price)
{
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText = price;
    const bestPrice = document.getElementById('best-price').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const totalSum = parseFloat(storageCost) + parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(deliveryCost);
    document.getElementById("total-price").innerText = totalSum;
    document.getElementById('total').innerText = totalSum;
}

// delivary //

function delivary(price)
{
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText = price;
    const totalSum = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCost);
    document.getElementById("total-price").innerText = totalSum;
    document.getElementById('total').innerText = totalSum;
}

// Extra memory cost //
document.getElementById('memory-8GB').addEventListener("click", function ()
{
    memoryCost(0);
})
document.getElementById('memory-16GB').addEventListener("click", function ()
{
    memoryCost(180);
})
// storage //
document.getElementById('storage-256').addEventListener("click", function ()
{
    storage(0);
})
document.getElementById('storage-512').addEventListener("click", function ()
{
    storage(100);
})
document.getElementById('storage-1TB').addEventListener("click", function ()
{
    storage(180);
})
// delivery section start //
document.getElementById('free-delivery').addEventListener('click', function ()
{
    delivary(0);
})
document.getElementById('charged-delivery').addEventListener('click', function ()
{
    delivary(20);
})
// promocode //
document.getElementById('submit').addEventListener("click", function ()
{
    const totalPrice = document.getElementById('total');
    const totalPriceValue = totalPrice.innerText;
    const promoBox = document.getElementById('promo-submit');
    const pormoBoxValue = promoBox.value;
    if (pormoBoxValue == "stevekaku") {
        const discount = totalPriceValue * 0.2;
        const price = totalPriceValue - discount;
        totalPrice.innerText = price.toFixed(2);
        document.getElementById('submit').setAttribute('disabled', true);
        document.getElementById('worng-promo').style.visibility = "hidden";
        promoBox.value = '';
    } else {
        document.getElementById('worng-promo').style.visibility = "visible";
        promoBox.value = '';
    }
})