import { useState } from 'react';
import { Header } from './componen/header';
import { Footer } from './componen/footer';

const app = () => { 
let name = "lucas";
let age = 30;

const [Bg, setBg ] = useState('#FF0000');

const handleClick = () => {
  setBg('#0000FF');
}

  return (
    <div style={{backgroundColor: Bg}}>
      <Header name={name} age={30}/>
      
     <button onClick={handleClick}>clique aqui</button>

      <Footer />
    </div>
  )
}

export default app;