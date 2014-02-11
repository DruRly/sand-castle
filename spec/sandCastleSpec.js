var superagent = require("superagent");

describe('SandCastle', function(){
  describe('GET :bucket_name/:image_name', function(){
    it('returns the resource requested', function(done){
      var proxyResponse, originalResponse;

      superagent.get('http://localhost:8080/filepicker-images-rapgenius/Ya5QuGDQa6MzD93OnlnW_KingdomsHor.png').end(function(res){
        proxyResponse = res;
        superagent.get('http://s3.amazonaws.com/filepicker-images-rapgenius/Ya5QuGDQa6MzD93OnlnW_KingdomsHor.png').end(function(res){
          originalResponse = res;
          expect(proxyResponse).not.toBe(undefined);
          expect(originalResponse).not.toBe(undefined);
          var proxyLength = proxyResponse.header['content-length'],
              originalLength = originalResponse.header['content-length']
          expect(proxyLength).toEqual(originalLength);
          done();
        });
      });
    }, 9000);
  });
});



