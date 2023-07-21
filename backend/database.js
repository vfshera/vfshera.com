import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DBUSER,
  process.env.DBPASS,
  {
    host: process.env.DBHOST,
    dialect: "mysql",
  }
);

const Contact = sequelize.define(
  "Contact",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    sent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "contacts",
    timestamps: false,
  }
);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export { sequelize, Contact };
