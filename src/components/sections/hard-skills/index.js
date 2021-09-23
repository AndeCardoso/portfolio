import * as S from './styled';
import { AiFillCode } from "react-icons/ai";
import { DiCss3, DiJavascript, DiHtml5, DiReact, DiNodejsSmall, DiGitBranch } from "react-icons/di";

const HardSkills = () => {
    const svgSize = '150px';

    return (
        <S.Section id="hardskills">
            <S.Container>
                <S.Title><AiFillCode />Hard Skills</S.Title>
                <S.Paragraph>
                    Lorem ipsum dolor sit amet. Quo maiores rerum est quia commodi ea dolores deleniti ut dolorum exercitationem et iste voluptas eum omnis. Eum pariatur recusandae id eveniet quia qui ducimus nihil vel odit nesciunt nam nesciunt voluptatem aut tempore facere eos iste totam. 33 harum dicta quo dolore corrupti ut praesentium natus ut reprehenderit autem.
                </S.Paragraph>
            </S.Container>
            <S.Tecnologies>
                <S.TecnologiesGroup>
                    <DiCss3 size={svgSize}/>
                    <DiHtml5 size={svgSize}/>
                    <DiJavascript size={svgSize}/>
                </S.TecnologiesGroup>
                <S.TecnologiesGroup>
                    <DiReact size={svgSize}/>
                    <DiNodejsSmall size={svgSize}/>
                    <DiGitBranch size={svgSize}/>
                </S.TecnologiesGroup>
            </S.Tecnologies>
        </S.Section>
    );
};

export default HardSkills;