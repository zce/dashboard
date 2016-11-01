module.exports = {
  // base standard code style
  'extends': 'standard',
  // add your custom plugins here
  'plugins': [
    // required to lint *.vue files
    'html',
    'promise',
    'standard'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
