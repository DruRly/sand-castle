var express      = require('express'),
    http         = require('http'),
    request      = require('request'),
    cacheControl = require('express-cache-control'),
    app          = express(),
    cache        = new cacheControl().middleware;

app.use(express.bodyParser());

app.get('/:bucketName/:imageName', cache("year", 1), function(req, res){
  var bucketName = req.params.bucketName,
      imageName  = req.params.imageName;
  request('http://s3.amazonaws.com/' + bucketName + '/' + imageName).pipe(res)
});

app.listen(8080);
