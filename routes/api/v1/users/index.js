const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { User, Animal } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const users = await User.findAll();

    res.send(users)
}));

router.post('/', asyncHandler(async (req, res) => {
    await User.create({
        ...req.body
    });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const animal = await User.update(req.body);

    res.send({
        data: animal
    })
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const animal = await User.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: animal
    })
}));

// router.get('/:email/:manyAnimals', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             email: req.params.email
//         }
//     });
//
//     const animals = await Animal.findAll({
//         where: {
//             userId: user.id
//         }
//     });
//
//     res.send({
//         data: ( animals.length > 1 ) ? user : []
//     })
// }));
//
// //post
// router.get('/create', asyncHandler(async (req, res) => {
//     const user = await User.create({
//         fullName: faker.name.findName(),
//         sex: 'male',
//         address: faker.address.city(),
//         birth: faker.date.past(10, '2000-01-01'),
//         phone: fakerByFox.phone('ua'),
//         email: faker.internet.email(),
//         password: faker.internet.password(8)
//     });
//
//     res.send({
//         data: user
//     })
// }));
//
//
//
// //TODO: return deleted object
// router.get('/:id', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             id: req.params.id
//         }
//     });
//
//     res.send({
//         data: user
//     })
// }));



module.exports = router;
