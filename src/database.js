const mongoose = require("mongoose");
const app = mongoose.connection;
const dotenv = require("dotenv").config()

const connect = async () => {
    return await mongoose.connect(`${process.env.MONGOURL}` /*{useNewUrlParser: true}*/);
}

mongoose.set('strictQuery', false)
app.on("error", () => mongoose.disconnect());

app.on("disconnected", async () => await connect());

(async () => await connect())();