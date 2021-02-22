const phnPlusBtn = document.getElementById('phnPlusBtn');
phnPlusBtn.addEventListener('click',function() {
    const current = document.getElementById('phone').value;
    const currentValue = parseFloat(current);
    const total = currentValue + 1;
    document.getElementById('phone').value = total;
})
const phnMinusBtn = document.getElementById('phnMinusBtn');
phnMinusBtn.addEventListener('click',function() {
    const current = document.getElementById('phone').value;
    const currentValue = parseFloat(current);
    const total = currentValue - 1;
    if (total>0) {
        document.getElementById('phone').value = total;   
    }
    else{
        document.getElementById('phone').value = 0;
    }
})
const casPlusBtn = document.getElementById('casPlusBtn');
casPlusBtn.addEventListener('click',function() {
    const current = document.getElementById('casing').value;
    const currentValue = parseFloat(current);
    const total = currentValue + 1;
    document.getElementById('casing').value = total;
})
const casMinusBtn = document.getElementById('casMinusBtn');
casMinusBtn.addEventListener('click',function() {
    const current = document.getElementById('casing').value;
    const currentValue = parseFloat(current);
    const total = currentValue - 1;
    if (total>0) {
        document.getElementById('casing').value = total;   
    }
    else{
        document.getElementById('casing').value = 0;
    }
})