import {useState} from 'react';
import  date  from '../../../dataset/date';

import * as S from './style'

function Filter(){
    const [visibleAuthor, setVisibleAuthor] = useState(false);
    const [visibleYear, setVisibleYear] = useState(false);
    const [visibleGenre, setVisibleGenre] = useState(false);

    const authors = [...new Set (date.map(item=>item.author))]
    const authorFilter= authors.map((author, index) => (<S.List key={index}>{author}</S.List>))

    const genres = [...new Set (date.map(item=>item.genre))]
    const genreFilter = genres.map((genre, index)=>(<S.List key={index}>{genre}</S.List>))

    const toggleVisibilityAuthor = () => {
        setVisibleAuthor(!visibleAuthor);
        setVisibleYear(false);
        setVisibleGenre(false);
        }
        
        const toggleVisibilityYear = () => {
        setVisibleYear(!visibleYear);
        setVisibleAuthor(false);
        setVisibleGenre(false);
        }
        
        const toggleVisibilityGenre = () => {
        setVisibleGenre(!visibleGenre);
        setVisibleAuthor(false);
        setVisibleYear(false);
        }

    return(
        <S.Filter>
            <S.Title>Искать по:</S.Title>
            <S.Btn onClick={toggleVisibilityAuthor} role="presentation">исполнителю{visibleAuthor} 
            {visibleAuthor && (
                <S.Open >
                      {authorFilter}
                </S.Open >     
            )}</S.Btn>
            
            <S.Btn onClick={toggleVisibilityYear} role="presentation">году выпуска{visibleYear}
            {visibleYear && (
                <S.OpenYears >
                    <S.Annum>
                    <input
                    type="radio"
                    id="new"
                    name="year"
                    value="new"/>
                    <S.Label  htmlFor="new">Более новые</S.Label>
                    </S.Annum>

                    <S.Annum>
                    <input
                    type="radio"
                    id="old"
                    name="year"
                    value="old"/>
                    <S.Label  htmlFor="old">Более старые</S.Label>
                    </S.Annum>

                </S.OpenYears >     
            )}</S.Btn>
            
            <S.Btn onClick={toggleVisibilityGenre} role="presentation">жанру{visibleGenre}
            {visibleGenre && (
                <S.Open >
                    {genreFilter}
                </S.Open >     
            )}</S.Btn>

        </S.Filter>
        
    )
}

export default Filter;