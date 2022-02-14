import db from '../db.js';

export async function sendMessage(req, res) {

    const clientMessage = req.body;

    try {

        await db.collection('messages').insertOne(clientMessage);

        res.sendStatus(201);

    } catch (error) {
        res.sendStatus(500)
    }

}