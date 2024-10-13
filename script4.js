const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

currencyEl_one.addEventListener('change', caclulate);
amountEl_one.addEventListener('input', caclulate);
currencyEl_two.addEventListener('change', caclulate);
amountEl_two.addEventListener('input', caclulate);


function caclulate(){
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    console.log("clicked");

    fetch(`https://v6.exchangerate-api.com/v6/5f10569823b36a0ab7487786/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(data.conversion_rates[currency_two]);
            const rate = data.conversion_rates[currency_two];
            
            let number =  amountEl_one.value
            let total = (rate*number)

            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`
             
            amountEl_two.value = (total).toFixed(2)
            

        })

}
caclulate()