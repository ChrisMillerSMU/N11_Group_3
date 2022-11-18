const bcrypt = require("bcrypt");

class Athlete {
    constructor(query, dis) {
        this.DBQuery = query;
        this.disconnect = dis;
    }
    close () {
        this.disconnect();
    }

    async add_athlete(body) {
        const school = body.school_name;
        const jersey = body.jersey_number;
        const hashedPassword = bcrypt.hashSync(body.password, 10);
        const result = await this.DBQuery("INSERT INTO athlete(school_name, jersey_number, password) VALUES (?, ?, ?)",
        [school, jersey, hashedPassword]);
        delete body.password;
        this.updateAthlete(school, jersey, body);
        return this.findAthlete(school, jersey);
    };

    async getAthletes() {
        const result = await this.DBQuery("SELECT * FROM athlete");
        console.log("athlete.js test", result);
        return result;
    }

    async findAthlete(school, jersey) {
        const result = await this.DBQuery("SELECT * FROM athlete WHERE school_name = ? AND jersey_number = ?", [school, jersey]);
        return result;
    };

    async authenticateAthlete(school, jersey, password) {
        const athlete = await this.findAthlete(school, jersey);
        if (athlete.length === 0) {
            console.error(`Athlete ${jersey} from ${school} not found`);
            return false;
        }
        const result = await bcrypt.compare(password, user.password);
        return result;
    };

    async updateAthlete(body) {
        if (body.school_name !== undefined) {
            await this.DBQuery("UPDATE athlete SET name = ? WHERE school_name = ? AND jersey_number = ?", [body.name, body.school_name, body.jersey_number]);
        }
        const newRecord = await this.DBQuery("SELECT * FROM User WHERE username = ?", [username]);
        return newRecord;
    }

    async updateUserPassword(username, password) {
        const hashedPassword = bcrypt.hashSync(password, 10);
        const result = await this.DBQuery("UPDATE User SET password = ? WHERE username = ?", [hashedPassword, username]);
    }
    
    async updateUserEmail(username, email) {
        const results = await this.DBQuery("UPDATE User SET email = ? WHERE username = ?", [email, username]);
    };
    
    async updateUserPhone(username, phone) {
        const results = await this.DBQuery("UPDATE User SET phone = ? WHERE username = ?", [phone, username]);
    };
}
module.exports = Athlete;