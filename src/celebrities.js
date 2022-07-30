import { connectdb } from "./connectdb.js";


export function getCeleb(req, res) {
    // connect to db
    const db = connectdb();
    // get all docs from celebs collection
    db.collection('celeb').get()
        .then(collection => {
             // reshape collection to array
             const celeb = collection.docs.map(doc => doc.data());
            // send array to response 
            res.send(celeb);
            })
    .catch(err => res.status(500).send(err))
}

export function createCeleb(req, res) {
    // get a new celebs from request body
    const newCeleb = req.body;
    // connect to database
    const db = connectdb();
    // add that to celebs collection
    db.collection('celeb').add(newCeleb)
        .then(doc => {
            res.status(201).send({
                success: true,
                id: doc.id
            })
        })
        .catch(err => handleError(err, res))
    // send back new doc id
}

function handleError(err, res) {
    console.error(err)
    res.status(500).send(err)
}