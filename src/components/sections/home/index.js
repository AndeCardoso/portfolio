import Image from '../../dumb/img';
import Logo from '../../../img/logo-big.svg'
import * as S from './styled'

const Home = () => {
    return (
        <S.Section id="home">
            <S.Container >
                <S.Content>
                    <S.Greeter>Olá!</S.Greeter>
                    <S.MainWrote>Meu nome é Anderson Cardoso</S.MainWrote>
                    <S.Function>Sou desenvolvedor FullStack JavaScript</S.Function>
                </S.Content>
                <Image path={Logo} type='Logo'/>
            </S.Container>
        </S.Section>
    )
}

export default Home;