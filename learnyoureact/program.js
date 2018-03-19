var express = require('express');
    var app = express();

    app.set('port', (process.argv[2] || 3000));
    app.set('view engine', 'jsx');
    app.set('views', __dirname + '/views');
    app.engine('jsx', require('express-react-views').createEngine());

    require('node-jsx').install();

    // write below
    var data = [{
    	title: 'Shopping',
    	detail: '15.00'
    },{
    	title: 'Milk',
    	detail: '14.00'
    }];

    app.use('/', function(req, res) {
      res.render('index', {data: data});
    });

    app.listen(app.get('port'), function() {});