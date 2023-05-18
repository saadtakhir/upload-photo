import prisma from '../database'
import { PhotoDto } from '../models/photos.model'

export async function findAllPhotos() {
    return prisma.photo.findMany()
}

export async function findPhotoById(id: number) {
    return prisma.photo.findUnique({ where: { id }})
}

export async function removePhoto(id: number) {
    return prisma.photo.delete({ where: { id }})
}

export async function createPhoto(dto: PhotoDto, original: string, path: string) {
    return prisma.photo.create({
        data: {
            title: dto.title,
            alt: dto.alt,
            original,
            path
        }
    })
}