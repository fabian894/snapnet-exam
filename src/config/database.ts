import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    database: 'inventory_db',
    username: 'root',
    password: 'fabian894',
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
});

export default sequelize