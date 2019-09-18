module.exports.index = function(req, res, next) 
{
   res.render('index', {title:'Authentication Demo'});
   console.log('Cookies: ', req.cookies);
};

module.exports.get_register = function(req, res)
{
    res.render('register',
               { message: "Please register!" });
};

/*
 * GET login page.
 */
module.exports.get_login = function(req, res)
{
   res.render('login', { message: "Please log in!" });
};