import * as S from './styled';
import { AiFillBulb } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiGitBranch } from "react-icons/di";
import { SiStyledComponents } from "react-icons/si";
import { RiGitRepositoryFill } from "react-icons/ri";
import Project from '../../dumb/project';
import { Link } from '../../dumb/button';

const Projects = () => {
    const svgSize = '50px';
    return (
        <S.Section id="projects">
            <S.Container>
                <S.Title><AiFillBulb />Projetos</S.Title>
                <S.Projects>
                    <Project
                    title="Buscador Github"
                    description="Buscador de perfis e seus repositórios no Github."
                    type="Website"
                    to="https://github-seek-profile.vercel.app/"
                    icon={<BiLink />}
                    tecnologies={[ <DiReact size={svgSize} />, <DiHtml5 size={svgSize}/>, <SiStyledComponents size={svgSize}/>, <DiJavascript size={svgSize}/> ]}
                    />
                    <Project
                    title="Agenda FCamara"
                    description="Agenda para trabalho presencial nos escritórios da empresa."
                    type="Projeto"
                    to="https://github.com/AndeCardoso/fcamara-agenda"
                    icon={<DiGitBranch />}
                    tecnologies={[ <DiReact size={svgSize} />, <DiHtml5 size={svgSize}/>, <DiCss3 size={svgSize}/>, <DiJavascript size={svgSize}/> ]}
                    />
                </S.Projects>
                <S.MoreRepos>
                    <Link to="https://github.com/AndeCardoso?tab=repositories" target="_blank"><RiGitRepositoryFill size='30px' />Veja todos os projetos</Link>
                </S.MoreRepos>
            </S.Container>
        </S.Section>
    );
};

export default Projects;