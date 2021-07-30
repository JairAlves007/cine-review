import { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import '../style/form.css';

function InsertReview() {

   const [movie, setMovie] = useState('');
   const [review, setReview] = useState('');

   const changeMovie = e => {
      setMovie(e.target.value);
   }

   const changeReview = e => {
      setReview(e.target.value);
   }

   const sendReview = () => {
      Axios.post('http://localhost:3001/api/insert', {
         movie: movie,
         review: review
      });

      setMovie('');
      setReview('');

      alert('Inserido Com Sucesso');
   }

      return (
         <div>
            <div className='container'>
               <div className="content-container">
                  <h1 className='title'>CineReview</h1>
                  <h2 className='paragraph'>
                     Mostre todo seu conhecimento cinéfilo em nossa plataforma.
                  </h2>
                  <p className='paragraph'>
                     nesta seção, você poderá adicionar suas reviews
                     sobre qualquer filme, aqui você tem uma experiência 
                     de crítico profissional.
                  </p>
                  <p className='paragraph'>
                     seja criativo! muitas pessoas poderão
                     visualizar sua publicação! caso deseje visualizar
                     outras postagens, clique <Link to='api/get'> aqui </Link>
                     agora mesmo!
                  </p>
               </div>
            </div>


            <div className = 'form'>
               <h1 className = 'title'>Adicione Sua Review</h1>
               
               <label className = 'paragraph'>Nome Do Filme: </label>
               <input 
                  type="text"
                  placeholder = 'Adicione aqui o nome do filme'
                  value = { movie }
                  onChange = { changeMovie }
               />

               <label className = 'paragraph'>Review Do Filme: </label>

               <textarea 
                  placeholder = 'Adicione aqui sua review'
                  value = { review }
                  onChange = { changeReview }
               ></textarea>

               <div className="btn-group">
                  <button onClick = { sendReview }>
                     Adicionar Minha Review
                  </button>
               </div>

            </div>

         </div>
      );
}

export default InsertReview;