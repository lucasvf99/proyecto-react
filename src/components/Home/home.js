//External componets 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//Assets
import logo from '../Assets/logo-app.webp'
//Style 
import './home.css'



const HomePage = () =>  {
    return (
        <div className='app-home'>
            <h1 className='title-home'>  Nombre de la App </h1>
                <div className='box-img-home'>
                    <img src={logo} className='img-home'></img>
                </div>  
                    <h3 className='title-home'>
                            ¿Tienes una cuenta? <span>Ingrese aqui</span>
                    </h3>
                            <div className='input-home'>
                                <TextField label='Email'/>
                                <TextField label ='Contraseña'/>
                                <Button variant="contained">Iniciar Secion</Button>
                            </div>
                            <Button variant="outlined">¿No tienes cuenta? Preciona aqui</Button>
    </div>
    )
    
}

export default HomePage ;