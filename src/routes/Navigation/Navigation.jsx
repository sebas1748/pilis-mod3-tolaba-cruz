import './Navigation.css';
import { useContext, useEffect,useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import weatherLogo from '../../assets/hot-cold.png';
import logoEdep from '../../assets/edep.png';
// import Modal from '../../components/Modal/Modal';

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    //const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const userStored = localStorage.getItem('currentUser')
        console.log({userStored})
        if (userStored) {
          setCurrentUser(JSON.parse(userStored))
        }
      }, [])

    const handleSignOut = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
    }

    return (
        <div>
            <div className="navigation">
                <div className="logo-container">
                    <div className="logo">
                        <Link>
                            <img src={weatherLogo} alt="Logo"/>
                        </Link>
                        <div>
                            <p className="text-weather">Project Weather</p>
                        </div>
                    </div>
                    <div className="logo-edep">
                        <img src={logoEdep} alt="logoedep"/>    
                    </div>
                </div>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/' >
                        Inicio
                    </Link>
                    {currentUser ? (
                        <Link className="nav-link" to='weather/create'>
                            Nueva Ubicación
                        </Link>
                    ) : (
                        <span className="nav-link">Nueva Ubicación</span>
                        // <div className='nav-link'>
                        //     {modalOpen && <Modal setOpenModal={setModalOpen} />}
                        //         <button onClick={() => {setModalOpen(true);}}>
                        //             Nueva Ubicación
                        //         </button>
                        // </div>
                    )}

                    {currentUser ? (
                        <span className="nav-link" onClick={handleSignOut}>
                            Cerrar Sesión
                        </span>
                    ) : (
                        <Link className="nav-link" to='/login'>
                            Iniciar Sesión
                        </Link>
                    )}
                </div>
            </div>
            <Outlet/>
        </div>        
    );
}

export default Navigation