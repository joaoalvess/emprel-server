import express from 'express';

const routes = express.Router();

routes.get('/', (req,res) => {
  console.log("batata")
  res.json({
    messager: "hello world"
  })
})

export default routes;
