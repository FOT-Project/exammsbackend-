import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import dotenv from 'dotenv';
import { Sequelize, DataTypes } from 'sequelize';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = {};
const basename = path.basename(__filename);

// Setup Sequelize using env vars...
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT || 'mysql',
    }
);

// Dynamically import all models
const files = fs.readdirSync(__dirname).filter(file =>
    file !== basename && file.endsWith('.js') && !file.endsWith('.test.js')
);

for (const file of files) {
    const filePath = path.join(__dirname, file);
    const { default: modelDef } = await import(pathToFileURL(filePath).href);
    const model = modelDef(sequelize, DataTypes);
    db[model.name] = model;
}

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
