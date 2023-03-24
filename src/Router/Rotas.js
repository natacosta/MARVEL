import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import Inicial from '../Pages/Inicio';
import Detalhes from '../Pages/Detalhes';
import Navbar from '../Components/NavBar'
import Carrinho from '../Pages/Carrinho';

export default function Rotas() {

    return (
        <Router>
            <Navbar />
            <Container >
                <Routes>
                    <Route exact path='/' element={<Inicial />} />
                    <Route path='/detalhes' element={<Detalhes />} />
                    <Route path='/carrinho' element={<Carrinho />} />
                </Routes>
            </Container>
        </Router>
    )
}