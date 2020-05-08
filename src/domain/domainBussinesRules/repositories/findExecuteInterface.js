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
    updateTrackWithoutArtist(userId, trackId) {
        return this.client.updateTrackWithoutArtist(userId, trackId)
    }
    getTrackById(trackId) {
        return this.client.getTrackById(trackId)
    }
    getAlbumsWithTrack() {
        return this.client.getAlbumsWithTrack()

    }
    getAllAlbums() {
        return this.client.getAllAlbums()
    }
    updateAlbumById(id, expresion) {
        return this.client.updateAlbumById(id, expresion)

    }
    updateUserById(id, expresion) {
        return this.client.updateUserById(id, expresion)

    }
    getUsersWithTracksAndAlbums() {
        return this.client.getUsersWithTracksAndAlbums()

    }
    getAllUsers() {
        return this.client.getAllUsers()
    }
    getAllTracksDifferents() {
        return this.client.getAllTracksDifferents()
    }
    trackAllList(expresion, order) {
        return this.client.trackAllList(expresion, order)
    }

    persistTrack(track) {
        return this.client.persistTrack(track)
    }
};