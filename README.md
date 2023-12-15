# 初始化 webpack TS 环境

```shell
# 输入项目名(默认当前目录名),然后一路回车
cd DuRequest
npm init
tsc --init

npm install webpack webpack-cli -D

# 在根目录创建 webpack.config.js, 并编辑

npm install ts-loader -D

# 在根目录创建 index.html，默认模板
npm install html-webpack-plugin -D

# 运行环境
npm install webpack-dev-server -D

# 修改 package.json,新增
"serve": "webpack serve"

# 启动服务
npm run serve
```