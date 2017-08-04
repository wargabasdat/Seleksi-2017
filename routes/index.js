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
        successRedirect : '/personal', // redirect to the secure profile section
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
      successRedirect : '/personal', // redirect to the secure profile section
      failureRedirect : '/signup', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
  }));

  /* GET personal page */
  app.get('/personal', isLoggedIn, function(req, res, next) {
    res.render('personal', { 
    		title: 'HealthCare | Personal Information',
    		user : req.user
  	});
  });

  /* GET regional page */
  app.get('/regional', isLoggedIn, function(req, res){
    res.render('regional', {
      title : 'HealthCare | Regional Information'
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