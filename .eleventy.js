// .eleventy.js

export default function (eleventyConfig) {

  // Pass through the 'public' folder to the output
  eleventyConfig.addPassthroughCopy({ "public": "/" });

  // Make sure assets are copied
  eleventyConfig.addPassthroughCopy("assets");

  // Auto-link "TechMeet" mentions
  eleventyConfig.addFilter("linkTechMeet", function (content) {
    return content.replace(
      /\b(MHV\s*TechMeet|TechMeet)\b/g,
      `<a href="https://bit.ly/mhvtm-2025" target="_blank" rel="noopener noreferrer">$1</a>`
    );
  });

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

