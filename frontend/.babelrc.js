
const plugins = [
  [
    'babel-plugin-import',
    {
      'libraryName': '@material-ui/core',
      // Use "'libraryDirectory': ''," if your bundler does not support ES modules
      'libraryDirectory': 'esm',
      'camel2DashComponentName': false
    },
    'core'
  ]
];

module.exports = { plugins };
