class Interest {
    constructor(query, dis) {
        this.DBQuery = query;
        this.disconnect = dis;
    }
    close() {
        this.disconnect();
    }

    async addInterest(body) {
        const result = await this.DBQuery("INSERT INTO interest (athlete, company, mutual) VALUES (?, ?, ?)", [body.athlete, body.company, body.mutual]);
        return this.findInterest(result.insertId);
    };

    async getInterests() {
        const result = await this.DBQuery("SELECT * FROM interest;");
        return result;
    }

    async findInterest(interestID) {
        const result = await this.DBQuery("SELECT * FROM interest WHERE interestID = ?", [interestID]);
        return result;
    };

    async updateInterest(interestID, body) {
        if (body.mutual !== undefined) {
            await this.DBQuery("UPDATE interest SET mutual = ? WHERE interestID = ?", [body.mutual, interestID]);
        }
        return this.findInterest(interestID);
    }
}

module.exports = Interest;