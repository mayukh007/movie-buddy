const key  = '3743c41d2cf48723c849ec9a28375fbe'

const request= {
    fetchTrending:'/trending/all/week?api_key='+key+'&language=en-US',
    fetchLatest:'/movie/now_playing?api_key=3743c41d2cf48723c849ec9a28375fbe&language=en-US',
    fetchTopRated:'/movie/top_rated?api_key='+key+'&language=en-US&vote_count.gte=50',
    fetchActionMovies: '/discover/movie?api_key='+key+'&language=en-US&sort_by=vote_average.desc&with_genres=28&vote_count.gte=50',
    fetchDramaMovies:'/discover/movie?api_key='+key+'&language=en-US&sort_by=vote_average.desc&with_genres=18&vote_count.gte=50',
    fetchComedyMovies:'/discover/movie?api_key='+key+'&language=en-US&sort_by=vote_average.desc&with_genres=35&vote_count.gte=50',
    fetchRomanceMovies:'/discover/movie?api_key='+key+'&language=en-US&sort_by=vote_average.desc&with_genres=10749&vote_count.gte=50',
    fetchDocumentaries:'/discover/movie?api_key='+key+'&language=en-US&sort_by=vote_average.desc&with_genres=99&vote_count.gte=50',
}

export default request