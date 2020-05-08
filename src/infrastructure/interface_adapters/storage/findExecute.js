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
    async trackAllList(expresion, order) {
        let q = `SELECT tracks.id,tracks.title,tracks.artist,tracks.isrc,tracks.genre,users.name, tracks.status FROM tracks  inner join users on users.id=tracks.userid ${expresion} group by tracks.id ${order}`;
        console.log('q :>> ', q);
        let query = await this.client.promise().query(q)
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
    async updateTrackWithoutArtist(userId, trackId) {

        let query = await this.client.promise().query(
            `UPDATE tracks
            SET artist = (select users.name from users inner join tracks on tracks.userid=users.id where users.id="${userId}" group by (users.id))
            WHERE tracks.id="${trackId}";`
        )
        return { status: "Success", data: query[0] }
    }


    async getTrackById(trackId) {

        let query = await this.client.promise().query(
            `select * from tracks 
            WHERE tracks.id="${trackId}";`
        )
        return { status: "Success", data: query[0] }
    }
    async getAlbumsWithTrack() {
        let query = await this.client.promise().query(
            `select albumid from tracks GROUP BY albumid`
        )
        return { status: "Success", data: query[0] }

    }
    async getAllAlbums() {
        let query = await this.client.promise().query(
            `select * from albums`
        )
        return { status: "Success", data: query[0] }

    }
    async getAllUsers() {
        let query = await this.client.promise().query(
            `select * from users`
        )
        return { status: "Success", data: query[0] }

    }
    async updateAlbumById(id, expresion) {
        let query = await this.client.promise().query(
            `update albums set ${expresion} where albums.id=${id}`
        )
        return { status: "Success", data: query[0] }
    }
    async updateUserById(id, expresion) {
        let query = await this.client.promise().query(
            `update users set ${expresion} where users.id=${id}`
        )
        return { status: "Success", data: query[0] }
    }
    async getUsersWithTracksAndAlbums() {
        let albums = await this.client.promise().query(
            `SELECT userid FROM albums group by userid`
        )
        let tracks = await this.client.promise().query(
            `SELECT userid FROM tracks group by userid`
        )
        let arreglo = new Set();
        albums[0].forEach(element => {
            arreglo.add(element.userid)
        });
        tracks[0].forEach(element => {
            arreglo.add(element.userid)
        });
        console.log('arreglo :>> ', arreglo);
        return { status: "Success", data: arreglo }
    }

    async getAllTracksDifferents() {
        let query = await this.client.promise().query(
            `SELECT tracks.id,tracks.title,tracks.artist,tracks.isrc,tracks.genre,tracks.status,albums.title FROM 
            tracks  inner join albums on albums.id=tracks.albumid where albums.genre!=tracks.genre`
        )
        return { status: "Success", data: query[0] }
    }
    async persistTrack(track) {
        console.log(`INSERT INTO tracks VALUES
        (NULL, '${track.title}', '${track.artist}', '${track.isrc}', '${track.albumid}', '${track.genre}', '${track.userid}', '${track.status}');`);
        let query = await this.client.promise().query(
            `INSERT INTO tracks VALUES (NULL, '${track.title}', '${track.artist}', '${track.isrc}', '${track.albumid}', '${track.genre}', '${track.userid}', '${track.status}');`
        )
        console.log('query :>> ', query);
        return { status: "Success", data: query }

    }
}

module.exports = FindExecute;