// payment.js
function renderPayPal(price, title) {
    document.getElementById('paypal-button-container').innerHTML = ''; 
    paypal.Buttons({
        style: { layout: 'vertical', color: 'gold', shape: 'rect' },
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    description: title,
                    amount: { currency_code: 'USD', value: price }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Success! Welcome, ' + details.payer.name.given_name);
                window.location.href = "vault.html"; 
            });
        }
    }).render('#paypal-button-container');
}