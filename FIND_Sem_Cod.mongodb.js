const database = 'BD3-NoSQL-AtlasMongoDB'; 

use (database);

db['bd3-nosql-atv1'].find({ "cpf" : "222.222.222-22"},{ "codigo": 0});