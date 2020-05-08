'use strict';

class Track {

    constructor(title, artist, isrc, albumid, genre, userid, status) {
        this.title = title;
        this.artist = artist;
        this.isrc = isrc;
        this.albumid = albumid;
        this.genre = genre;
        this.userid = userid;
        this.status = status;
    }
}

module.exports = Track;