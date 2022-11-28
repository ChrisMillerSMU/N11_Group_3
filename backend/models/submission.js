class Submission {
    constructor(query, dis) {
        this.DBQuery = query;
        this.disconnect = dis;
    }
    close() {
        this.disconnect();
    }

    async addSubmission(body) {
        const result = await this.DBQuery("INSERT INTO submission (post, athlete, date_time) VALUES (?, ?, NOW())", [body.post, body.athlete]);
        return this.findSubmission(result.insertId);
    };

    async getSubmissions() {
        const result = await this.DBQuery("SELECT * FROM submission;");
        return result;
    }

    async findSubmission(submissionID) {
        const result = await this.DBQuery("SELECT * FROM submission WHERE submissionID = ?", [submissionID]);
        return result;
    };

    async deleteSubmission(submissionID) {
        const result = await this.DBQuery("DELETE FROM submission WHERE submissionID = ?", [submissionID]);
    }
}

module.exports = Submission;