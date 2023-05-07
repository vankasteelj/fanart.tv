//// FILL ME /////
const apikey = '' // your api key

const movie = 'tt2488496' // star wars vii imdbid
const show = '306246' // baron noir tvdbid

console.time('Elapsed time MOVIE')
console.time('Elapsed time SHOW')

let m, s
const fanart = new(require('./fanart.js'))(apikey)
fanart.movies.get(movie).then(res => {
  m = res
  console.log('Got response MOVIE', m)
  console.timeEnd('Elapsed time MOVIE')
  return fanart.shows.get(show)
}).then(res => {
  s = res
  console.log('\n\n')
  console.log('Got response SHOW', s)
  console.timeEnd('Elapsed time SHOW')
}).catch(console.error)