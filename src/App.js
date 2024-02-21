import './App.css';
import Perfil from './componentes/Perfil';
import Contador from './componentes/Contador';

function App() {
  //Declarar un nuevo estado del contador
 // const [contador, setContador] = useState(0);
  return (
    <div className="App">
     <div class ='contenedor-principal'>
      <h1>Mis desarrolladores favoritos son</h1>
      <Perfil 
        nombre='Brais Moure'
        pais='España'
        imagen='brais'
        cargo='Ingeniero de Software'
        empresa='MoureDev'
        perfil='Es un Youtuber español, es el fundador de la empresa de desarrollo de software MoureDev'
        linkedin='https://www.linkedin.com/in/braismoure'
        youtube='https://www.youtube.com/c/MouredevApps'
        instagram='https://www.instagram.com/mouredev/'
      />
      <Perfil 
        nombre='Facundo'
        pais='Argentina'
        imagen='facundo'
        cargo='Ingeniero de Software'
        empresa='Platzi'
        perfil='Es un Youtuber Argentino, es el fundador de la empresa de desarrollo de software LoremIpsum'
        linkedin='https://www.linkedin.com/'
        youtube='https://www.youtube.com/'
        instagram='https://www.instagram.com/'
      />
     </div>
    </div>
  );
}

export default App;