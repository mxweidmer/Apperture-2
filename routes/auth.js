//express validator require for user input validation
const { check, validationResult } = require('express-validator/check');

//======================== Export function =======================================
module.exports = function (app, passport) {

    // Routes
    app.get('/signin', function (req, res) {
        res.render('signin', {});
    });

    app.get('/signup', function (req, res) {

        res.render('signup');
    });

    app.get('/dashboard', isLoggedIn, function (req, res) {

        res.render('dashboard');
    });

    app.get('/logout', function (req, res) {

        req.session.destroy(function (err) {

            res.redirect('/');
        });

    });

    // ==================Sign up route and validation=============================
    app.post('/signup', [
        check('firstname', 'First name is required').isLength({ min: 1 }),
        check('lastname', 'Last name is required').isLength({ min: 1 }),
        check('email', 'A valid email is required').isEmail(),
        check('password', 'A valid password is required').isLength({ min: 1 })

    ], function (req, res) {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log("error: " + errors.msg);
            res.render('signup', {
                errors: errors.array()
            })
        }
        else {
            passport.authenticate('local-signup', {
                successRedirect: '/dashboard',
                failureRedirect: '/signup',
                failureFlash: true
            })(req, res);
        }
    });

    //====================== Sign in route and validation=============================
    app.post('/signin', [
        check('email', 'A valid email is required').isEmail(),
        check('password', 'A valid password is required').isLength({ min: 1 })
    ], function (req, res) {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log("error: " + errors.msg);
            res.render('signin', {
                errors: errors.array()
            })
        }
        else {
            passport.authenticate('local-signin', {
                successRedirect: '/dashboard',
                failureRedirect: '/signin',
                failureFlash: true
            })(req, res);
        }
    });
    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }

}

//==============================================================================

