import mongoose from "mongoose";

mongoose.connect("mongodb+srv://eliasbragga44:123@cluster0.9kdpprn.mongodb.net/alura-node");

let db = mongoose.connection

export default db