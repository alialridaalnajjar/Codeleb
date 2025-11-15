import sequelize from "./db";

async function connectToNeon() {
  try {
    await sequelize.authenticate();
    console.log("Connection successful");
  } catch (error) {
    console.error("Unable to connect :", error);
  }
}

connectToNeon();
