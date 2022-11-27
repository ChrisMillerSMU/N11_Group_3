class Endorsement {
    constructor(query, dis) {
        this.DBQuery = query;
        this.disconnect = dis;
    }
    close() {
        this.disconnect();
    }

    async addEndorsement(body) {
        const result = await this.DBQuery("INSERT INTO endorsement (submission, date_time) VALUES (?, ?)", [body.submission, date.now()]);
        const endorsement = await this.DBQuery("SELECT LAST_INSERT_ID() FROM endorsement");
        return endorsement;
    };

    async getEndorsements() {
        const result = await this.DBQuery("SELECT * FROM endorsement;");
        return result;
    }

    async findEndorsement(endorsementID) {
        const result = await this.DBQuery("SELECT * FROM endorsement WHERE endorsementID = ?", [endorsementID]);
        return result;
    };
}

module.exports = Endorsement;