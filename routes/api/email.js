var async = require('async'),
	keystone = require('keystone');


var api_key = 'key-dd71f2f2d0d2105d5d310c94f8771b55';
var domain = 'sandbox261df9610fca4f6aa002fb98c5529841.mailgun.org';

var Mailgun = require('mailgun-js');

exports.sendOne = function (req,res) {
    var mailgun = new Mailgun({apiKey: api_key,domain:domain});
    var str = 'Nome: '+req.body.name+' <br/> E-mail: '+req.body.email+' <br/> Telefone: '+req.body.phone+' <br/> Mensagem:<br/>' + req.body.message;
    console.log(str);
    var data = {
      from: req.body.email,
      to: 'lrsordi@gmail.com,valeria.vsm@gmail.com',
      subject: 'Valéria Sordi photography - Contato pelo site',
      html: '<b>Nome:</b> '+req.body.name+' <br/><br/> <b>E-mail:</b> '+req.body.email+' <br/><br/> <b>Telefone:</b> '+req.body.phone+' <br/><br/><b>Mensagem:</b><br/>' + req.body.message
    };

    mailgun.messages().send(data,function (err,body) {
        if(err){
          console.log(err);
          console.log(body);
          res.apiResponse({success : false, error : err});
          return;
        };

        res.apiResponse({success : true});
    });
};
