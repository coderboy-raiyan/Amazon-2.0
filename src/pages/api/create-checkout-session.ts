import type { NextApiRequest, NextApiResponse } from "next";

const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { items, email } = req.body;
        // eslint-disable-next-line no-undef
        const modifiedItems = items.map((item: IProduct) => ({
            description: item.description,
            quantity: item.quantity,
            price_data: {
                currency: "usd",
                unit_amount: item.price * 100,
                product_data: {
                    name: item.title,
                    images: [item.image],
                },
            },
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            shipping_rates: ["shr_1LgnMOB9jksQQfHL4XGfAXQS"],
            shipping_address_collection: {
                allowed_countries: ["US", "BD", "CA"],
            },
            line_items: modifiedItems,
            mode: "payment",
            success_url: `${process.env.HOST}/success`,
            cancel_url: `${process.env.HOST}/checkout`,
            metadata: {
                email,
                // eslint-disable-next-line no-undef
                images: JSON.stringify(items.map((item: IProduct) => item.image)),
            },
        });

        res.status(200).json({ id: session.id });
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message });
    }
};
