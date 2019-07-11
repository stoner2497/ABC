const jwt = require("passport-jwt").Strategy;
const Extract = require("passport-jwt").ExtractJwt;
const superAdmin = require("../models/superAdmin");
const Admin = require("../models/Admin");
const Emp = require("../models/Emp");

const Keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = Extract.fromAuthHeaderAsBearerToken();
opts.secretOrKey = Keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new jwt(opts, (jwt_payload, done) => {
        superAdmin.findById(jwt_payload.id)
            .then(async superadmin => {
                if(!superadmin) {
                    await Admin.findById(jwt_payload.id)
                     .then(async admin => {
                        if(!admin) {
                           await Emp.findById(jwt_payload.id) 
                                .then(emp => {
                                    if(!emp) {
                                        return done(null,false)
                                    }else {
                                        return done(null,emp)
                                    }
                                })
                        }else {
                            return done(null,admin)
                        }
                     })
                }else {
                    return done(null,superadmin)
                }
            })
    })
  );
};


// User.findById(jwt_payload.id)
// .then(user => {
//   if (user) {
//     return done(null, user);
//   }
//   return done(null, false);
// })
// .catch(err => console.log(err));