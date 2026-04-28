// ASIF TECH GLOBAL - PAYPAL INTEGRATION
function renderPayPal(price, title) {
    console.log("Paypal function called for:", title, "Price:", price);
    
    const container = document.getElementById('paypal-button-container');
    if (!container) {
        console.error("Error: paypal-button-container not found in HTML!");
        return;
    }
    
    container.innerHTML = ''; // Purana button clear karein

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
                alert('Success! Redirecting to Vault...');
                window.location.href = "vault.html"; 
            });
        },
        onError: function(err) {
            console.error("PayPal Execution Error:", err);
            alert("PayPal load nahi ho pa raha. Check your Client ID.");
        }
    }).render('#paypal-button-container');
}