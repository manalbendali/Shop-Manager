import React, { useState } from 'react'
import { addArticle } from '../Services/Service'

function NewArticle() {
    const [formData,setFormData]=useState({
        title:"",
        price:0
    })

    const handleForm=(event)=>{
        setFormData(prevFormData =>{
            return{
                ...prevFormData,[event.target.name]:event.target.value
            }
        })
    }

  const handleSubmit=(event)=>{
    event.preventDefault();
    addArticle(formData).then(resp=>{
        alert(JSON.stringify(resp.data))
    }).catch(err=>{
        console.log(err)
    })

  }
  return (
    <form className='p-3 m-2' onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="articleName">Article Name</label>
            <input name='title' value={formData.title} onChange={handleForm} type="text" className="form-control" id="articleName" placeholder="Enter le nom "/>
        </div>
        <div className="form-group">
            <label htmlFor="articlePrice">Price</label>
            <input name='price' value={formData.price} onChange={handleForm} type="text" className="form-control" id="articlePrice" placeholder="price"/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default NewArticle