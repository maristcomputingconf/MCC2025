// .eleventy.js

export default function(eleventyConfig) {

  // Pass through the 'public' folder to the output
  eleventyConfig.addPassthroughCopy({ "public": "/" });

  // Make sure assets are copied
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    // JIC: site name if change needed again
    pathPrefix: "/MCC2025/"
  };
}
