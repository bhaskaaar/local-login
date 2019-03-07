// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '416439585768539', // your App ID
        'clientSecret'  : '07f0c54fee9613b13e4cf0ffe98cfb01', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '127239507999-1saoac0sj5ch5v5mt8jt1vsudah3covc.apps.googleusercontent.com',
        'clientSecret'  : 'jxG4s0oxYOjK8IFU__Ykn1Wm',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};