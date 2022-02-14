import db from '../db.js';

export async function sendInfos(req, res) {

    const userInfos = req.body;
    const user = res.locals.user;

    try {

        const userInfosObject = { ...userInfos, userId: user._id };

        await db.collection('infos').insertOne(userInfosObject);

        res.sendStatus(200)

    } catch (error) {
        res.sendStatus(500)
    }

}

export async function checkout(req, res) {
    const user = res.locals.user;

    try {
        const userCart = await db
        .collection('carts')
        .findOne({ userId: user._id });

        if(!userCart)  return res.sendStatus(401)

        const userInfos = await db
        .collection('infos')
        .findOne({ userId: user._id });

        if(!userInfos)  return res.sendStatus(401)

        const Order = {
            userCart, 
            userInfos
        }
        res.status(200).send(Order);
    } catch (error) {
        res.sendStatus(500)
    }
}

export async function confirmOrder(req, res) {
    const user = res.locals.user;
    const InfosOrder = req.body 

    try {
        await db 
        .collection('checkout')
        .insertOne({...InfosOrder, userId: user._id })

        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500);
    }
}