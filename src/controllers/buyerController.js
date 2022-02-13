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