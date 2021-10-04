import Image from '../../dumb/img';
import { Button } from '../../dumb/button';
import Perfil from '../../../img/perfil.png';
import { AiFillGithub, AiFillLinkedin, AiFillMessage } from "react-icons/ai";

import * as S from './styled';

const About = () => {
    return (
        <S.Section id="about">
            <S.Container>
                <Image path={Perfil} type='Perfil' />
                <S.Content>
                    <S.Title><AiFillMessage />Sobre</S.Title>
                    <S.Paragraph>
                    {/* Desenvolvedor Front-End por natureza, mas nunca esquecendo da necessidade incontestável do Back-End, busco o aprendizado
                    constante para que sempre tenha as melhores formas de resolver os problemas que chegarem. */}
                    Estudo programação desde muito jovem, e no final do ensino médio pude ingressar na faculdade de Análise e Desenvolvimento de Sistemas
                    pela ULBRA/Torres, onde pude conhecer as inumeras vertentes dessa área, mas logo me apaixonando pelo Front-End, este que me propus em
                    focar.
                    <br />
                    Atualmente voltando aos estudos de programação, após um hiato de 4 anos, escolhi a stack de JavaScript como alicerce, porem sempre
                    estarei disposto a aprender novas tecnologias, linguagens e frameworks, porque pra mim a liberdade do intelecto esta nos estudos.
                    </S.Paragraph>
                    <S.Buttons>
                        <Button to="https://www.linkedin.com/in/anderson-cardoso-781b56102/" ><AiFillLinkedin />Linkedin</Button>
                        <Button to="https://github.com/AndeCardoso" ><AiFillGithub />Github</Button>
                    </S.Buttons>
                </S.Content>
            </S.Container>
        </S.Section>
    )
}

export default About;