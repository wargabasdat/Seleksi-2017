var Kecamatan = require("../models/kecamatan");
var Users     = require("../models/user");

module.exports = function(app, passport) {

  /* GET home page. */
  app.get('/', function(req, res, next) {
    res.render('index', { 
    	title: 'HealthCare',
    	message: req.flash('loginMessage')
    });
  });

  /* POST home page (login) */
  app.post('/', passport.authenticate('local-login', {
        successRedirect : '/regional/5987258a05182a8aa49b7793',
        failureRedirect : '/',
        failureFlash : true // allow flash messages
    }));

  /* GET sign up Page */
  app.get('/signup', function(req, res) {
    res.render('signup', {
      title: 'HealthCare | Sign Up',
      message: req.flash('signupMessage')
    });
  });

  /* POST sign up page */
  app.post('/signup', passport.authenticate('local-signup', {
      successRedirect : '/regional/5987258a05182a8aa49b7793',
      failureRedirect : '/signup',
      failureFlash : true // allow flash messages
  }));

  /* GET personal page */
  app.get('/personal', isLoggedIn, function(req, res, next) {
    res.render('personal', { 
    		title: 'HealthCare | Personal Information',
        header : 'PERSONAL INFORMATION',
    		user : req.user
  	});
  });

  /* GET personal page */
  app.get('/personal/:_id', isLoggedIn, function(req, res, next) {
    if (req.user.local.email === 'admin') {
      var id = req.params._id;
      Users.find({_id : id}, function (err, user) {
        res.render('personal', { 
            title: 'HealthCare | Personal Information',
            header : 'PERSONAL INFORMATION',
            user : user[0]
        });
        console.log(user);
      })
    } else {
      res.redirect('/personal');
    }
  });

  /* GET regional page */
  app.get('/regional/:_id', isLoggedIn, function(req, res){
    var _id = req.params._id;
    Kecamatan.get(_id, function (err, kecamatan){
      Kecamatan.find({}, function (err , list_kec){

        if (err) {
          res.status(500);
          res.json({_message: err});
        } else {
          Users.count({'local.status' : 'SICK', 'local.kecamatan': kecamatan.name }, function (err, sick_num){
              if (err) {
                res.status(500);
                res.json({_message: err});
              } else {
                Users.find({'local.status' : 'SICK', 'local.kecamatan' : kecamatan.name}, function (err, patients){
                  res.render('regional', {
                    title : 'HealthCare | Regional Information',
                    header : 'REGIONAL INFORMATION',
                    kecamatan : kecamatan,
                    sick_num : sick_num,
                    patients : patients,
                    list_kec : list_kec
                  });
                })
              }
          })
        }

      })
    })
  });

  /* GET input page */
  app.get('/input', isLoggedIn, function(req, res){
    res.render('input', {
      title : 'HealthCare | Input Data Form',
      header : 'INPUT FORM'
    });
  });

  /* GET personal page */
  app.get('/patient/:_kec', isLoggedIn, function(req, res, next) {
    if (req.user.local.email === 'admin') {
      var _kec = req.params._kec;
      Users.find({'local.kecamatan' : _kec, 'local.status' : 'SICK'}, function (err, users) {
        res.render('patient', { 
            title: 'HealthCare | List Of Patient',
            header : 'LIST OF PATIENT',
            users : users
        });
        console.log(users);
      })
    } else {
      res.redirect('/personal');
    }
  });

  /* BREAK session (logout) */
  app.get('/logout', function(req, res) {
  	req.logout();
  	res.redirect('/');
  });

};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}