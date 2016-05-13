var fs = require('fs');


module.exports = function (file, extension, callback) {
    fs.readdir(file, function (err, list) {
        if(err)
            return callback(err);

        var listExt = [];
        for (var i = 0; i < list.length; i++) {
            var file = list[i].split('.');
            if (file[1] === extension) {
                listExt.push(list[i]);
            };
        };
        
        
        return callback(null, listExt);

    });
}

/*var fs = require('fs')
    var path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
    
      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }*/