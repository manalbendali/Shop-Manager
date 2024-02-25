import { useState ,React} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateArticule } from '../Services/Service';
import { forwardRef } from 'react';


function EditArticle(props) {
    //state of our forme
    const [formData,setFormData]=useState({
        id:props.id,
        title:props.title,
        price:props.price
    })

    //handle change 
    const handleForm=(event)=>{
        setFormData(prev=>{
          return{  ...prev,[event.target.name]:event.target.value}
    })
    }

    //submut form
    const handleSubmit =(event)=>{
        event.preventDefault();
        updateArticule(formData).then(resp=>{
            alert("votre donnees ont ete modifie avec succe <3");
        }).catch(err=>{
            console.log(err);
        });
    }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <i className="bi bi-arrow-clockwise"></i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form id='signUp' className='p-3 m-2' onSubmit={handleSubmit}>
          <div className="form-group">
              <label htmlFor="articleId">Article id</label>
              <input name='id' value={formData.id}  onChange={handleForm} type="text" className="form-control" id="articleId" />
          </div>
          <div className="form-group">
              <label htmlFor="articleName">Article Name</label>
              <input name='title' value={formData.title} onChange={handleForm} type="text" className="form-control" id="articleName" />
          </div>
          <div className="form-group">
              <label htmlFor="articlePrice">Price</label>
              <input name='price' value={formData.price} onChange={handleForm} type="text" className="form-control" id="articlePrice" placeholder="price"/>
          </div>  
        </form>
        </Modal.Body>
        <Modal.Footer>
          <button  onClick={handleClose} className='btn btn-primary'>
            Close
          </button>
          <button form="signUp"  className='btn btn-primary'>Sign Up</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditArticle;