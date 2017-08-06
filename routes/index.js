var Kecamatan = require("../models/kecamatan");

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
        successRedirect : '/regional/5987258a05182a8aa49b7793', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
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
      successRedirect : '/regional/5987258a05182a8aa49b7793', // redirect to the secure profile section
      failureRedirect : '/signup', // redirect back to the signup page if there is an error
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

  /* GET regional page */
  app.get('/regional/:_id', isLoggedIn, function(req, res){
    var _id = req.params._id;
    console.log(_id);
    Kecamatan.get(_id, function (err, data){
      if (err) {
        res.status(500);
        res.json({_message: err});
      } else {
        res.render('regional', {
          title : 'HealthCare | Regional Information',
          header : 'REGIONAL INFORMATION',
          kecamatan : data
        });
      }
    })
  });

  /* GET input page */
  app.get('/input', isLoggedIn, function(req, res){
    res.render('input', {
      title : 'HealthCare | Input Data Form',
      header : 'INPUT FORM'
    });
  });

    /* GET input page */
  app.get('/input', isLoggedIn, function(req, res){
    res.render('input', {
      title : 'HealthCare | Input Data Form',
      header : 'LIST OF PATIENT'
    });
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