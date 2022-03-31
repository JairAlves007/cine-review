import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/showReviews.css';
import img from '../img/Get_BG.jpg';

import Axios from 'axios';

function ShowReviews() {
   const [reviewsList, setReviewList] = useState([]);

   const [newReview, setNewReview] = useState([]);

   useEffect(() => Crud.get());

   const Crud = {
      get: () => {
         Axios.get('http://localhost:3001/api/get')
            .then(response => {
               setReviewList(response.data);
            });
      },

      update: (id, review) => {
         Axios.put(`http://localhost:3001/api/update/`, {
            id: id,
            newReview: review
         })

         window.location.reload(`/api/get/#section${id}`);
      },

      delete: id => {
         const requestUser = window.confirm('Você Realmente Deseja Deletar Esta Review?');

         if (requestUser) {
            Axios.delete(`http://localhost:3001/api/delete/${id}`);
         }
   
         window.location.reload(`/api/get/`);
      }
   }

   const Modal = {
      show: id => {
         setNewReview('');

         const form = document.getElementById(`#form${id}`);

         document.body.classList.add('hideScroll');
         form.classList.add('show');
      },

      close: id => {
         setNewReview('');

         const form = document.getElementById(`#form${id}`);

         document.body.classList.remove('hideScroll');
         form.classList.remove('show');
      }
   }

   const changeReview = e => {
      setNewReview(e.target.value);
   }

   return (
      <div>
         <div className='container'>
            <img src={img} alt='Imagem Da Seção' id="img_showReviews" />

            <div className="content-container">
               <h1 className='title'>CineReview</h1>
               <h2 className='paragraph'>
                  Mostre todo seu conhecimento cinéfilo em nossa plataforma.
               </h2>
               <p className='paragraph'>
                  nesta seção, você poderá visualizar todas as reviews
                  publicadas por nossos usuários logo abaixo.
               </p>
               <p className='paragraph'>
                  caso deseje, <Link to='/api/insert'> Adicione </Link> uma
                  agora mesmo!
               </p>
            </div>
         </div>

         <h1 id='title-review'>Reviews Dos Filmes</h1>

         <div id="cards">

            {
               reviewsList.length > 0 && reviewsList.map(review => {

                  return (
                     <div key={review.id}>
                        <div className="card" id={`#section${review.id}`}>
                           <h1 className='title'>{review.movie}</h1>

                           <div className="reviewText">
                              <p className='paragraph'>{review.review}</p>
                           </div>

                           <div className="card-actions">

                              <button
                                 className='btn-edit'
                                 onClick={() => Modal.show(review.id)}
                              >
                                 <i className="material-icons">create</i>
                              </button>

                              <button
                                 className='btn-delete'
                                 onClick={() => Crud.delete(review.id)}
                              >
                                 <i className="material-icons">delete</i>
                              </button>
                           </div>
                        </div>

                        <div className="form-edit hide" id={`#form${review.id}`}>

                           <div
                              className='close'
                              onClick={() => Modal.close(review.id)}
                           >
                              X
                           </div>

                           <h1>Editar Review Do Filme "{review.movie}"</h1>

                           <label>Review Atual Do Filme </label>

                           <div className="currentReview">
                              "{review.review}"
                           </div>

                           <textarea
                              cols="30"
                              rows="10"
                              id='text'
                              placeholder='Adicione A Nova Review Aqui'
                              value={newReview}
                              onChange={changeReview}
                           >
                           </textarea>

                           <div className="btn-group">
                              <button
                                 onClick={ () => Crud.update(review.id, newReview) }
                                 className='edit'
                              >
                                 Editar Review
                              </button>
                           </div>

                        </div>
                     </div>
                  )
               })
            }
         </div>
      </div>

   )
}

export default ShowReviews;