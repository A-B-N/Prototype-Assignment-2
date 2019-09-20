var lineReader = require("line-reader");
var registeredUsers = [];

function sendPage(fileName, res) {
    var html = '';

    // Read the file one line at a time.
    lineReader.eachLine(fileName,
        /**
         * Append each line to string html.
         * Send the contents of html to the client
         * after the last line has been read.
         * @param line the line read from the file.
         * @param last set to true after the last line.
         */
        function(line, last) {
            html += line + '\n';

            if (last) {
                res.send(html);
                return false;
            } else {
                return true;
            }
        });
}

function getCredit(req) {
    var creditScore = req.param('creditScore');


    return creditScore;
}

module.exports.index = function(req, res, next)  {  
    res.render('index', { title: 'Authentication Demo' });  
    console.log('Cookies: ', req.cookies);
};

module.exports.get_register = function(req, res) {
    res.render('register', { message: "Please register!" });
};
module.exports.post_register = function(req, res) {
    if (!req.body.username || !req.body.password) {
        res.status("400");
        res.send("Invalid details!");
    } else {
        // Create an array of users with matching usernames.
        var matches = registeredUsers.filter(function(user) {
            return user.username === req.body.username;
        });

        // If there is a match, the user has already registered.
        if (matches.length > 0) {
            res.render('register', { message: "User already registered!" });
        }

        // Register a new user.
        else {
            var newUser = {
                username: req.body.username,
                password: req.body.password
            };
            registeredUsers.push(newUser);
            console.log("New user:");
            console.log(newUser);
            console.log("Registered users:");
            console.log(registeredUsers);
            res.redirect('/login');
        }
    }
};

/*
 * GET login page.
 */
module.exports.get_login = function(req, res) {
    res.render('login', { message: "Please log in!" });
};
module.exports.post_login = function(req, res) {
    console.log("Registered users:");
    console.log(registeredUsers);
    console.log("Logging in: " + req.body.username + "/" + req.body.password);

    // Create an array of users with matching credentials.
    var matches = registeredUsers.filter(function(user) {
        return (user.username === req.body.username) &&
            (user.password === req.body.password);
    });

    console.log("Matching credentials: ");
    console.log(matches);

    if (matches.length === 0) {
        res.render('login', { message: "Invalid credentials!" });
    } else {
        // The user is logged in for this session.
        req.session.user = matches[0];
        console.log("Sucessfully logged in:");
        console.log(req.session.user.username);

        res.render('form');
    }
};


module.exports.get_custDetails = function(req, res) {
    sendPage('form.html', res);
};
module.exports.post_custDetails = function(req, res) {
    var creditScore = getCredit(req);
    if (creditScore < 600) {

        res.render('loandeclined');
    } else {

        res.render('loanApproved');
    }
};