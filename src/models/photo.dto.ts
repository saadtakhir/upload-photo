import joi from 'joi'

export type PhotoDto = {
    title: string
    alt: string
}

export const PhotoBody = joi.object({
    title: joi.string().min(0).required(),
    alt: joi.string().min(0).required()
})
