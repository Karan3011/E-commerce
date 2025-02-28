import express from 'express';
import data from './data';
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';

dotenv.config();
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).catch(error => console.log(error.reason));
const app = express();

app.use("/api/users", userRoute);

app.get("/api/products/:id", (req, res ) => {
    const productID = req.params.id;
    const product = data.products.find(x=>x._id === productID);
    if (product)
        res.send(product);
    else
        res.status(404).send({msg: "Product Not Found."})    
});

app.get("/api/products", (req, res ) => {

    res.send(data.products);
});

app.listen(4000, () => {console.log("Server started at http://localhost:4000")});
