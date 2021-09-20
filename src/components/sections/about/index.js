import Image from '../../dumb/img';
import { Button } from '../../dumb/button';
import Perfil from '../../../img/perfil.png';
import { AiFillGithub, AiFillLinkedin, AiFillMessage } from "react-icons/ai";

import * as S from './styled';

const About = () => {
    return (
        <S.Section id="about">
            <Image path={Perfil} type='Perfil' />
            <S.Content>
                <S.Title><AiFillMessage />Sobre</S.Title>
                <S.Paragraph>
                    Lorem ipsum dolor sit amet. Quo maiores rerum est quia commodi ea dolores deleniti ut dolorum exercitationem et iste voluptas eum omnis. Eum pariatur recusandae id eveniet quia qui ducimus nihil vel odit nesciunt nam nesciunt voluptatem aut tempore facere eos iste totam. 33 harum dicta quo dolore corrupti ut praesentium natus ut reprehenderit autem.
                </S.Paragraph>
                <S.Buttons>
                    <Button to="https://www.linkedin.com/in/anderson-cardoso-781b56102/" ><AiFillLinkedin />Linkedin</Button>
                    <Button to="https://github.com/AndeCardoso" ><AiFillGithub />Github</Button>
                </S.Buttons>
            </S.Content>
        </S.Section>
    )
}

export default About;