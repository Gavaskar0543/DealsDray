const passport = require('passport');
const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Admin = require('../Model/Admin');
const opts = {
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:process.env.JWT_SECRET_KEY
}

passport.use(new jwtStrategy(opts,async function(jwtpayload,done){
    let admin = await Admin.findById({_id:jwtpayload._id});
    if(!admin){
        return done(null,false);
    }
    else{
        return done(null,admin);
    }
}));

module.exports = passport;