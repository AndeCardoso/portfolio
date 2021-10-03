import Home from '../sections/home';
import About from '../sections/about';
import HardSkills from '../sections/hard-skills';
import Projects from '../sections/projects';
import Contact from '../sections/contact';

import * as S from './styled';

const Main = () => {
    return (
        <S.Main>
            <Home />
            <About />
            <HardSkills />
            <Projects />
            <Contact />
        </S.Main>
    );
};

export default Main;