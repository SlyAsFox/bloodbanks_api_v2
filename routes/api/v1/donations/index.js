const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Donation, BloodBank } = require('../../../../models');

router.get('/', asyncHandler(async (req, res) => {
    const donations = await Donation.findAll();

    res.send(donations)
}));

router.post('/', asyncHandler(async (req, res) => {
    await Donation.create({
        ...req.body
    });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const animal = await Donation.update(req.body);

    res.send({
        data: animal
    })
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const animal = await Donation.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: animal
    })
}));

router.get('/:quantity/:group', asyncHandler(async (req, res) => {
    const donations = await Donation.findAll({
        where: {
            quantity: req.params.quantity,
            group: req.params.group
        }
    });

    res.send({
        data: donations
    })
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const donation = await Donation.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: donation
    })
}));

module.exports = router;
