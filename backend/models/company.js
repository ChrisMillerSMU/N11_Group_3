const bcrypt = require("bcrypt");

class Company {
    constructor(query, dis) {
        this.DBQuery = query;
        this.disconnect = dis;
    }
    close() {
        this.disconnect();
    }

    async authenticate(email, password) {
        const users = await this.findCompany(email);
        if (users.length === 0) {
            console.error(`No company matched the email ${email}`);
            return false;
        }
        const user = users[0];
        const validPassword = await bcrypt.compare(password, user.password);
        return validPassword;
    };

    async addCompany(body) {
        const email = body.email;
        const hashedPassword = bcrypt.hashSync(body.password, 10);
        const result = await this.DBQuery("INSERT INTO company (email, password) VALUES (?, ?)", [email, hashedPassword]);
        return this.updateCompany(email, body);
    };

    async getCompanies() {
        const result = await this.DBQuery("SELECT * FROM company;");
        return result;
    }

    async findCompany(email) {
        const result = await this.DBQuery("SELECT * FROM company WHERE email = ?", [email]);
        return result;
    };

    async authenticateCompany(email, password) {
        const company = await this.findCompany(email);
        if (company.length === 0) {
            console.error(`Company email: ${email} -> not found`);
            return false;
        }
        const result = await bcrypt.compare(password, user.password);
        return result;
    };

    async updateCompany(email, body) {
        console.log("--ATHLETE MODEL TEST--", email, body);
        if (body.email !== undefined) {
            await this.DBQuery("UPDATE company SET email = ? WHERE email = ?", [body.email, email]);
            email = body.email;
        }
        if (body.instagram !== undefined) {
            await this.DBQuery("UPDATE company SET instagram = ? WHERE email = ?", [body.instagram, email]);
        }
        if (body.school_name !== undefined) {
            await this.DBQuery("UPDATE company SET school_name = ? WHERE email = ?", [body.school_name, email]);
        }
        if (body.name !== undefined) {
            await this.DBQuery("UPDATE company SET name = ? WHERE email = ?", [body.name, email]);
        }
        if (body.height !== undefined) {
            console.log("--ATHLETE MODEL TEST 2");
            await this.DBQuery("UPDATE company SET height = ? WHERE email = ?", [body.height, email]);
        }
        if (body.wingspan !== undefined) {
            await this.DBQuery("UPDATE company SET wingspan = ? WHERE email = ?", [body.wingspan, email]);
        }
        if (body.gender !== undefined) {
            await this.DBQuery("UPDATE company SET gender = ? WHERE email = ?", [body.gender, email]);
        }
        if (body.sport !== undefined) {
            await this.DBQuery("UPDATE company SET sport = ? WHERE email = ?", [body.sport, email]);
        }
        if (body.year !== undefined) {
            await this.DBQuery("UPDATE company SET year = ? WHERE email = ?", [body.year, email]);
        }
        if (body.stat !== undefined) {
            await this.DBQuery("UPDATE company SET stat = ? WHERE email = ?", [body.stat, email]);
        }
        if (body.twitter !== undefined) {
            await this.DBQuery("UPDATE company SET twitter = ? WHERE email = ?", [body.twitter, email]);
        }
        if (body.password !== undefined) {
            const hashedPassword = bcrypt.hashSync(body.password, 10);
            await this.DBQuery("UPDATE company SET password = ? WHERE email = ?", [hashedPassword, email]);
        }
        return this.findCompany(email);
    }
}
module.exports = Company;