import { NavbarContainer, LogoDaMarvel, ConatienrIconeCarrinho, ConatienrIconeCarrinhoAtivo } from '../Style/Navbar/NavbarStyles'
import { FaCartArrowDown } from 'react-icons/fa'
import logo from '../Style/Navbar/logo1.png'
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";


export default function NavBar() {


    const [itensDoCarrinho, setIensDoCarrinho] = useState(false);
    const [qunatidade, setQuantidade] = useState(0);
    const itens = useSelector(state => state.carrinho.obj)

    useEffect(() => {
        if (itens.length) {
            setIensDoCarrinho(true)
            setQuantidade(itens.length)
        }
    }, [itens]);


    return (
        <>
            <NavbarContainer id='navBar'>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/'>
                                <LogoDaMarvel src={logo}></LogoDaMarvel>
                            </NavLink>
                        </li>

                        {itensDoCarrinho ?

                            <ConatienrIconeCarrinhoAtivo id="carrinho">
                                <NavLink to="/carrinho">
                                    <FaCartArrowDown></FaCartArrowDown>
                                </NavLink>
                                {qunatidade}
                            </ConatienrIconeCarrinhoAtivo>

                            :

                            <ConatienrIconeCarrinho>
                                <NavLink to="/carrinho">
                                    <FaCartArrowDown></FaCartArrowDown>
                                </NavLink>
                            </ConatienrIconeCarrinho>
                        }
                    </ul>
                </nav>
            </NavbarContainer>
        </>
    )
}