/**
 * 服务器mock
 */
const express = require('express');
const Mock = require('mockjs');   // Document: http://mockjs.com
const chalk = require('chalk');
const fs = require('fs');
const url = require('url');

const app = express();
const port = 8080;

app.use((req, res) => {
  // console.log(path.resolve('.' + req.url + '.json'));
  const pathname = url.parse(req.url).pathname;
  // console.log(req)
  fs.exists(pathname, err => {
    if (err) res.send(404);

    fs.readFile('./mock' + pathname + '.json', (err, data) => {
      if (err) res.send(404);

      const mockData = Mock.mock(JSON.parse(data));
      res.send(mockData);
    })
  });
});

// 监听port端口
app.listen(port, '0.0.0.0', (err) => {
  if (err) throw err;
  console.log(`> Listening at ` + chalk.blue(`http://localhost:${port}`));
});
