const i18n = require('./filters/i18n.js');

module.exports = {
  eleventyComputed: {
    title: (data) => {
      return i18n(data.title);
    },
    metaDesc: (data) => {
      return i18n(data.metaDesc);
    },
  },
};
