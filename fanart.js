'use strict';

module.exports = class FANART {
    constructor(apiKey) {
        this.engine = require('got');
        this.config = require('./config.json');
        this.checkError(apiKey, 'API key');
        this.config.apiKey = apiKey;

        this.movies = {
            get: (id) => this.get('movies/', {id: id}),
            latest: (dt) => this.get('movies/latest', {id: false, date: dt})
        };

        this.shows = {
            get: (id) => this.get('tv/', {id: id}),
            latest: (dt) => this.get('tv/latest', {id: false, date: dt})
        };

        this.music = {
            artist: (id) => this.get('music/', {id: id}),
            latest: (dt) => this.get('music/latest', {id: false, date: dt}),
            album: (id) => this.get('music/albums/', {id: id}),
            label: (id) => this.get('music/labels/', {id: id})
        };

        return { // expose
            music: this.music,
            shows: this.shows,
            movies: this.movies,
            config: this.config
        };
    }

    checkError(key, message) {
        if (!key && key !== false) throw new Error('Missing ' + message);
    }

    get(path, opts, count) {
        this.checkError(opts.id, 'ID');

        count = isNaN(count) ? 1 : count;

        const url = [
            this.config.url,
            path,
            opts.id ? opts.id : '',
            '?api_key=',
            this.config.apiKey,
            opts.date ? '&date=' + opts.date : ''
        ].join('');

        return this.engine(url, {
            json: true,
            timeout: this.config.timeout
        }).then(response => 
                response.body ? response.body : {}
        ).catch(error => {
            if (count < this.config.retries) {
                count++;
                return this.get(path, opts, count);
            } else {
                throw error;
            }
        });
    }
};