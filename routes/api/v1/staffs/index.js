const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Staff } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const staff = await Staff.findAll();

    res.send(staff)
}));

router.post('/', asyncHandler(async (req, res) => {
    await Staff.create({
        ...req.body
    });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const animal = await Staff.update(req.body);

    res.send({
        data: animal
    })
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const animal = await Staff.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: animal
    })
}));

router.get('/:position/:gender', asyncHandler(async (req, res) => {
    const staff = await Staff.findAll({
        where: {
            sex: req.params.gender,
            position: req.params.position
        }
    });

    res.send({
        data: staff
    })
}));

//post
// router.get('/create', asyncHandler(async (req, res) => {
//     const staff = await Staff.create({
//         clinicId: 1,
//         fullName: faker.name.findName(),
//         position: 'doctor',
//         birth: faker.date.past(10, '2000-01-01'),
//         phone: '+38 063 385 98 77',
//         sex: `male`,
//         address: 'Україна, Вінниця, вул. Пирогова',
//         email: faker.internet.email()
//     });
//
//     res.send({
//         data: staff
//     })
// }));
//
// router.get('/:id', asyncHandler(async (req, res) => {
//     const staff = await Staff.findOne({
//         where: {
//             id: req.params.id
//         }
//     });
//
//     res.send({
//         data: staff
//     })
// }));

module.exports = router;

