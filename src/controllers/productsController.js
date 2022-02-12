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

export async function addToCart(req, res) {

    const { productId } = req.params;
    const data = req.body;
    const user = res.locals.user;

    try {

        const userCart = await db.collection('carts').findOne({ userId: user._id });

        if (!userCart) {
            await db.collection('carts').insertOne({
                userId: user._id,
                products: [{
                    ...data,
                    productId: productId
                }]
            });
            return res.sendStatus(201)
        }

        await db.collection('carts').updateOne({ userId: user._id },
            {
                $set: {
                    products: [{
                        ...userCart.products
                    },
                    {
                        ...data,
                        productId: productId
                    }]
                }
            })

        res.sendStatus(201);

    } catch (error) {
        res.sendStatus(500);
    }

}