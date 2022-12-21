import '../../../../App.css'
import * as S from './style'
// import {useState} from 'react';

// const author =[
//     'Nero',
//     'Dynoro, Outwork, Mr. Gee',
//     'Ali Bakgor',
//     'Стоункат, Psychopath',
//     'Jaded, Will Clarke, AR/CO',
//     'Blue Foundation, Zeds Dead',
//     'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
//     'Minthaze',
//     'Calvin Harris, Disciples',
//     'Tom Boxer',
//     'Frank Sinatra'
// ]

// const genre = [
//     'Джаз',
//     'Рок',
//     'Хип-хоп',
//     'Реп',
//     'R&B',
//     'Поп',
// ]

function Filter(){
    // const [visible, setVisible] = useState(true);
    // const toggleVisibility =()=> setVisible(!visible);
    return(
        <S.Filter>
            <S.Title>Искать по:</S.Title>
            <div className="filter__button button-author _btn-text" >исполнителю</div>

            <div className="filter__button button-year _btn-text">году выпуска</div>
            <div className="filter__button button-genre _btn-text">жанру</div>
        </S.Filter>
        
    )
}

export default Filter;