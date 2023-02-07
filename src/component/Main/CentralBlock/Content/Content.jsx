import '../../../../App.css'
import * as S from './style'
import watch from '../../../../img/icon/watch.svg'
import note from '../../../../img/icon/note.svg'
import like from '../../../../img/icon/like.svg'
import date from '../../../dataset/date'

function Content(){

    const trackBlock =date.map((item)=>
        <S.Track key={item.id}>
        <S.TrackTitle >
            <S.Image>
                <S.SvgTrack alt="music">
                    <use xlinkHref={note} alt='note'/>
                </S.SvgTrack>
            </S.Image>
            <div>
                <S.Link href="/">{item.name} <S.Span/></S.Link >
            </div>
        </S.TrackTitle>
        <S.Author>
            <S.AuthorLink href="/">{item.author}</S.AuthorLink>
        </S.Author>
        <S.TrackAlbum>
            <S.AlbumLink href="/">{item.album}</S.AlbumLink>
        </S.TrackAlbum>
        <div>
            <S.TimeSvg alt="time">
                <use xlinkHref={like} alt='like'/>
            </S.TimeSvg >
            <S.TimeText>{item.duration_in_seconds}</S.TimeText>
        </div>
    </S.Track>
        )
    return(
                    <S.Content>
                        <S.Title>
                            <S.DesignationOne>Трек</S.DesignationOne>
                            <S.DesignationTwo>ИСПОЛНИТЕЛЬ</S.DesignationTwo>
                            <S.DesignationThree>АЛЬБОМ</S.DesignationThree>
                            <S.DesignationFour>
                                <S.Svg alt="time">
                                    <use xlinkHref={watch} alt='watch'/>
                                </S.Svg>
                            </S.DesignationFour>
                        </S.Title>
                        
                                <S.Playlist >
                                    <S.Item>
                                        {trackBlock}
                                    </S.Item>
                                </S.Playlist>   

                    </S.Content>
    )
}

export default Content;