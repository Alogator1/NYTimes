let articles = [];
const API_KEY = "sigarPXFXauqfNcEAhXENrA8rFe0l5nG";
const url = "https://api.nytimes.com/svc/news/v3/content/all/all.json";
fetch(url + "?limit=100&api-key=" + API_KEY, {
  method: "GET",
  withCredentials: true,
})
  .then((resp) => resp.json())
  .then(function (data) {
    data.results.map((article, index) => {
      articles.push({
        title: article.title,
        _id: article.slug_name,
        lead_paragraph: article.abstract,
        source: article.source,
      });
    });
  })
  .catch(function (error) {
    console.log(error);
  });

export const getArticles = () => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: "FETCH_ARTICLES_SUCCESS", payload: articles });
  }, 0);
};
