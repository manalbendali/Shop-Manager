import React, { useEffect, useState } from 'react'
import { getArticles ,deleteArticle,searchArticle } from '../Services/Service';
import { BrowserRouter , Router, Routes, Route,Link } from 'react-router-dom';
import './Article.css';
import EditArticle from './EditArticle';


function Article() {
    //get article
    const [articles,setArticles]=useState({
        current_page:2,
        data:[],
        totalPages:3,
    });
    const handleGetArticles=(page)=>{
        getArticles(page)
        .then(resp=>{
            setArticles({
                ...articles,data:resp.data.data,current_page:page,totalPages:resp.data.last_page
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        handleGetArticles(articles.current_page);
    },[])

    //delete article
    const handleDelete =(article)=>{
        deleteArticle(article).then(resp=>{
            handleGetArticles(articles.current_page);
        }).catch(err=>console.log(err));
        
    }

    //search article
    const [searchBar,setSearchBar]=useState('');
    const handleForm=(event)=>{
        setSearchBar({
            'search':event.target.value
        })
    }
   

    const handleSubmit=(event)=>{
        event.preventDefault();
        searchArticle(searchBar).then(resp=>{
            setArticles({data:resp.data})
        }).catch(err=>{
            console.log(err)
        })

    }

  return (
    <div className='container'>
        <div className='card'>
            <div className='card-body'>
                <form onSubmit={handleSubmit} >
                    <div className='row g-2'>
                        <div className='col-auto'>
                            <input name='search' value={searchBar.search} onChange={handleForm} className='form-control' placeholder='name...'></input>
                            {searchBar && <button onClick={window.location.reload()} class="btn btn-light" id="cross_button"><i class="bi bi-x-lg"></i></button>}
                        </div>
                        <div className='col-auto'>
                            <button className='btn btn-primary'><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <table className='table'>
            <thead>
            <tr>
                <th>id</th><th>name</th><th>price</th><th>delete</th><th>update</th>
            </tr>
            </thead>
            <tbody>
            {  
                articles.data.map((article)=>(
                    <tr key={article.id}>
                        
                        <td>{article.id}</td>
                        <td>{article.title}</td>
                        <td>{article.price}</td>
                        <td>
                            <button onClick={()=>handleDelete(article)} className='btn btn-outline-danger'>
                                <i className="bi bi-trash"></i>
                            </button>
                        </td>
                        <td>
                            <EditArticle id={article.id} title={article.title} price={article.price}/>
                        </td>
                        <td>
                            {console.log(article.id)}
                            {console.log(article.title)}
                            <Link className='btn btn-outline-primary' to={{
                                                                            pathname:'/UpdateArticle',
                                                                            state: {
                                                                            id: article.id,
                                                                            title: article.title,
                                                                            price: article.price,
                                                                            
                                                                            }
                                                                        }}
                                                                        
                                                                        >
                                                                           
                             <i className="bi bi-arrow-clockwise"></i>
                            </Link>
                        </td>
                    </tr>
                    
                ))
            }
            </tbody>
        </table>
        <br></br>
        <ul className='nav nav-pills'>
            {searchBar ===''&&
                <div className='paging'>
                    {articles.current_page-1>0 &&
                        <li>
                            <button className='btn btn-outline-primary' onClick={()=>handleGetArticles(articles.current_page-1)} ><i class="bi bi-arrow-left"></i></button>
                        </li>
                    }
                    <li>
                        <button className='btn btn-outline-primary ms-2'>{articles.current_page-1>0?articles.current_page-1:<i class="bi bi-slash"></i>}</button>
                    </li>
                    <li>
                        <button className='btn btn-primary ms-2 '>{articles.current_page}</button>
                    </li>
                    <li>
                        <button className='btn btn-outline-primary ms-2'>{articles.current_page+1<=articles.totalPages?articles.current_page+1:<i class="bi bi-slash"></i>}</button>
                    </li>
                    {articles.current_page+1<=articles.totalPages&&
                        <li>
                            <button className='btn btn-outline-primary ms-2'onClick={()=>handleGetArticles(articles.current_page+1)} ><i class="bi bi-arrow-right"></i></button>
                        </li>
                    }
                </div>
            }
        </ul>
    </div>
  );
}

export default Article