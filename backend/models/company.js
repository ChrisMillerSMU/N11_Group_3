const bcrypt = require("bcrypt");

class Company {
    constructor(_DBQuery, _disconnect) {
        this.DBQuery = _DBQuery;
        this.disconnect = _disconnect;
    }
    close () {
        this.disconnect();
    }

    async add_company(body) {
        const email = body.email;
        const hashedPassword = bcrypt.hashSync(body.password, 10);
        const result = await this.DBQuery("INSERT INTO company(name, email, password) VALUES (?, ?, ?)",
        [body.name, email, hashedPassword]);
        delete body.password;
        return this.findCompany(email);
    };

    async getAllCompanies() {
        const result = await this.DBQuery("SELECT * FROM company");
        return result;
    }

    async findCompany(email) {
        const result = await this.DBQuery("SELECT * FROM company WHERE email = ?", [email]);
        return result;
    };

    async authenticateCompany(email, password) {
        const company = await this.findCompany(email);
        if (company.length === 0) {
            console.error(`Company with email \'${email}\' not found`);
            return false;
        }
        const result = await bcrypt.compare(password, user.password);
        return result;
    };
}
module.exports = Company;