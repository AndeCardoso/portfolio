import Image from '../../dumb/img';
import Logo from '../../../img/logo-big.svg'
import * as S from './styled'

const Home = () => {
    return (
        <S.Section>
            <S.Container id="home">
                <S.Content>
                    <S.Greeter>SALVE!</S.Greeter>
                    <S.MainWrote>Aqui é o Anderson Cardoso</S.MainWrote>
                    <S.Function>Desenvolvedor Full-Stack JavaScript</S.Function>
                </S.Content>
                <Image path={Logo} type='Logo'/>
            </S.Container>
        </S.Section>
    )
}

export default Home;