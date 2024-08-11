import express from "express";
import mongoose from 'mongoose';
import passport from 'passport';
import cookieParser from 'cookie-parser';

import __dirname from './utils.js';
import CartsRouter from "./routes/carts.router.js";
import ProductsRouter from "./routes/products.router.js";
import SessionsRouter from "./routes/SessionsRouter.js";
import initializePassportConfig from './Config/passport.config.js';

const app = express();
const PORT = process.env.PORT||8080;
app.listen(PORT, ()=>console.log(`Listening on ${PORT}`));

const connection = mongoose.connect('mongodb+srv://CoderUser:123@clustersito.8qdga2u.mongodb.net/ENTREGA?retryWrites=true&w=majority&appName=Clustersito');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

initializePassportConfig();
app.use(passport.initialize());

app.use("/api/sessions",SessionsRouter);
app.use("/api/products",ProductsRouter);
app.use("/api/cart",CartsRouter)
