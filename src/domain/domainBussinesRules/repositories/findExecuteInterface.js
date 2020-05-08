"use strict";

module.exports = class {
    constructor(client) {
        this.client = client;
    }

    trackList() {
        return this.client.trackList();
    }

    getAllAlbumsFilter() {
        return this.client.getAllAlbumsFilter();
    }
    getAllTrackWithArtistNull() {
        return this.client.getAllTrackWithArtistNull();

    }
};