// https://discord.com/channels/741017160297611315/1210750763685511168

module.exports = {
  eleventyComputed: {
    eleventyNavigation: {
      url: (data) => {
        console.dir(data);
        console.dir(data.collections);
        console.dir(data.collections.product);
        const productCollection = data.collections.product;
        const firstPost = productCollection[0];
        return firstPost.url;
      },
    }
  }
};

// // Shorter version
// module.exports = {
//   eleventyComputed: {
//     eleventyNavigation: {
//       url: (data) => {
//         return data.collections.product[0].url;
//       },
//     }
//   }
// };

// module.exports = {
//   eleventyComputed: {
//     eleventyNavigation: {
//       url: 'this is a test',
//     }
//   }
// };
