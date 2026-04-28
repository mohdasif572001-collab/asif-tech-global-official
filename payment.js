// ASIF TECH GLOBAL - PAYPAL LOGIC
function renderPayPal(price, title) {
    console.log("System: Starting PayPal for", title);
    
    const container = document.getElementById('paypal-button-container');
    if (!container) return;
    
    container.innerHTML = 'Loading PayPal...'; // Loading message

    // Agar PayPal SDK load hone mein time le raha ho
    if (typeof paypal === 'undefined') {
        container.innerHTML = '<p style="color:red;">PayPal not loaded. Check Internet.</p>';
        return;
    }

    container.innerHTML = ''; // Clear loading message

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
                alert('Success! Redirecting...');
                window.location.href = "vault.html"; 
            });
        }
    }).render('#paypal-button-container').catch(err => {
        console.error("PayPal Render Error:", err);
        container.innerHTML = "Error loading buttons.";
    });
}