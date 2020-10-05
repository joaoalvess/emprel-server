import {Request, Response} from 'express'
import knex from '../database/connection'

interface Photo {
  location: String
}
class PhotoController {
  async update(request: Request, response: Response) {
    const { id } = request.params
    const orgao = request.params.orgao

    const { location } = request.file as unknown as Photo

    await knex(`${orgao}users`).where('id', id).update({ url: location })

    return response.json({ messager: "sucess" })
  }
}

export default PhotoController