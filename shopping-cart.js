const phnPlusBtn = document.getElementById('phnPlusBtn');
phnPlusBtn.addEventListener('click',function() {
    const current = document.getElementById('phone').value;
    const currentValue = parseFloat(current);
    const total = currentValue + 1;
    document.getElementById('phone').value = total;
    const phoneRate = document.getElementById('phoneRate').innerText;
    const phoneCost = parseInt(phoneRate);
    const phoneAmount = 1219 + phoneCost;
    document.getElementById('phoneRate').innerText = phoneAmount;

})
const phnMinusBtn = document.getElementById('phnMinusBtn');
phnMinusBtn.addEventListener('click',function() {
    const current = document.getElementById('phone').value;
    const currentValue = parseFloat(current);
    const total = currentValue - 1;
    if (total>0) {
        document.getElementById('phone').value = total;   
        const phoneRate = document.getElementById('phoneRate').innerText;
        const phoneCost = parseFloat(phoneRate);
        const phoneAmount = phoneCost-1219;
        document.getElementById('phoneRate').innerText = phoneAmount;
    }
    else{
        document.getElementById('phone').value = 0;
        document.getElementById('phoneRate').innerText = 0;
    }
    
})
const casPlusBtn = document.getElementById('casPlusBtn');
casPlusBtn.addEventListener('click',function() {
    const current = document.getElementById('casing').value;
    const currentValue = parseFloat(current);
    const total = currentValue + 1;
    document.getElementById('casing').value = total;
    const casingRate = document.getElementById('casingRate').innerText;
    const casingCost = parseFloat(casingRate);
    const casingAmount = 59 + casingCost;
    document.getElementById('casingRate').innerText = casingAmount;  
    

})
const casMinusBtn = document.getElementById('casMinusBtn');
casMinusBtn.addEventListener('click',function() {
    const current = document.getElementById('casing').value;
    const currentValue = parseFloat(current);
    const total = currentValue - 1;
    if (total>0) {
        document.getElementById('casing').value = total;
        const casingRate = document.getElementById('casingRate').innerText;
        const casingCost = parseFloat(casingRate);
        const casingAmount = casingCost-59;
        document.getElementById('casingRate').innerText = casingAmount;
    }
    else{
        document.getElementById('casing').value = 0;
        document.getElementById('casingRate').innerText = 0;
    }
})
const checkOut = document.getElementById('checkOut');
checkOut.addEventListener('click', function() {
    const x = document.getElementById('phoneRate').innerText;
    const phoneAmount = parseFloat(x);
    const y = document.getElementById('casingRate').innerText;
    const casingAmount = parseFloat(y);
    
    const subTotal = phoneAmount + casingAmount;
    document.getElementById('subTotal').innerText = subTotal;

    const a = document.getElementById('tax').innerText;
    const tax = parseFloat(a);
    const total = subTotal + tax;
    document.getElementById('total').innerText = total;
})