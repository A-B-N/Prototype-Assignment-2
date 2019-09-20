var lineReader= require("line-reader");
function sendPage(fileName, result)
{
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
        function(line, last)
        {
            html += line + '\n';

            if (last) 
            { 
                result.send(html);
                return false; 
            }
            else
            {
                return true;
            }
        });
}
function sendBodyReject(text, result)
{
    var html = '<!DOCTYPE html>\n'
        + '<html lang="en-US">\n'
        + '<head>\n'
        + '    <meta charset="UTF-8">\n'
        + '    <title>Form Examples</title>\n'
        + '</head>\n'
        + '<body>\n'
        + '    ' + text + '\n'  // insert the body text
        + '</body>\n'
        + '</html>\n';
    
    res.send(html);    
}
function sendBodyApprove(text, result)
{
    var html = '<!DOCTYPE html>\n'
        + '<html lang="en-US">\n'
        + '<head>\n'
        + '    <meta charset="UTF-8">\n'
        + '    <title>Form Examples</title>\n'
        + '</head>\n'
        + '<body>\n'
        + '    ' + text + '\n'  // insert the body text
        + '</body>\n'
        + '</html>\n';
    
    res.send(html);    
}
function getCredit(request)
{
    var creditScore = request.param('creditScore');
   
    
    return creditScore;
}

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
module.exports.get_custDetails = function(req, res)
{
   sendPage('form.html',result);
};
module.exports.post_custDetails =function(req,res)
{
   var creditScore= getcreditScore(req);
   if(creditScore<600){
      var text= 'Credit score is below the threshold';
      sendBodyReject(text,result);
   }
   else{
      var text= 'Credit score meets the requirement';
      sendBodyApprove(text,result);
   }
};
