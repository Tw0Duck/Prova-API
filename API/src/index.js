import 'dotenv/config';


import usuarioController from './controller/usuarioController.js'; 
import animeRepository from './controller/animeController'

import express from 'express' 
import cors from 'cors';



const server = express();
server.use(cors());
server.use(express.json());

server.use(animeRepository);
server.use(usuarioController);

server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`))