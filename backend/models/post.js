class Post {
    constructor(query, dis) {
        this.DBQuery = query;
        this.disconnect = dis;
    }
    close() {
        this.disconnect();
    }

    async addPost(body) {
        const result = await this.DBQuery("INSERT INTO post (company, date_time) VALUES (?, ?)", [body.company, date.now()]);
        const post = await this.DBQuery("SELECT LAST_INSERT_ID() FROM post");
        return post;
    };

    async getPosts() {
        const result = await this.DBQuery("SELECT * FROM post;");
        return result;
    }

    async findPost(postID) {
        const result = await this.DBQuery("SELECT * FROM post WHERE postID = ?", [postID]);
        return result;
    };

    async updatePost(postID) {
        if (body.postID !== undefined) {
            await this.DBQuery("UPDATE athlete SET email = ? WHERE email = ?", [body.email, email]);
            email = body.email;
        }
        if (body.sport !== undefined) {
            await this.DBQuery("UPDATE athlete SET sport = ? WHERE email = ?", [body.sport, email]);
        }
        return this.findAthlete(email);
    }
}

module.exports = Post;