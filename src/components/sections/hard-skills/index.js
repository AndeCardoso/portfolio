import { AiFillCode } from "react-icons/ai";
import { DiCss3, DiHtml5, DiReact, DiGitBranch, DiNodejsSmall } from "react-icons/di";
import { SiStyledComponents, SiMongodb } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { IoDocumentTextSharp } from "react-icons/io5";

import { Button } from '../../dumb/button';

import * as S from './styled';

const HardSkills = () => {
    const SVG_SIZE = '150px';

    return (
        <S.Section id="hardskills">
            <S.Container>
                <S.Wrapper>
                    <S.Title><AiFillCode />Hard Skills</S.Title>
                    <S.Paragraph>
                    Focado inicialmente em Front-End, busco sempre aprimorar e descobrir novas tecnologias para encontrar as melhores formas de 
                    resolver os problemas que acabam surgindo dentro dos projetos.
                    Detesto me prender algo antigo como uma desculpa de que "sempre funcionou", pois novos problemas exigem novas soluções, e o constante 
                    estudo sempre será o principal pilar da programação.
                    <br />
                    <br />
                    <span>"Jamais considere seus estudos como uma obrigação, mas sim como uma oportunidade invejável para aprender o desconhecido..."</span> <br />
                    - Albert Einstein
                    </S.Paragraph>
                    <Button to="https://github.com/AndeCardoso" ><IoDocumentTextSharp />Curriculo</Button>
                </S.Wrapper>
                <S.Technologies>
                    <S.TechnologiesGroup>
                        <DiHtml5 size={SVG_SIZE}/>
                        <DiCss3 size={SVG_SIZE}/>
                        <DiReact size={SVG_SIZE}/>
                        <DiNodejsSmall size={SVG_SIZE}/>
                    </S.TechnologiesGroup>
                    <S.TechnologiesGroup>
                        <DiJavascript1 size={SVG_SIZE}/>
                        <SiStyledComponents size={SVG_SIZE}/>
                        <DiGitBranch size={SVG_SIZE}/>
                        <SiMongodb size={SVG_SIZE}/>
                    </S.TechnologiesGroup>
                </S.Technologies>
            </S.Container>
        </S.Section>
    );
};

export default HardSkills;
