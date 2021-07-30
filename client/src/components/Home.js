import { Link } from 'react-router-dom';

import '../style/home.css';
import img from '../img/Insert_BG.jpg';

function Home() {
   return (
      <div className = 'container'>
         <img src = { img } alt = 'Imagem Da Homepage' id="img_home"></img>

         <div className="content-container">
            <h1 className = 'title'>CineReview</h1>
            <h2 className = 'paragraph'>
               Mostre todo seu conhecimento cinéfilo em nossa plataforma.
            </h2>
            <p className = 'paragraph'>
               Aqui você pode <Link to = '/api/get'> ver reviews </Link>
               de outros usuários e também 
               <Link to = '/api/insert'> adicionar </Link> 
               sua própria review!
            </p>
         </div>
      </div>
   );
}

export default Home; 