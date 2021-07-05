import * as S from './styles'
import { MenuProps } from './../../libs/interfaces/profile';

export default function Menu({content,value} : MenuProps){
    return(
        <S.Menu>{content} ( {value} )</S.Menu>
    )
}