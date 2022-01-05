import * as S from './styled';
import { AiFillBulb } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import { DiHtml5, DiCss3, DiReact, DiGitBranch } from "react-icons/di";
import { SiStyledComponents } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiGitRepositoryFill } from "react-icons/ri";
import { MdHttp } from "react-icons/md";

import { Project } from '../../dumb/project';
import { Link } from '../../dumb/button';

const Projects = () => {
    const svgSize = '50px';
    return (
        <S.Section id="projects">
            <S.Container>
                <S.Title><AiFillBulb />Projetos</S.Title>
                <S.Projects>
                    <div className="top">
                        <Project
                        title="Hotel Kolman"
                        description="Site de hotel com sistema de gerenciamento de conteúdo em React Js (SRGC), desenvolvido por mim."
                        type="Website"
                        to="https://hotelkolman.com/"
                        icon={<BiLink />}
                        technologies={[ <DiReact size={svgSize} />, <DiHtml5 size={svgSize}/>, <SiStyledComponents size={svgSize}/>, <IoLogoJavascript size={svgSize}/>, <MdHttp size={svgSize}/> ]}
                        />
                    </div>
                    <div className="bottom">
                        <Project
                        title="Agenda FCamara"
                        description="Agenda para trabalho presencial nos escritórios da empresa, feito no hackathon de 02/2021."
                        type="Repositório"
                        to="https://github.com/AndeCardoso/fcamara-agenda"
                        icon={<DiGitBranch />}
                        technologies={[ <DiReact size={svgSize} />, <DiHtml5 size={svgSize}/>, <DiCss3 size={svgSize}/>, <IoLogoJavascript size={svgSize}/>, <MdHttp size={svgSize}/> ]}
                        />
                        <Project
                        title="Buscador Github"
                        description="Buscador de perfis e seus repositórios no Github."
                        type="Website"
                        to="https://github-seek-profile.vercel.app/"
                        icon={<DiGitBranch />}
                        technologies={[ <DiReact size={svgSize} />, <DiHtml5 size={svgSize}/>, <SiStyledComponents size={svgSize}/>, <IoLogoJavascript size={svgSize}/>, <MdHttp size={svgSize}/> ]}
                        />
                    </div>
                </S.Projects>
                <S.MoreRepos>
                    <Link to="https://github.com/AndeCardoso?tab=repositories" target="_blank"><RiGitRepositoryFill size='30px' />Veja todos os projetos</Link>
                </S.MoreRepos>
            </S.Container>
        </S.Section>
    );
};

export default Projects;