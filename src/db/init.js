//  init  ele não vai fazer parte do projeto, vai ser simplesmente um arquivo que precisamos rodar ele antes.
// para que as tabelas do banco de dados sejam criadas para que depois agente colocar o conteúdo la dentro.

 const Database = require("./config")

 const initDb = {
     async init(){
         const db = await Database()

          await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`); // A partir daqui surge o código sql

          await db.exec(`CREATE TABLE questions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT,
                read INT,
                room INT
            )`);

            await db.close()

     }
 }

 initDb.init();

 