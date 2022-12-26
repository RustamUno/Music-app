import {useState} from 'react';

import * as S from './style'

// const author =[
    // 'Nero',
    // 'Dynoro, Outwork, Mr. Gee',
    // 'Ali Bakgor',
    // 'Стоункат, Psychopath',
    // 'Jaded, Will Clarke, AR/CO',
    // 'Blue Foundation, Zeds Dead',
    // 'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
    // 'Minthaze',
    // 'Calvin Harris, Disciples',
    // 'Tom Boxer',
    // 'Frank Sinatra'
// ]

// const genre = [
    // 'Джаз',
    // 'Рок',
    // 'Хип-хоп',
    // 'Реп',
    // 'R&B',
    // 'Поп',
// ]

function Filter(){
    const [visibleAuthor, setVisibleAuthor] = useState(false);
    const [visibleYear, setVisibleYear] = useState(false);
    const [visibleGenre, setVisibleGenre] = useState(false);

    const toggleVisibilityAuthor =()=> 
    // closeOpenFilter()
    setVisibleAuthor(!visibleAuthor);

    const toggleVisibilityYear =()=> 
    // closeOpenFilter()
    setVisibleYear(!visibleYear);

    const toggleVisibilityGenre =()=> 
    // closeOpenFilter()
    setVisibleGenre(!visibleGenre);


    // const closeOpenFilter = () => {
    //     setVisibleAuthor(false)
    //     setVisibleYear(false)
    //     setVisibleGenre(false)
    // }

    return(
        <S.Filter>
            <S.Title>Искать по:</S.Title>
            <S.Btn onClick={toggleVisibilityAuthor} role="presentation">исполнителю{visibleAuthor} 
            {visibleAuthor && (
                <S.Open >
                        <S.List>Nero</S.List>
                        <S.List>Dynoro, Outwork, Mr. Gee</S.List>
                        <S.List>Ali Bakgor</S.List>
                        <S.List>Стоункат, Psychopath</S.List>
                        <S.List>Jaded, Will Clarke, AR/CO</S.List>
                        <S.List>Blue Foundation, Zeds Dead</S.List>
                        <S.List>HYBIT, Mr. Black, Offer Nissim, Hi Profile</S.List>
                        <S.List>Minthaze</S.List>
                        <S.List>Calvin Harris, Disciples</S.List>
                        <S.List>Tom Boxer</S.List>
                        <S.List>Frank Sinatra</S.List>
                </S.Open >     
            )}</S.Btn>
            
            <S.Btn onClick={toggleVisibilityYear} role="presentation">году выпуска{visibleYear}
            {visibleYear && (
                <S.Open >
                    <S.Annum>
                    <input
                    type="radio"
                    id="new"
                    name="year"
                    value="new"/>
                    <S.Label  htmlFor="new">Новое</S.Label>
                    </S.Annum>

                    <S.Annum>
                    <input
                    type="radio"
                    id="old"
                    name="year"
                    value="old"/>
                    <S.Label  htmlFor="old">Старое</S.Label>
                    </S.Annum>

                </S.Open >     
            )}</S.Btn>
            
            <S.Btn onClick={toggleVisibilityGenre} role="presentation">жанру{visibleGenre}
            {visibleGenre && (
                <S.Open >
                    <S.List>Джаз</S.List>
                    <S.List>Рок</S.List>
                    <S.List>Хип-хоп</S.List>
                    <S.List>Реп</S.List>
                    <S.List> R&B</S.List>
                    <S.List>Поп</S.List>
                </S.Open >     
            )}</S.Btn>

        </S.Filter>
        
    )
}

export default Filter;