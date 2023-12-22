const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.clientSecret = async (req, res) => {
    try {
        const { paymentMethodId, customerId, priceId } = req.body
        const intent = await stripe.paymentIntents.create({
            amount: 500 * 100,
            currency: 'inr',
            automatic_payment_methods: {
                enabled: true,
            },
        });

        return ({ client_secret: intent.client_secret });
    } catch (error) {
        return error.message
    }
}