import { NavLink } from 'react-router-dom'
import * as S from './style'
import search from '../../img/icon/search.svg'
import prev from '../../img/icon/prev.svg'
import play from '../../img/icon/play.svg'
import next from '../../img/icon/next.svg'
import repeat from '../../img/icon/repeat.svg'
import shuffle from '../../img/icon/shuffle.svg'
import note from '../../img/icon/note.svg'
import like from '../../img/icon/like.svg'
import dislike from '../../img/icon/dislike.svg'
import volume from '../../img/icon/volume.svg'

import Navigation from '../../components/Main/Navigation/Navigation'


export const NotFound = () =>{

    return(
        <S.Base>
           <Navigation/>

            <S.Box>
                <S.Search>
                    <S.Svg>
                        <use xlinkHref={search} />
                    </S.Svg>
                    <S.SearchPlays type="search" placeholder="Поиск" name="search" />
                </S.Search>
                <S.Warning>
                    <S.Title>404</S.Title>
                    <h2>Страница не найдена</h2>
                    <S.Info>Возможно, она была удалена или перенесена на другой адрес</S.Info>
                    <NavLink to='/' className='enter_btn'>Вернуться на главную</NavLink>
                </S.Warning>
            </S.Box>
        

        <S.Bars>
                <S.Content>
                    <S.Progress />
                    <S.Block>
                        <S.Player>
                            <S.Controls>
                                <S.Prev>
                                    <S.PrevSvg alt="prev">
                                        <use xlinkHref={prev} />
                                    </S.PrevSvg>
                                </S.Prev>
                                <S.Play>
                                    <S.PlaySvg alt="play">
                                        <use xlinkHref={play} />
                                    </S.PlaySvg>
                                </S.Play>
                                <S.Next>
                                    <S.NextSvg alt="next">
                                        <use xlinkHref={next} />
                                    </S.NextSvg>
                                </S.Next>
                                <S.Repeat>
                                    <S.RepeatSvg alt="repeat">
                                        <use xlinkHref={repeat} />
                                    </S.RepeatSvg>
                                </S.Repeat>
                                <S.Shuffle>
                                    <S.ShuffleSvg alt="shuffle">
                                        <use xlinkHref={shuffle} />
                                    </S.ShuffleSvg>
                                </S.Shuffle>
                            </S.Controls>

                            <S.TrackPlay>
                                <S.PlayContain>
                                    <S.PlayImage>
                                        <S.TrackSvg alt="music">
                                            <use xlinkHref={note} />
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
                                    <S.GradeLike>
                                        <S.LikeSvg alt="like">
                                            <use xlinkHref={like} />
                                        </S.LikeSvg>
                                    </S.GradeLike>
                                    <S.GradeDislike>
                                        <S.DislikeSvg alt="dislike">
                                            <use xlinkHref={dislike} />
                                        </S.DislikeSvg>
                                    </S.GradeDislike>
                                </S.LikeDis>
                            </S.TrackPlay>
                        </S.Player>
                        <S.VolumeBlock>
                            <S.VolumeContent>
                                <S.VolumeImage>
                                    <S.VolumeSvg alt="volume">
                                        <use xlinkHref={volume} />
                                    </S.VolumeSvg>
                                </S.VolumeImage>
                                <S.VolumeProgress>
                                    <S.VolumeLine type="range" name="range" />
                                </S.VolumeProgress>
                            </S.VolumeContent>
                        </S.VolumeBlock>
                    </S.Block>
                </S.Content>
            </S.Bars>
            </S.Base>
    )
}