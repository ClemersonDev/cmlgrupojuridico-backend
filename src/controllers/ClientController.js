const crypyo = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const users = await connection('clients').select('*');
        return response.json(users);    
    },
    
    
    async create(request, response) {
        const { name, email, whatsapp, message } = request.body;   
        
        const id = crypyo.randomBytes(4).toString('hex');
    
        await connection('clients').insert({
            id,
            name,
            email,
            whatsapp,
        });        
        return response.json({ id });
    }
};