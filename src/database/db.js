//Importar a dependência do sqlite3
const squlite3 = require("sqlite3").verbose()

//Criar o objeto que irá fazer operaçãoes de banco de dados
const db = new squlite3.Database("./src/database/database.db")

module.exports = db
 //db.serialize(() => {
//     //Criar tabela com comandos sql
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT,
//             image TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT 
//         );
//     `)

//     //Inserir dados na tabela
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (
//         ?, ?, ?, ?, ?, ?, ?
//     );
//     `   

//     const values = [
//         "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Número 260",
//         "Santa Catarina",
//         "Rio grande do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]

//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Registrado com sucesso")
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)

//     //Consultar os dados da tabela
//     db.all(`SELECT * FROM places`, function(err, rows){
//         if(err) {
//             return console.log(err)
//         }
//         console.log("Aqui estão seus registros")
//         console.log(rows)
//     })

//     db.run(`DELETE FROM places WHERE id = ?`, [2], function(err){
//         if(err) {
//             return console.log(err)
//         }
//     })
//  })