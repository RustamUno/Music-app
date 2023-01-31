import * as S from './style'

import Filter from './Filter/Filter';
import Content from './Content/Content';

function CentralBlock(){
    return(
        <S.CentralBlock>
            <S.Title>Треки</S.Title>
            <Filter/>
            <Content/>
        </S.CentralBlock>
    )
}

export default CentralBlock;