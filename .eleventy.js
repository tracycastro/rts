const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js");
const dateCompare = require("./src/filters/date-compare.js");
const dateFilter = require("./src/filters/date-filter.js");
module.exports = (config) => {
  config.addPassthroughCopy("./src/images/");
  config.addPassthroughCopy("./src/css");
  config.addPassthroughCopy("./src/js/");
  config.addPassthroughCopy("src/_redirects");
  config.addFilter("dateCompare", dateCompare);
  config.addFilter("dateFilter", dateFilter);
  // Returns rts items, sorted by display order
  config.addCollection("rts", (collection) => {
    return sortByDisplayOrder(collection.getFilteredByGlob("./src/rts/*.md"));
  });

  // Returns rts items, sorted by display order then filtered by featured (sponsorship)
  config.addCollection("featuredRTS", (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob("./src/rts/*.md")
    ).filter((x) => x.data.sponsorship);
  });
  // Returns rts items, sorted by display order then filtered by featured2 (ads)
  config.addCollection("featuredRTS2", (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob("./src/rts/*.md")
    ).filter((x) => x.data.ads);
  });
  // Returns rts items, sorted by display order then filtered by featured3 (business)
  config.addCollection("featuredRTS3", (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob("./src/rts/*.md")
    ).filter((x) => x.data.business);
  });
  // Returns rts items, sorted by display order then filtered by featured4 (headshots)
  config.addCollection("featuredRTS4", (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob("./src/rts/*.md")
    ).filter((x) => x.data.bios);
  });
  // Returns rts items, sorted by display order then filtered by featured5 (googlegroup)
  config.addCollection("featuredRTS5", (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob("./src/rts/*.md")
    ).filter((x) => x.data.googlegroup);
  });
  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
