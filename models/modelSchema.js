const express = require('express');
const mongoose = require('mongoose');



const ProductSchema = new mongoose.Schema({
    name:{
        type: String
    },
    color: {
        type: String
    },
    company: {
        type: String
    }
}, { versionKey: false });

const ProductModel = mongoose.model("products",ProductSchema);

module.exports = ProductModel;