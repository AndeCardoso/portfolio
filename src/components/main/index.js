import Home from '../sections/home';
import About from '../sections/about';
import HardSkills from '../sections/hard-skills';

import * as S from './styled';

const Main = () => {
    return (
        <S.Main>
            <Home />
            <About />
            <HardSkills />
        </S.Main>
    );
};

export default Main;