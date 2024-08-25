const axios = require('axios'); // Ensure axios is imported

module.exports = {
    Add: async (req, res) => {
        try {
            const url = 'https://api.preprod.konnect.network/api/v2/payments/init-payment';
            const payload = {
                receiverWalletId: '66cb54542a3dbe14750490f8',
                token: 'TND',
                amount: req.body.amount * 1000, // Convert to millimes
                type: 'immediate',
                description: 'Payment description',
                acceptedPaymentMethods: ["wallet", "bank_card", "e-DINAR"],
                lifespan: 10,
                checkoutForm: true,
                addPaymentFeesToAmount: false,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email,
                orderId: req.body.orderId,
                webhook: 'https://yourwebhookurl.com/api/notification_payment',
                silentWebhook: true,
                successUrl: 'http://localhost:3000/success',
                failUrl: 'http://localhost:3000/fail',
                theme: 'light'
            };

            // Use await for the axios post call
            const result = await axios.post(url, payload, {
                headers: {
                    'x-api-key': '66cb54542a3dbe14750490f2:HGLwT4eylJMyLAbCxu',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            // Send response data back to the client
            res.send(result.data);

        } catch (error) {
            // Handle any potential errors
            console.error(error);
            res.status(500).send('Internal Server Error: ' + error.message);
        }
    },

    Verify: async (req, res) => {
        try {
            const paymentRef = req.params.id;  
            const url = `https://api.preprod.konnect.network/api/v2/payments/${paymentRef}`;
            const result = await axios.get(url, {
                headers: {
                    'x-api-key': '66cb54542a3dbe14750490f2:ZSfJnZTn0tyhVSCHYTcaR9EVpR',
                }
            });

            // Send response data back to the client
            res.send(result.data);

        } catch (error) {
            // Handle any potential errors
            console.error(error);
            res.status(500).send('Internal Server Error: ' + error.message);
        }
    }
};
