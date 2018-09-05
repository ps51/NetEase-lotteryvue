'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
//开发环境
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // 服务器地址
  API_ROOT:'"http://192.168.2.181:8888"'
})
