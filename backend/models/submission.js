class Submission {
    constructor(query, dis) {
        this.DBQuery = query;
        this.disconnect = dis;
    }
    close() {
        this.disconnect();
    }

    async addSubmission(body) {
        const result = await this.DBQuery("INSERT INTO submission (post, athlete, date_time) VALUES (?, ?)", [body.post, body.athlete, date.now()]);
        const submission = await this.DBQuery("SELECT LAST_INSERT_ID() FROM submission");
        return submission;
    };

    async getSubmissions() {
        const result = await this.DBQuery("SELECT * FROM submission;");
        return result;
    }

    async findSubmission(submissionID) {
        const result = await this.DBQuery("SELECT * FROM submission WHERE submissionID = ?", [submissionID]);
        return result;
    };
}

module.exports = Submission;