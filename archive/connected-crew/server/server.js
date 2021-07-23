/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 
 Reference: https://github.com/thelinmichael/spotify-web-api-node
 */

var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi(
    {
        clientId: 'fcecfc72172e4cd267473117a17cbd4d',
        redirectUri: 'http://www.example.com/callback'
    }
);

spotifyApi.setAccessToken("BQB9l3HOd_0x20O_DLrfSF3TCk5RV89nyIt9HYhfRFMfWmBv65NCBlN5qLNChiVm_MKx9osGDvc2q6s-hRwyDR-Gm00a15EcpsfyLqoClwFVr5KXUiSz4cmA23QhJJsNsYAHs5qNiCB7U7SSUc7Gml17C1-1Mzo");

// Get G-Eazy's albums
function getArtist() {
    spotifyApi.getArtistAlbums('02kJSzxNuaWGqwubyUba0Z').then(
      function(data) {
        console.log('Artist albums', data.body);
      },
      function(err) {
        console.error(err);
      }
    );
}