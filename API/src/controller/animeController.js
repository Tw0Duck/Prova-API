import { inserirAnime } from "../repository/animeRepositoty";

import { Router } from 'express'
const server = Router();


server.post('/anime', async (req, resp) =>{
    try{
        const novoAnime = req.body;

        if(!novoAnime.nome){
            throw new Error('insira um nome de anime válido');
        }
        
        if(!novoAnime.usuario){
            throw new Error('logar usuario');
        }

        const animeInserir = await inserirAnime(novoAnime);
        resp.send(animeInserir)
    }
    catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

export default server;