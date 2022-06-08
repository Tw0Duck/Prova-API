import { con } from './connection.js';

export async function inserirAnime(anime) {
    const comando = 
    `
    INSERT INTO tb_anime (id_anime, nm_anime)
                  VALUES (?, ?) `
    
    const [resposta] = await con.query(comando,[anime.numero, anime.nome]); 
  anime.id =  resposta.insertId;
  
  return anime;
}