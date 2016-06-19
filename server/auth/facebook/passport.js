import passport from 'passport';
import {Strategy as FacebookStrategy} from 'passport-facebook';

export function setup(User, config) {
  console.log('setup');
  passport.use(new FacebookStrategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackURL,
    profileFields: [
      'displayName',
      'emails'
    ]
  },


  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    User.find({where:{'facebook': profile.id}})
      .then(user => {
        if (user) {
          return done(null, user);
        }
        user = User.build({
          name: profile.displayName,
          email: profile.emails[0].value,
          role: 'user',
          provider: 'facebook',
          facebook: profile.id,
          github: profile.profileUrl
        });

        user.save()
          .then(user => done(null, user))
          .catch(err => done(err));
      })
      .catch(err => done(err));
  }));
}
