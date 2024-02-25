import axios from 'axios';
export const articleApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
});


//get function
export const getArticles=(current_page)=>{
    return articleApi.get(`articles?page=${current_page}`);
}
//post methode
export const addArticle=(article)=>{
    return articleApi.post('articles',article);
}
//delete methode
export const deleteArticle=(article)=>{
    return articleApi.delete(`articles/${article.id}`);
}
//search bmethod
export const searchArticle=(name)=>{
    return articleApi.get(`articlesShow/${name.search}`);
}
//update method
export const updateArticule=(article)=>{
    return articleApi.put(`articles/${article.id}`,article);
}
