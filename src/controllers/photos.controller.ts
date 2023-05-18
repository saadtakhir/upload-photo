import { PhotoDto } from '../models/photo.dto';
import { Request, Response } from "express";
import { createPhoto, findAllPhotos, findPhotoById, removePhoto } from "../services/photos.service";

export async function getAllPhotos(req: Request, res: Response) {
    
    const photos = await findAllPhotos()

    res.status(200).json({
        message: "All Photos",
        photos
    })
}

export async function getPhoto(req: Request, res: Response) {
    const photo = await findPhotoById(+req.params.id)

    if (photo) {
        res.status(200).json({
            message: "Retrive photo",
            photo
        })
    }
    else {
        res.status(404).json({
            message: "Photo not found. id: " + req.params.id
        })
    }
}

export async function deletePhoto(req: Request, res: Response) {

    const id = +req.params.id
    const photo = await findPhotoById(id)
    
    if (photo) {
        const deleted = await removePhoto(id)
        // TODO: delete files

        res.status(200).json({
            message: "Photo deleted",
            photo: deleted
        })
    }
    else {
        res.status(404).json({
            message: "Photo not found. id: " + id
        })
    }
}

export async function postPhoto(req: Request, res: Response) {
    
    const dto: PhotoDto = req.body

    if (!req.file) {
        return res.status(400).json({
            message: "File photo not uploaded"
        })
    }

    const original = req.file.originalname
    const path = req.file.filename

    console.log('Original: ', original)
    console.log('Path: ', path)

    const photo = await createPhoto(dto, original, path)

    res.status(200).json({
        message: "Photo created",
        photo
    })
}