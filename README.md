# assets-json-webpack-plugin
output assets json

```javascript
const AssetsJSONPlugin = require('assets-json-webpack-plugin');
module.exports = {
  ...
  plugins: [
    new AssetsJSONPlugin({output: path.resolve(__dirname, './public')})
  ]
}
```
