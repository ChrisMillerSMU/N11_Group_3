const knex = require('../database/knex');

const ATHLETES_TABLE = 'athletes';

const findUserByEmail = async (email) => {
    const query = knex(STUDENTS_TABLE).where({ email });
    const result = await query;
    return result;
}
module.exports = {
    findUserByEmail
};