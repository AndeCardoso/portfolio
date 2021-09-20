import Image from '../../dumb/img';
import Logo from '../../../img/logo-big.svg'
import * as S from './styled'

const Home = () => {
    return (
        <S.Banner id="home">
            <S.Content>
                <S.Greeter>SALVE!</S.Greeter>
                <S.MainWrote>Aqui é o Anderson Cardoso</S.MainWrote>
                <S.Function>JavaScript Full-Stack Web Dev</S.Function>
            </S.Content>
            <Image path={Logo} type='Logo'/>
        </S.Banner>
    )
}

export default Home;