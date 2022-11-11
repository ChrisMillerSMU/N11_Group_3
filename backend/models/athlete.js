

class athlete{


    constructor(DBQuery,disconnect){

this.DBQuery=DBQuery;
this.disconnect=disconnect;


    }

    close () {
        this.disconnect();
    }

    async fetchallathletes () {
        const results = await this.DBQuery('SELECT * FROM athlete');
        return results;
    }

    async fetchathleteByName (name) {
        const results = await this.DBQuery('SELECT * FROM athlete WHERE name = ?', [name]);
        return results;
    }
//need to work on put,delete,post
    async updateathlete(name, school_name) {
        const results = await this.DBQuery('UPDATE athlete SET name = ? WHERE id = ?', [name, school_name]);
        return results;
    }
    async createathlete(body) {
        const results = await this.DBQuery('INSERT INTO athlete VALUES (?)', [body]);
        return results;
    }
    async deleteathlete(name) {
        const results = await this.DBQuery('DELETE FROM athlete WHERE id = ?', [name]);
        return results;
    }
 }
 module.exports = athlete;