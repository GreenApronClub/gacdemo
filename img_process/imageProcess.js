const Jimp = require('jimp');

exports.processImage = (image) => {
    Jimp.read(image, function (err, processedImage) {
      if (err) throw err;
      processedImage.resize(256, 170)            // resize
           .write(image); // save
  });
}
