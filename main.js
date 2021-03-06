var express = require('express'),
    path = require('path'),
    multer = require('multer'),
    bodyParser = require('body-parser'),
    storage = multer.diskStorage({
        destination: function (request, file, cb) {
            cb(null, 'uploads/')
        },
        filename: function (request, file, cb) {
            cb(null, file.originalname)
        }
    }),
    upload = multer({ storage: storage }),
    database = require('./config/database');

var app = express();
const host = "0.0.0.0";
app.set('port', process.env.PORT || 8080); // const port = 3000;

global.baseURL = 'http://' + host + ':' + app.get('port') + '/';
global.basePath = __dirname;

database.open(() => {
    // console.log('Database is open');
});

app.listen(app.get('port'), host, (error) => {
    console.log('Listening on http://' + host + ':' + app.get('port'));
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (request, response, next) {
    response.on('finish', () => {
        console.info(`${request.method} ${request.url} ${response.statusCode} ${response.statusMessage}; ${response.get('Content-Length') || 0}b sent`)
    })
    next();
});

app.all("/*", function (request, response, next) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.use(express.static('uploads'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

var study = require('./controllers/study.controller');

app.get('/study', study.index);
app.get('/study/:id', study.index);
app.get('/study/search/:search', study.search);
app.post('/study/addUrl', study.addUrl);
app.post('/study/addZip', study.addZip);
app.post('/study/add', upload.array('photo'), study.add);
app.post('/study/edit/:id', study.edit);
app.post('/report/edit/:id', study.editReport);

app.get('/*', (request, response) => response.sendFile(path.join(__dirname, 'public/index.html')));