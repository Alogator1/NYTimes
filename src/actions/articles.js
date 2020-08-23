let articles = [];
const API_KEY = "sigarPXFXauqfNcEAhXENrA8rFe0l5nG";
  const url = "https://api.nytimes.com/svc/archive/v1/2019/1.json";
fetch(url + "?api-key=" + API_KEY, {
  method: "GET",
  withCredentials: true
})
  .then(resp => resp.json())
  .then(function(data) {
    data.response.docs.map((article, index)=>{
      articles.push({
        title: article.abstract,
        _id: article._id,
        lead_paragraph: article.lead_paragraph,
        source: article.source
      })
    })
  })
  .catch(function(error) {
    console.log(error);
  });

export const getArticles = () => (dispatch) => {
  setTimeout(() => {
    console.log(articles);
    dispatch({ type: "FETCH_ARTICLES_SUCCESS", payload: articles});
  }, 0);
};
