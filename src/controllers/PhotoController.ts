import {Request, Response} from 'express'
import knex from '../database/connection'

interface Photo {
  location: String
}
class PhotoController {
  async update(request: Request, response: Response) {
    const { id } = request.params

    const file = request.file

    return response.json(file)
  }
}

export default PhotoController