(function(exports) {
    'use strict';

    var config = {
        url: 'http://webservice.fanart.tv/v3/',
        key: '?api_key=',
        date: '&date=',
        retries: 10,
        timeout: 1000,
        error: function (key, message) {
            if (!key && key !== false) throw new Error('Missing ' + message);
        },
        engine: require('got')
    };

    var Fanart = function(apiKey) {
        config.error(apiKey, 'API key');
        config.userKey = apiKey;
    };

    var get = function(path, opts, count) {
        config.error(opts.id, 'ID');

        count = isNaN(count) ? 1 : count;

        var url = [
            config.url,
            path,
            opts.id ? opts.id : '',
            config.key,
            config.userKey,
            opts.date ? config.date + opts.date : ''
        ].join('');

        return config.engine(url, {
            json: true,
            timeout: config.timeout
        }).then(function(response) {
            return (response.body ? response.body : {});
        }).catch(function(error) {
            if (count < config.retries) {
                count++;
                return get(path, opts, count);
            } else {
                return error;
            }
        }.bind(this));
    };

    Fanart.prototype.movies = {
        get: function (id) {
            return get('movies/', {id: id});
        },
        latest: function (dt) {
            return get('movies/latest', {id: false, date: dt});
        }
    };

    Fanart.prototype.shows = {
        get: function (id) {
            return get('tv/', {id: id});
        },
        latest: function (dt) {
            return get('tv/latest', {id: false, date: dt});
        }
    };
    
    Fanart.prototype.music = {
        artist: function (id) {
            return get('music/', {id: id});
        },
        latest: function (dt) {
            return get('music/latest', {id: false, date: dt});
        },
        album: function (id) {
            return get('music/albums/', {id: id});
        },
        label: function (id) {
            return get('music/labels/', {id: id});
        }
    };

    module.exports = Fanart;
}());