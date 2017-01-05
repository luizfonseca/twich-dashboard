import { Router, Route, Link, hashHistory } from 'react-router'


global.TwitchClientID = "jwl1rwu0jx4n7lutb30zzs9q8mmxm7n";
global.Twitch = require("twitch-sdk");
global.remote = require('electron').remote;

const app = remote.app;
var fs = require('fs');


// App Globals
global.TwitchToken  =  "";
global.tokenPath = app.getPath('userData') + '/token';

fs.readFile(tokenPath, 'utf-8', (err, data) => {
	if (err) return;

	if (data.toString().length > 0) {
		// When loading this file, initialize twitch sdk
		Twitch.init({ clientId: TwitchClientID, electron: true, token: data }, function(error, status) {
		  // the SDK is now loaded with Electron 
		  console.log(status);


		});
	} else  {

	}

})






// Function that is called on page load at first runtime
// It allows access to twitch's api
export function loginTwitch() {
	Twitch.login({
 		scope: [
 		'user_read', 
 		'channel_read',
 		'user_blocks_edit',
 		'user_blocks_read',
 		'user_follows_edit',
 		'channel_editor',
 		'channel_commercial',
 		'channel_subscriptions',
 		'chat_login',
 		'channel_feed_read',
 		'channel_feed_edit'
 		 ]
	});
}



// Save token on a given path on the User Data system
export function saveToken(token) {

	fs.writeFile(tokenPath, token, (err) => {
  	if (err) throw err;
  	console.log('Token saved on ' + tokenPath);
  })
}


// Get token and save on a global variable for the app
export function getSavedToken() {
	fs.readFile(tokenPath, 'utf-8', (err, data) => {
		TwitchToken = data;
		hashHistory.push('dashboard')
	});
}


export function getUserChannelData(){
	return 
}



