class Post {
    constructor(query, dis) {
        this.DBQuery = query;
        this.disconnect = dis;
    }
    close() {
        this.disconnect();
    }

    async createPost(body) {
        const result = await this.DBQuery("INSERT INTO post (company, date_time) VALUES (?, NOW())", [body.company]);
        return this.updatePost(result.insertId, body);
    };

    async getPosts() {
        const result = await this.DBQuery("SELECT * FROM post;");
        return result;
    }

    async findPost(postID) {
        const result = await this.DBQuery("SELECT * FROM post WHERE postID = ?", [postID]);
        return result;
    };

    async updatePost(postID, body) {
        if (body.description !== undefined) {
            await this.DBQuery("UPDATE post SET description = ? WHERE postID = ?", [body.description, postID]);
        }
        return this.findPost(postID);
    }
}

module.exports = Post;