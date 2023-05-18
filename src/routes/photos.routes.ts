import { PhotoBody } from './../models/photo.dto';
import { Router } from "express";
import { deletePhoto, getAllPhotos, getPhoto, postPhoto } from "../controllers/photos.controller";
import { createValidator } from "express-joi-validation";
import upload from '../middlewares/upload';

const router = Router()
const validator = createValidator()

router.get('/', getAllPhotos)
router.get('/:id', getPhoto)
router.delete('/:id', deletePhoto)

router.post('/', validator.fields(PhotoBody), upload.single('photo'), postPhoto)

export default router