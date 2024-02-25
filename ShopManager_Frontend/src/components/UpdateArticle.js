import React from 'react'
import { updateArticule } from '../Services/Service';

function UpdateArticle(props) {
    console.log(props)
    const [updateData,setUpdateData]= React.useState({
        id:0,
        title:'',
        price:0
    });
    const handleUpdateData=(event)=>{
        setUpdateData(prev=>{
            return{
            ...prev,[event.target.name]:event.target.value
        }
        })
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        updateArticule(updateData).then(resp=>{
            alert("votre donnees ont ete modifie avec succe <3");
        }).catch(err=>{
            console.log(err);
        });
    }

  return (
    <div className='row ms-2'>
        <div className='col-md-8'>
            <div className='card'>
                <div className='card-body'>
                <form className='p-3 m-2' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="articleId">Article id</label>
                        <input name='id' value={updateData.id} onChange={handleUpdateData} type="text" className="form-control" id="articleId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="articleName">Article Name</label>
                        <input name='title' value={updateData.title } onChange={handleUpdateData} type="text" className="form-control" id="articleName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="articlePrice">Price</label>
                        <input name='price' value={updateData.price} onChange={handleUpdateData} type="text" className="form-control" id="articlePrice" placeholder="price"/>
                    </div>
                    <button type="submit" className="btn btn-primary m-2">Submit</button>
                </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default UpdateArticle