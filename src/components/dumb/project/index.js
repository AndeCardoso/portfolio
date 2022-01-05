import { Button } from '../button';
import * as S from './styled'

export const Project = ({ to, title, description, type, technologies, icon }) => {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <Button to={to}>{icon}{type}</Button>
            <S.Technologies>
                {[technologies]}
            </S.Technologies>
        </S.Container>
    )
}
