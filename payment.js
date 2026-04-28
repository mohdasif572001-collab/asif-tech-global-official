// ASIF TECH GLOBAL - PAYPAL INTEGRATION
function renderPayPal(price, title) {
    const container = document.getElementById('paypal-button-container');
    container.innerHTML = ''; 
    
    paypal.Buttons({
        style: {
            layout: 'vertical',
            color:  'gold',
            shape:  'rect',
            label:  'checkout'
        },
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    description: title,
                    amount: {
                        currency_code: 'USD',
                        value: price
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Transaction completed by ' + details.payer.name.given_name + '! Redirecting to Vault...');
                window.location.href = "vault.html"; 
            });
        }
    }).render('#paypal-button-container');
}