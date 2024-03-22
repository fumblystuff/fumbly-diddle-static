// module.exports = {
//   eleventyComputed: {
//     eleventyNavigation: {
//       url: (data) => {
//         return data.collections.product[0].url;
//       },
//     }
//   }
// };

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


// module.exports = {
//   eleventyComputed: {
//     eleventyNavigation: {
//       url: 'this is a test',
//     }
//   }
// };


// https://discord.com/channels/741017160297611315/1210750763685511168

// module.exports = () => ({
//   eleventyComputed: {
//     foo: (data) => {
//       const fooCollection = data.collections.foo;
//       const firstPost = fooCollection[0];
//       return firstPost.page.url; // this may need to be firstPost.data.page.url but I can never remember which to use where
//     },
//     // alternative formulation: foo: (data) => data.collections.foo[0].page.url
//   },
// });