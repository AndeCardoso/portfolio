import Home from '../sections/home';
import About from '../sections/about';
import HardSkills from '../sections/hard-skills';

import * as S from './styled';
import Projects from '../sections/projects';

const Main = () => {
    return (
        <S.Main>
            <Home />
            <About />
            <HardSkills />
            <Projects />
        </S.Main>
    );
};

export default Main;