import express from 'express';
import { addproperty, listproperty, removeproperty, updateproperty, singleproperty } from '../controller/productController.js';
import upload from '../middleware/multer.js';

const propertyrouter = express.Router();

const imageUploadFields = [
    { name: "image1", maxCount: 1 }, { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 }, { name: "image4", maxCount: 1 },
    { name: "image5", maxCount: 1 }, { name: "image6", maxCount: 1 },
    { name: "image7", maxCount: 1 }, { name: "image8", maxCount: 1 },
];

propertyrouter.post('/add', upload.fields(imageUploadFields), addproperty);
propertyrouter.get('/list', listproperty);
propertyrouter.post('/remove', removeproperty);
propertyrouter.post('/update', upload.fields(imageUploadFields), updateproperty);
propertyrouter.get('/single/:id', singleproperty);

export default propertyrouter;