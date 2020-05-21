module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    "name": `${options.name}`,
    "version": "0.1.0",
    "description": `${options.description}`,
    "author": `${options.author}`,
    "private": true,
    "scripts": {
      "serve": "vue-cli-service serve",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint"
    },
    "dependencies": {
      "@vue/babel-helper-vue-jsx-merge-props": "^1.0.0",
      "@vue/babel-preset-jsx": "^1.1.2",
      "animate.css": "^4.1.0",
      "core-js": "^3.6.4",
      "echarts": "^4.7.0",
      "element-ui": "^2.13.1",
      "vue": "^2.6.11",
      "vue-router": "^3.1.6",
      "vuex": "^3.1.3"
    },
    "devDependencies": {
      "@babel/preset-env": "^7.9.6",
      "@vue/cli-plugin-babel": "~4.3.0",
      "@vue/cli-plugin-eslint": "~4.3.0",
      "@vue/cli-plugin-router": "~4.3.0",
      "@vue/cli-plugin-vuex": "~4.3.0",
      "@vue/cli-service": "~4.3.0",
      "@vue/eslint-config-standard": "^5.1.2",
      "babel-eslint": "^10.1.0",
      "babel-plugin-component": "^1.1.1",
      "eslint": "^6.7.2",
      "eslint-plugin-import": "^2.20.2",
      "eslint-plugin-node": "^11.1.0",
      "eslint-plugin-promise": "^4.2.1",
      "eslint-plugin-standard": "^4.0.0",
      "eslint-plugin-vue": "^6.2.2",
      "node-sass": "^4.12.0",
      "sass-loader": "^8.0.2",
      "svg-sprite-loader": "^5.0.0",
      "vue-template-compiler": "^2.6.11"
    }
  })

  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('../template')

  if (options.module === 'module1') { 
    // options.module 可以访问上面问题数组的第一个对象的值，默认为: 'module0'
    console.log(`Your choice is ${options.module}`)
  }

  if (options.moduleName === 'myModule') {
    // options.moduleName 可以访问到用户从控制台输入的文字
    console.log(`Your input is ${options.moduleName}`)
  }
}