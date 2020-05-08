"use strict";
class FindExecute {
    constructor(client) {
        this.client = client;
    }
    async trackList() {
        let query = await this.client.promise().query(
            'SELECT tracks.id,tracks.title as `track title`,albums.title as `album title`,users.name,users.email, country.name as `country name` FROM tracks inner join albums on tracks.albumid=albums.id inner join users on tracks.userid=users.id inner join country on country.code=users.countrycode group by tracks.id'
        )
        return { status: "Success", data: query[0] }
    }
    async getAllAlbumsFilter() {
        let query = await this.client.promise().query(
            'select * from albums inner JOIN users on users.id=albums.userid inner join country on country.code=users.countrycode where country.name="PERU" and genre="ROCK"'
        )
        return { status: "Success", data: query[0] }
    }
    async getAllTrackWithArtistNull() {
        let query = await this.client.promise().query(
            'SELECT * FROM `tracks` where artist is NULL or artist=""'
        )
        return { status: "Success", data: query[0] }
    }
}

module.exports = FindExecute;