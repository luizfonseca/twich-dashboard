const TwitchClientID = "jwl1rwu0jx4n7lutb30zzs9q8mmxm7n";
const Twitch = require("twitch-sdk");
 

Twitch.init({clientId: TwitchClientID , electron: true}, function(error, status) {
  // the SDK is now loaded with Electron 
  console.log(status);

});


export function loginTwitch() {
	Twitch.login({
 		scope: ['user_read', 'channel_read']
	});
}