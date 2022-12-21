import * as S from './style'
import Search from './Search/Search';
import Filter from './Filter/Filter';
import Content from './Content/Content'

function CenterBlock(){
    return(
        <S.CenterBlock>
            <Search/>
            <S.Title>Треки</S.Title>
            <Filter/>
            <Content/>
        </S.CenterBlock>
    )
}

export default CenterBlock;