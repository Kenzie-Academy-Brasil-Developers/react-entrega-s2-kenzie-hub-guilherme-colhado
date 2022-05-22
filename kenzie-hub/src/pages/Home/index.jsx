import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { kenziehub } from '../../services/api'
import { HeaderHome, HomeStyled, SecaoAdd, SecaoSobre, SecaoTec, SecaoTecs } from './style'
import img from '../../Imgs/LogoPequeno.svg'
import mais from '../../Imgs/mais.svg'
import { ButtonStyled } from '../../components/Buttons'
import { ModalCadastrar } from '../../components/CadastrarTecnologia'
import { CardTech } from '../../components/CardTech'
export const Home = () => {
    const [userAtual, setUserAtual] = useState({});
    const [modalCadastro, setModalCadastro] = useState(false);
    
    const atualiza = () => {
        kenziehub.get(`/users/${localStorage.getItem('@KenzieHub: Id')}`)
        .then(res=>setUserAtual(res.data))
        .catch(err=>console.log(err))
    }

    atualiza()

    if(!localStorage.getItem('@KenzieHub: Token')) {
        return <Navigate to={'/login'}/>   
    }

    const sair = () => {
        localStorage.removeItem('@KenzieHub: Id')
        localStorage.removeItem('@KenzieHub: Token')
    }

    return <HomeStyled>
        <HeaderHome>
            <img src={img} alt="KenzieHub"/>
            <ButtonStyled color='gray3' hover='gray4' onClick={sair}>Sair</ButtonStyled>
        </HeaderHome>
        <hr />
        <SecaoSobre>
            <h2>Ola, {userAtual.name}</h2>
            <h3>{userAtual.course_module}</h3>
        </SecaoSobre>
        <hr />
        <SecaoTec>
            <SecaoAdd>
                <h4>Tecnologias</h4>
                <ButtonStyled color='gray3' hover='gray4' type='button' onClick={()=>setModalCadastro(true)}><img src={mais} alt='+'/></ButtonStyled>
            </SecaoAdd>
            <SecaoTecs>
                <ul>
                    {userAtual.techs?.map(tech=><CardTech key={tech.id} funcao={atualiza} tech={tech}></CardTech>)}
                </ul>
            </SecaoTecs>
        </SecaoTec>
        <ModalCadastrar funcao={atualiza} setModalCadastro={setModalCadastro} modalCadastro={modalCadastro}/>
    </HomeStyled>
}