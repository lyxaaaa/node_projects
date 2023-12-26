var express = require('express');
var formidable = require('formidable')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/upload', function(req, res, next) {
  res.render('upload');
});

router.post('/upload', (req, res, next) => {
  //对上传的文件进行处理

  //创建form对象
  const form = formidable({
    multiples: true,
    //文件上传的保存路径
    uploadDir: __dirname + '/../public/images',
    //保持文件路径
    keepExtensions: true
  })

  //解析请求报文
  form.parse(req, (err, fields, files) => {
    if(err){
      next(err)
      return
    }
    let resevedUrl = '/images/' + files.file.newFilename
    res.send(resevedUrl)
    console.log(fields, files);
  })
});

module.exports = router;
