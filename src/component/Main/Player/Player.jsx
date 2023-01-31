import * as S from './style'

import prev from '../../../img/icon/prev.svg'
import play from '../../../img/icon/play.svg'
import next from '../../../img/icon/next.svg'
import repeat from '../../../img/icon/repeat.svg'
import shuffle from '../../../img/icon/shuffle.svg'
import note from '../../../img/icon/note.svg'
import like from '../../../img/icon/like.svg'
import dislike from '../../../img/icon/dislike.svg'
import volume from '../../../img/icon/volume.svg'

function Player(){
    return(
        <S.Bars>
        <S.Content>
            <S.Progress/>
            <S.Block>
                <S.Player>
                    <S.Controls>
                        <S.Prev>
                            <S.PrevSvg alt="prev">
                                <use xlinkHref={prev} alt='prev'/>
                            </S.PrevSvg>
                        </S.Prev>
                        <S.Play>
                            <S.PlaySvg alt="play">
                                <use xlinkHref={play} alt='play'/>
                            </S.PlaySvg>
                        </S.Play>
                        <S.Next>
                            <S.NextSvg alt="next">
                                <use xlinkHref={next} alt='next'/>
                            </S.NextSvg>
                        </S.Next>
                        <S.Repeat>
                            <S.RepeatSvg alt="repeat">
                                <use xlinkHref={repeat} alt='repeat'/>
                            </S.RepeatSvg>
                        </S.Repeat>
                        <S.Shuffle>
                            <S.ShuffleSvg alt="shuffle">
                                <use xlinkHref={shuffle} alt='shuffle'/>
                            </S.ShuffleSvg>
                        </S.Shuffle>
                    </S.Controls>
                    
                    <S.TrackPlay>
                        <S.PlayContain>
                            <S.PlayImage>
                                <S.TrackSvg alt="music">
                                    <use xlinkHref={note} alt='note'/>
                                </S.TrackSvg>
                            </S.PlayImage>
                            <S.PlayAuthor>
                                <S.AuthorLink href="http://">...</S.AuthorLink>
                            </S.PlayAuthor>
                            <S.PlayAlbum>
                                <S.AlbumLink href="http://">...</S.AlbumLink>
                            </S.PlayAlbum>
                        </S.PlayContain>

                        <S.LikeDis>
                            <S.GradeLike >
                                <S.LikeSvg alt="like">
                                    <use xlinkHref={like} alt='like'/>
                                </S.LikeSvg>
                            </S.GradeLike>
                            <S.GradeDislike>
                                <S.DislikeSvg alt="dislike">
                                    <use xlinkHref={dislike} alt='dislike'/>
                                </S.DislikeSvg>
                            </S.GradeDislike>
                        </S.LikeDis>
                    </S.TrackPlay>
                </S.Player>
                <S.VolumeBlock>
                   <S.VolumeContent>
                        <S.VolumeImage>
                            <S.VolumeSvg alt="volume">
                                <use xlinkHref={volume} alt='volume'/>
                            </S.VolumeSvg>
                        </S.VolumeImage>
                        <S.VolumeProgress>
                            <S.VolumeLine type="range" name="range"/>
                        </S.VolumeProgress>
                   </S.VolumeContent>
                </S.VolumeBlock>
            </S.Block>
        </S.Content>
    </S.Bars>
    )
}

export default Player