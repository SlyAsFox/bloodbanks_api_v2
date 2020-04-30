const models = {
    User: require('./User'),
    Animal: require('./Animal'),
    Clinic: require('./Clinic'),
    Staff: require('./Staff'),
    Donation: require('./Donation'),
    BloodRequest: require('./BloodRequest'),
    BloodBank: require('./BloodBank'),
    MedicalCheck: require('./MedicalCheck')
};

const modelNames = Object.keys(models);

modelNames.forEach( (modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

module.exports = models;
