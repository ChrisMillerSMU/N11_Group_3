const bcrypt = require("bcrypt");

class Athlete {
    constructor(query, dis) {
        this.DBQuery = query;
        this.disconnect = dis;
    }
    close() {
        this.disconnect();
    }

    async addAthlete(body) {
        const email = body.email;
        const result = await this.DBQuery("INSERT INTO athlete (email) VALUES (?)", [email]);
        return this.updateAthlete(email, body);
    };

    async getAthletes() {
        const result = await this.DBQuery("SELECT * FROM athlete;");
        return result;
    }

    async findAthlete(email) {
        const result = await this.DBQuery("SELECT * FROM athlete WHERE email = ?", [email]);
        return result;
    };

    async authenticateAthlete(email, password) {
        const company = await this.findAthlete(email);
        if (company.length === 0) {
            console.error(`Athlete email: ${email} -> not found`);
            return false;
        }
        const result = await bcrypt.compare(password, user.password);
        return result;
    };

    async updateAthlete(email, body) {
        if (body.email !== undefined) {
            await this.DBQuery("UPDATE athlete SET email = ? WHERE email = ?", [body.email, email]);
            email = body.email;
        }
        if (body.instagram !== undefined) {
            await this.DBQuery("UPDATE athlete SET instagram = ? WHERE email = ?", [body.instagram, email]);
        }
        if (body.school_name !== undefined) {
            await this.DBQuery("UPDATE athlete SET school_name = ? WHERE email = ?", [body.school_name, email]);
        }
        if (body.name !== undefined) {
            await this.DBQuery("UPDATE athlete SET name = ? WHERE email = ?", [body.name, email]);
        }
        if (body.height !== undefined) {
            await this.DBQuery("UPDATE athlete SET height = ? WHERE email = ?", [body.height, email]);
        }
        if (body.wingspan !== undefined) {
            await this.DBQuery("UPDATE athlete SET wingspan = ? WHERE email = ?", [body.wingspan, email]);
        }
        if (body.gender !== undefined) {
            await this.DBQuery("UPDATE athlete SET gender = ? WHERE email = ?", [body.gender, email]);
        }
        if (body.sport !== undefined) {
            await this.DBQuery("UPDATE athlete SET sport = ? WHERE email = ?", [body.sport, email]);
        }
        if (body.year !== undefined) {
            await this.DBQuery("UPDATE athlete SET year = ? WHERE email = ?", [body.year, email]);
        }
        if (body.stat !== undefined) {
            await this.DBQuery("UPDATE athlete SET stat = ? WHERE email = ?", [body.stat, email]);
        }
        if (body.twitter !== undefined) {
            await this.DBQuery("UPDATE athlete SET twitter = ? WHERE email = ?", [body.twitter, email]);
        }
        if (body.password !== undefined) {
            await this.DBQuery("UPDATE athlete SET password = ? WHERE email = ?", [body.password, email]);
        }
        return this.findAthlete(email);
    }
}
module.exports = Athlete;