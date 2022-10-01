const axios = require("axios");

const mapTranslatedUrlsToPages = {
  freelance_react_developer: "/freelanceReactDeveloperPage",
};

module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const apiKey = "LGIYdy7QOl0BUjVuvoydbA";
    const { data } = await axios.get(
      `https://api.i18nexus.com/project_resources/translations.json?api_key=${apiKey}`
    );

    let pathObj = {};

    for (let lang in data) {
      const { paths } = data[lang];

      for (let path in paths) {
        pathObj[`/${lang}/${paths[path]}`] = {
          page: mapTranslatedUrlsToPages[path],
        };
      }
    }

    console.log(pathObj);

    return {
      "/": { page: "/" },
      "/freelance-react-developer": { page: "/freelanceReactDeveloperPage" },
      "/blogs": { page: "/blogsPage" },
      //TODO:- build blog url multilingual
      ...pathObj,
    };
  },
};
