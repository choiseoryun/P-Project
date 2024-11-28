const Sequelize = require("sequelize");
const User = require('./tables/user');
const { development, production } = require("../config/sequlizeConfig")

const db = Sequelize;
const config = development;
const sequelize = new Sequelize(config.database, config.username, config.password, config);


db.sequelize = sequelize;
db.user = User; 
User.init(sequelize);


const dbConnect = () => {
    return sequelize
        .sync({
        })
        .then(() => {
            console.log('Databases SYNC COMPLETED!!');
        })
        .catch(err => {
            throw err;
        });
}

module.exports = { dbConnect, db };