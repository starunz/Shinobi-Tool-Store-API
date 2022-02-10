import db from '../db.js';

export async function getProducts(req, res) {

    try {
        const products = await db.collection('products').find({}).toArray();

        if (!products) {
            return res.sendStatus(404);
        }

        res.status(200).send(products);

    } catch (error) {
        res.sendStatus(500);
    }

}