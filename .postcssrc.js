// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    'postcss-px-to-viewport': {
      // options
      unitToConvert: 'px',//(String) 需要转换的单位，默认为"px"
      viewportWidth: 1260, // (Number) 设计稿的视口宽度，一般是750
      unitPrecision: 3, //  (Number) 单位转换后保留的精度（很多时候无法整除）
    }
  }
}
