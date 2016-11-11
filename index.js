var fs = require('fs-extra');
var path = require('path');

module.exports = function(config){
  var config = config || {};
  var output = config.output;
  return function() {
    this.plugin('done', function (stats) {
      const {
        hash,
        assetsByChunkName: assets,
        publicPath
      } = stats.toJson();
      if(!output) output = this.outputPath;
      fs.mkdirsSync(output);
      fs.writeFileSync(
        path.resolve(output, './assets.json'),
        JSON.stringify({ hash, assets }, null, 2)
      );
    });
  }
};
