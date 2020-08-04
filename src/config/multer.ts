import multer, { FileFilterCallback } from 'multer'
import path from 'path'
import crypto from 'crypto'
import { Request } from 'express'
import multerS3 from 'multer-s3'
import aws from 'aws-sdk'

const storageTypes = {
  local: multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, callback: any) => {
      callback(null, path.resolve(__dirname, '..', 'uploads'))
    },
    filename: (req: Request, file: any, cb: any) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err)

        file.key = `${hash.toString('hex')}-${file.originalname}`

        cb(null, file.key)
      })
    }
  }),
  s3: multerS3({
    s3: new aws.S3(),
    bucket: 'emprel-storage',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req: Request, file: Express.MulterS3.File, callback: any) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) {
          callback(err)
        }

        const filename = `${hash.toString('hex')}-${file.originalname}`

        callback(null, filename)
      })
    }
  })
}

module.exports = {
  dest: path.resolve(__dirname, '..', 'uploads'),
  storage: storageTypes["s3"],
  limits: {
    fileSize: 4 * 1024 * 1024
  },
  fileFilter: (req : Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif"
    ]

    if(allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Formato de arquivo invalido'))
    }
  }
}