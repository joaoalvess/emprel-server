import {Request, Response} from 'express'
import knex from '../database/connection'

class PhotoController {
  async update(request: Request, response: Response) {
    const { id } = request.params
    const { location } = request.file

    await knex('users').where('id', id).update({ url: location })

    return response.json({messager: "sucess"})
  }
}

export default PhotoController