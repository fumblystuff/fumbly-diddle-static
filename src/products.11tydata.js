// https://discord.com/channels/741017160297611315/1210750763685511168

module.exports = {
  eleventyComputed: {
    eleventyNavigation: {
      url: (data) => {
        const productCollection = data.collections.productList;
        if (productCollection.length > 0) {
          return productCollection[0].page.url;
        }
      },
    }
  }
};
