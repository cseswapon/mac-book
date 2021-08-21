// use to function //

// memory cost function //

function memoryCost(price)
{
    const memeoyCost = document.getElementById('memory-cost').innerText = price; // memory cost value catch
    const bestPrice = document.getElementById('best-price').innerText; // best price value catch
    const memoryCost = document.getElementById('storage-cost').innerText; // storage cost value catch
    const deliveryCost = document.getElementById('delivery-cost').innerText; // delivery cost catch
    const totalSum = parseFloat(memeoyCost) + parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(deliveryCost); // // total price sumation (best,memory,storage,delivery)
    document.getElementById("total-price").innerText = totalSum; // total price value
    document.getElementById('total').innerText = totalSum; // under total value
}

// storage cost  function //

function storage(price)
{
    const memoryCost = document.getElementById('memory-cost').innerText; // memory cost catch
    const storageCost = document.getElementById('storage-cost').innerText = price; // storage cost catch value
    const bestPrice = document.getElementById('best-price').innerText; // best price catch value
    const deliveryCost = document.getElementById('delivery-cost').innerText; // delivery cost catch value
    const totalSum = parseFloat(storageCost) + parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(deliveryCost); // total price sumation(best, memory, storage, delivery)
    document.getElementById("total-price").innerText = totalSum; // total price value
    document.getElementById('total').innerText = totalSum; // under total value
}

// delivary cost function //

function delivary(price)
{
    const bestPrice = document.getElementById('best-price').innerText; // best price catch value
    const memoryCost = document.getElementById('memory-cost').innerText; // memory cost catch value
    const storageCost = document.getElementById('storage-cost').innerText; // storage cost catch value
    const deliveryCost = document.getElementById('delivery-cost').innerText = price; // delivery cost catch value
    const totalSum = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCost); // total price sumation (best,memory,storage,delivery)
    document.getElementById("total-price").innerText = totalSum; // total sumation value
    document.getElementById('total').innerText = totalSum;  // under total cost value 
}

// Extra memory cost //

document.getElementById('memory-8GB').addEventListener("click", function ()
{
    memoryCost(0); // 8GB memory function call
})
document.getElementById('memory-16GB').addEventListener("click", function ()
{
    memoryCost(180); // 16GB memory function call
})

// storage //

document.getElementById('storage-256').addEventListener("click", function ()
{
    storage(0); // storage-256 function call
})
document.getElementById('storage-512').addEventListener("click", function ()
{
    storage(100); // storage-512 function call
})
document.getElementById('storage-1TB').addEventListener("click", function ()
{
    storage(180); // sotrage-1TB function call
})

// delivery section start //

document.getElementById('free-delivery').addEventListener('click', function ()
{
    delivary(0); // free-delivery function call
})
document.getElementById('charged-delivery').addEventListener('click', function ()
{
    delivary(20); // charge-delivery function call
})

// promocode " stevekaku " //

document.getElementById('submit').addEventListener("click", function ()
{
    const totalPrice = document.getElementById('total'); // display total value
    const totalPriceValue = totalPrice.innerText;
    const promoBox = document.getElementById('promo-submit'); // input probo code
    const pormoBoxValue = promoBox.value;
    if (pormoBoxValue == "stevekaku") { // set promocode =======> "stevekaku"
        const discount = totalPriceValue * 0.2; // total price 20% discunt
        const price = totalPriceValue - discount;
        totalPrice.innerText = price.toFixed(2); // total price
        document.getElementById('submit').setAttribute('disabled', true); // button disable
        document.getElementById('worng-promo').style.visibility = "hidden"; // worng message hidden
        promoBox.value = ''; // empty stng or null input box
    } else {
        document.getElementById('worng-promo').style.visibility = "visible"; // worng message visible
        promoBox.value = ''; // empty stng or null input box
    }
})