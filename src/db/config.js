const sqlite3 = require("sqlite");
const { open } = require("sqlite") 
// O Sqlite, ele tem essa parte do open, porque a gente precisa abrir uma conecção com banco de dados.
module.exports = () => 
    open({ //filename passamos qual vai ser o arquivo do nosso banco de dados.
        filename: '/src/db/rocketq.sqlite', //File name vai receber aqui o caminnho do nosso banco de dados.
                    //Caminho e rocketq.sqlite é o nome do banco de dados 
        driver: sqlite3.Database,
        //O driver é quem comanda o banco de dados.


    
    }) //                
