import { ObjectId } from 'mongodb';
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

export async function getProduct(req, res) {

    const { productId } = req.params;

    try {

        const product = await db.collection('products').find({ _id: new ObjectId(productId) }).toArray();

        if (!product) {
            return res.sendStatus(404);
        }

        res.send(product);

    } catch (error) {
        res.sendStatus(500);
    }

}