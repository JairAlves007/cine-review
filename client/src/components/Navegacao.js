import { Link } from 'react-router-dom';

import '../style/nav.css';

function Navegacao() {
   return (
      <nav>
         <Link to='/' className='paragraph'>
            Home
         </Link>

         <Link to='/api/get' className='paragraph'>
            Ver Reviews
         </Link>

         <Link to='/api/insert' className='paragraph'>
            Adicione Sua Review
         </Link>
      </nav>
   );
}

export default Navegacao;