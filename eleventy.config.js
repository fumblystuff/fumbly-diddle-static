const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const pluginDate = require('eleventy-plugin-date');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const embedYouTube = require('eleventy-plugin-youtube-embed');
const pluginImages = require("./eleventy.config.images.js");

// Transforms
// https://learneleventyfromscratch.com/lesson/31.html#minifying-html-output
const htmlMinTransform = require('./src/transforms/html-min.js');

// Create a helpful production flag
const isProduction = process.env.NODE_ENV === 'production';

module.exports = eleventyConfig => {

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(embedYouTube);
  eleventyConfig.addPlugin(pluginDate);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginImages, { debugMode: false });

  // https://github.com/11ty/eleventy/issues/2301
  const mdOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };
  const markdownLib = markdownIt(mdOptions)
    .use(markdownItAttrs)
    .disable("code");

  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addCollection('productList', function (collection) {
    return collection.getFilteredByGlob("src/products/**/*.md")
      .sort((a, b) => a.data.title.localeCompare(b.data.title))
  });

  eleventyConfig.addShortcode("FirstProductUrl", async function () {
    console.log('#####');
    let products  = collection.getFilteredByGlob("src/products/**/*.md")
    .sort((a, b) => a.data.title.localeCompare(b.data.title));
    console.dir(products);
    return products[0].url;
  });

  eleventyConfig.addShortcode("GetKeywords", function (categories) {
    return categories.join(", ");
  });

  // From ray camden's blog, first paragraph as excerpt
  eleventyConfig.addShortcode('excerpt', post => extractExcerpt(post));

  async function extractExcerpt(post) {
    const noContent = '<p>No page content found.</p>'
    // No page content?
    if (!post.templateContent) return noContent;
    let pageContent = post.templateContent;
    // remove headings (H1, H2, etc.)
    pageContent = pageContent.replace(/<(h[2-4])>((?:(?!<h\d+\b).)+?)<\/\1>/gm, '');
    // remove picture tags
    pageContent = pageContent.replace(/<picture[^>]*>(.*?)<\/picture>/gm, '');
    // remove standalone IMG tags (just in case)
    pageContent = pageContent.replace(/<img[^>]*>/gm, '');
    // remove empty paragraph tags
    pageContent = pageContent.replace(/<p>\s<\/p>/g, '');
    pageContent = pageContent.replace(/<p><\/p>/g, '');

    if (pageContent.indexOf('</p>') > 0) {
      let start = pageContent.indexOf('<p>');
      let end = pageContent.indexOf('</p>');
      let theExcerpt = pageContent.substr(start, end + 4);
      // console.log(theExcerpt);
      return theExcerpt;
    }
    return noContent;
  }

  // https://www.raymondcamden.com/2020/06/24/adding-algolia-search-to-eleventy-and-netlify
  // Remove <code>.*</code>, remove HTML, then with plain text, limit to 5k chars
  eleventyConfig.addFilter('algExcerpt', function (text) {
    //first remove code
    text = text.replace(/<code class="language-.*?">.*?<\/code>/sg, '');
    //now remove html tags
    text = text.replace(/<.*?>/g, '');
    //now limit to 5k
    return text.substring(0, 5000);
  });

  eleventyConfig.addFilter("commaize", function (num, locale = "en-us") {
    return num.toLocaleString(locale);
  });

  eleventyConfig.addFilter("dateOnly", function (dateVal, locale = "en-us") {
    var theDate = new Date(dateVal);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return theDate.toLocaleDateString(locale, options);
  });

  eleventyConfig.addFilter('jsonify', function (variable) {
    return JSON.stringify(variable);
  });

  eleventyConfig.addFilter("truncate", function (num) {
    return Math.trunc(num);
  });

  // https://www.lenesaile.com/en/blog/organizing-the-eleventy-config-file/
  // Copy the favicon files to the root folder
  eleventyConfig.addPassthroughCopy({ 'src/favicon/*': '/' });
  // copy the rest of the files
  [
    // Data files
    "src/_data/",
    // Template files
    "src/assets/css/",
    "src/assets/js/",
    "src/assets/sass/",
    "src/assets/webfonts/",
    "src/images/"
  ].forEach((path) => {
    eleventyConfig.addPassthroughCopy(path);
  });

  // Only minify HTML if we are in production because it slows builds
  if (isProduction) {
    eleventyConfig.addTransform('htmlmin', htmlMinTransform);
  }

  return {
    dir: {
      input: 'src',
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    }
  }
};