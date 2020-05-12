const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("icons");
  eleventyConfig.addPassthroughCopy("src-sw.js");
  eleventyConfig.addPassthroughCopy("manifest.json");
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });

      return minified;
    }

    return content;
  });
};