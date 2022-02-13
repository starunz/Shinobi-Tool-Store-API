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
                userId: new ObjectId(user._id),
                products: [{
                    ...data,
                    productId: productId
                }]
            });

            await db.collection('products').updateOne({ _id: new ObjectId(productId) },
                {
                    $inc: { quantity: -1 }
                })

            return res.sendStatus(201)
        }

        const thisItem = await db.collection('carts').findOne({ userId: user._id, "products.productId": productId });

        if (thisItem) {
            return res.sendStatus(409);
        }

        await db.collection('carts').updateOne({ userId: user._id },
            {
                $push: {
                    products: {
                        ...data,
                        productId: productId
                    }
                }
            })

        await db.collection('products').updateOne({ _id: new ObjectId(productId) },
            {
                $inc: { quantity: -1 }
            })

        res.sendStatus(201);

    } catch (error) {
        res.sendStatus(500);
    }

}

export async function getCart(req, res) {

    const user = res.locals.user;

    try {

        const userCart = await db.collection('carts').findOne({ userId: user._id });

        if (!userCart) {
            return res.sendStatus(404)
        }

        res.send(userCart);

    } catch (error) {
        res.sendStatus(500);
    }

}

export async function updateQty(req, res) {

    const user = res.locals.user;
    const id = req.body.id;
    const newQty = req.body.qty;
    const qtyChange = req.body.change;

    try {

        const userCart = await db.collection('carts').findOne({ userId: user._id });

        if (!userCart) {
            return res.sendStatus(401)
        }

        await db.collection('carts').updateOne({ userId: user._id, "products.productId": id },
            {
                $set: { "products.$[elem].quantity": newQty }
            },
            { arrayFilters: [{ "elem.productId": id }] }

        )

        await db.collection('products').updateOne({ _id: new ObjectId(id) },
            {
                $inc: { quantity: -qtyChange }
            })

        res.sendStatus(200)

    } catch (error) {
        res.sendStatus(500)
    }

}

export async function deleteItem(req, res) {

    const { productId } = req.params;
    const user = res.locals.user;
    const qty = req.body.quantity;

    try {

        const thisItem = await db.collection('carts').findOne({ userId: user._id, "products.productId": productId });

        if (!thisItem) {
            return res.sendStatus(404);
        }

        await db.collection('products').updateOne({ _id: new ObjectId(productId) },
            { $inc: { quantity: qty } }
        )

        await db.collection('carts').deleteOne({ userId: user._id, "products.productId": productId });

        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500)
    }


}