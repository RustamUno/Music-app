import {useState} from 'react';
import { date } from '../../../date/date';

import * as S from './style'

function Filter(){
    const [visibleAuthor, setVisibleAuthor] = useState(false);
    const [visibleYear, setVisibleYear] = useState(false);
    const [visibleGenre, setVisibleGenre] = useState(false);

    const toggleVisibilityAuthor =()=> 
    
    setVisibleAuthor(!visibleAuthor);

    const toggleVisibilityYear =()=> 

    setVisibleYear(!visibleYear);

    const toggleVisibilityGenre =()=> 

    setVisibleGenre(!visibleGenre);

    // const closeOpenFilter = () => {
        // setVisibleAuthor(false)
        // setVisibleYear(false)
        // setVisibleGenre(false)
    // }


    const authorFilter = date.map((item)=>{
        return(
            <S.List key={item.id}>{item.author}</S.List>
        )
    })

    const genreFilter = date.map(item=>{
        return(
            <S.List key={item.id}>{item.genre}</S.List>
        )
    })

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