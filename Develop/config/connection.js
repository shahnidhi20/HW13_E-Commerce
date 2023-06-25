const Sequelize = require("sequelize");
const test = require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  console.log("Config", test);

  console.log(`${process.env.DB_NAME} ${process.env.DB_NAME}`);
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: "localhost",
//       dialect: "mysql",
//       port: 3306,
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });

module.exports = sequelize;
