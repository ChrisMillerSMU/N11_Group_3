const express = require('express');


const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());



router.get('/', async (req, res, next) => {
    if (req.query.name) {
        const athleteByName = await req.models.athlete.fetchathleteByName(req.query.name);
        res.json(athleteByName);
        next();
    } else {
        const allathletes = await req.models.athlete.fetchallathletes();
        res.json(allathletes);
        next();
    }
 });


 router.post('/', async (req, res, next) => {
    const createathlete = await req.models.athlete.createathlete(req.body);
    res.status(201).json(createathlete);
    next();
 });


//needs work
//  router.delete('/', async (req, res, next) => {
//     const deleteathlete = await req.models.athlete.deleteathlete(req.body.name);
//     res.status(204).end();
//     next();
//  });

module.exports = router;