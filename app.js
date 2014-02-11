var express = require('express'),
    http    = require('http'),
    request = require('request'),
    app     = express();

app.use(express.bodyParser());

app.get('/:bucketName/:imageName', function(req, res){
  var bucketName = req.params.bucketName,
      imageName  = req.params.imageName;
  request('http://s3.amazonaws.com/' + bucketName + '/' + imageName).pipe(res)
});

app.listen(8080);
