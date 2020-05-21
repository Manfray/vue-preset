module.exports = [
  {
    type: 'input', // 类型为 输入项
    name: 'name',
    message: '请输入项目名称',
    default: 'vue-template'
  },
  {
    type: 'input', // 类型为 输入项
    name: 'description',
    message: '请输入项目描述',
    default: 'this is a description'
  },
  {
    type: 'input', // 类型为 输入项
    name: 'author',
    message: '请输入项目作者',
    default: 'Manfray'
  },
  {
    type: 'list', // 即类型为 选择项
    name: 'module', // 名称，作为下面 generator 函数 options 的键
    message: '请选择你要生成的模块', // 提示语
    choices: [
      { name: 'Module1', value: 'module1' },
      { name: 'Module2', value: 'module2' },
      { name: 'Module3', value: 'module3' }
    ],
    default: 'module0',
  },
  {
    type: 'input', // 类型为 输入项
    name: 'moduleName',
    message: '请输入模块名称',
    default: 'myModule'
  }
]