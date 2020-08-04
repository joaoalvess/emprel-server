import {Request, Response} from 'express'
import knex from '../database/connection'

interface Photo {
  location: String
}
class PhotoController {
  async update(request: Request, response: Response) {
    const { id } = request.params


    await knex('users').where('id', id)

    return response.json({messager: "sucess"})
  }
}

export default PhotoController