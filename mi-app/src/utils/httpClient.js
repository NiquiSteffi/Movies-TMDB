const API = "https://api.themoviedb.org/3";

export function httpGet(path) {
    return fetch(API + path, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2JmMTI3MDc4MjhiOGVjNzI2ZmNkY2I1OTViMzg3OCIsInN1YiI6IjYyYWEzNDlhN2I3YjRkMDA1MGM3NDA2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NknTpjCrQ-JuGQearSP6i477X44s9sItxEO-eTZNaAQ",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((result) => result.json())
}