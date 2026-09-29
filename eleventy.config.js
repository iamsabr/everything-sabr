module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("_headers");

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: ".",
      output: "_site",
    },
  };
};
