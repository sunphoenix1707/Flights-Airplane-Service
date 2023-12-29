const {Logger} = require('../config');

class CrudRepository {
    constructor(model) {
        this.model=model;
    }
    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch(error) {
            Logger.error(`Something went wrong in the crud repository : create`);
            throw error;
        }
    }
    async destroy(data) {
        try {
            const response = await this.model.desroy({
                where: {
                    id: data
                }
            });
            return response;
        } catch(error) {
            Logger.error(`Something went wrong in the crud repository : destroy`);
            throw error;
        }
    }
    async get(data) {
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch(error) {
            Logger.error(`Something went wrong in the crud repository : get`);
            throw error;
        }
    }
    async getall() {
        try {
            const response = await this.model.findall();
            return response;
        } catch(error) {
            Logger.error(`Something went wrong in the crud repository : getall`);
            throw error;
        }
    }
    async update(id , data) {
        try {
            const model = await this.model.update(data , {
                where: {
                    id:id
                }
            });
            return response;
        } catch(error) {
            Logger.error(`Something went wrong in the crud repository : create`);
            throw error;
        }
    }
}
module.exports = CrudRepository;