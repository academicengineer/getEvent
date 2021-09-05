/*
const express = require('express');
const app = express();

// urlencodedとjsonは別々に初期化する
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.listen(3000);
console.log('Server is online.');

app.post('/', function(req, res) {
    // リクエストボディを出力
    console.log(req.body);
    // パラメータ名、nameを出力
    console.log(req.body.name);

    res.send('POST request to the homepage');
})
*/

/*
const express = require('express')
const app = express()
const port = 3000
const { execSync } = require('child_process');

execSync('cd', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
})

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.post('/auth/', (req, res) => {
  console.log(req.body);
  res.send("Received POST Data!");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
*/


// Expressの定義
const express = require('express'); 
const app = express();
const port = 3000

// GET API定義
app.post('/test', (req, res) => {
    res.send('GETパラメータ取得: ' + req.query.value);
    console.log(req.body);
    res.send("Received POST Data!");
});

app.use(express.urlencoded({
    extended: true
}));

// 通常は3000ポートを使用（ポートを解放する必要あり）
app.listen(port, () => {
 console.log('NAOと接続テスト開始！');
 console.log('curl "http://localhost:3000/test?value=Connect"を実行してください');
});
