import * as S from './styled';
import { AiFillCode } from "react-icons/ai";
import { DiCss3, DiJavascript, DiHtml5, DiReact, DiGitBranch } from "react-icons/di";
import { SiStyledComponents } from "react-icons/si";

const HardSkills = () => {
    const svgSize = '150px';

    return (
        <S.Section id="hardskills">
            <S.Container>
                <S.Wrapper>
                    <S.Title><AiFillCode />Hard Skills</S.Title>
                    <S.Paragraph>
                    Focado inicialmente em Front-End, busco estar sempre aprimorar e descobrir novas tecnologias para encontrar as melhores formas de 
                    resolver os problemas que acabam surgindo dentro dos projetos.
                    Detesto me prender algo antigo como uma desculpa de que "sempre funcionou", pois novos problemas exigem novas soluções, e o constante 
                    estudo sempre será o principal pilar da programação.
                    <br />
                    <br />
                    <span>"Jamais considere seus estudos como uma obrigação, mas sim como uma oportunidade invejável para aprender o desconhecido..."</span> <br />
                    - Albert Einstein
                    </S.Paragraph>
                </S.Wrapper>
                <S.Tecnologies>
                    <S.TecnologiesGroup>
                        <DiHtml5 size={svgSize} className='tecnologie'/>
                        <DiCss3 size={svgSize} className='tecnologie'/>
                        <DiJavascript size={svgSize} className='tecnologie'/>
                    </S.TecnologiesGroup>
                    <S.TecnologiesGroup>
                        <DiReact size={svgSize} className='tecnologie'/>
                        <SiStyledComponents size={svgSize} className='tecnologie'/>
                        <DiGitBranch size={svgSize} className='tecnologie'/>
                    </S.TecnologiesGroup>
                </S.Tecnologies>
            </S.Container>
        </S.Section>
    );
};

export default HardSkills;