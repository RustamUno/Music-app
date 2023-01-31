import * as S from './style'
import search from '../../../img/icon/search.svg'

function Search(){
    return(
        <S.Search>
            <S.Svg>
                <use xlinkHref={search} alt='search'/>
            </S.Svg>
            <S.SearchPlays type="search" placeholder="Поиск" name="search"/>
        </S.Search>
    )
}
export default Search