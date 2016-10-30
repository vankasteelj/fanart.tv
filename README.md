# fanart.tv

Fanart.tv API wrapper, written in NodeJS

## Usage

#### Setup
```
npm install fanart.tv
```

#### Initialize
```js
var FanartTV = require('fanart.tv');
var fanart = new FanartTV(<your_api_key>)
```

#### Example usage
```js
 - fanart.movies.get(movieId)       // imdb 'ttXXXXXX' or tvdb
 - fanart.shows.get(tvId)           // tvdb
 - fanart.music.artist(artistId)    // musicbrainz
 - fanart.music.album(albumId)      // musicbrainz
 - fanart.music.label(labelId)      // musicbrainz
 - fanart.movies.latest()           // optionnal unix timestamp
 - fanart.shows.latest()            // optionnal unix timestamp
 - fanart.music.latest()            // optionnal unix timestamp
```

## License

The MIT License

Copyright (c) 2016 - vankasteelj <vankasteelj@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.