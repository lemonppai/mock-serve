# mock-serve
动态生成mock数据

## 项目运行

### 安装依赖包
``` bash
npm install
# 或
yarn install
```

### 启动项目
```bash
npm run serve
# 或
yarn run serve
```
项目运行在`http://localhost:8070`

## 创建接口文件
在`mock`目录下创建接口文件，所在文件路径是接口的路径，例如我在`mock`的文件夹创建`user/getList.json`，接口为`/user/getList`。不区分`get`,`post`请求。
