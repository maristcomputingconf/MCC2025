export default function(eleventyConfig) {
  // Pass through the 'public' folder to the output
  eleventyConfig.addPassthroughCopy({ "public": "/" });
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
    pathPrefix: "/TechMeet2025/"
  };
}
