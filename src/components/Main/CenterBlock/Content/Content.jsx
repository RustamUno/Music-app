import '../../../../App.css'
import watch from '../../../../img/icon/watch.svg'
import note from '../../../../img/icon/note.svg'
import like from '../../../../img/icon/like.svg'

function Content(){
    return(
                    <div className="centerblock__content">
                        <div className="content__title playlist-title">
                            <div className="playlist-title__col col01">Трек</div>
                            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                            <div className="playlist-title__col col03">АЛЬБОМ</div>
                            <div className="playlist-title__col col04">
                                <svg className="playlist-title__svg" alt="time">
                                    <use xlinkHref={watch}/>
                                </svg>
                            </div>
                        </div>
                        <div className="content__playlist playlist">
                            <div className="playlist__item">
                                <div className="playlist__track track">
                                    <div className="track__title">
                                        <div className="track__title-image">
                                            <svg className="track__title-svg" alt="music">
                                                <use xlinkHref={note}/>
                                            </svg>
                                        </div>
                                        <div className="track__title-text">
                                            <a className="track__title-link" href="/">Guilt <span className="track__title-span"/></a>
                                        </div>
                                    </div>
                                    <div className="track__author">
                                        <a className="track__author-link" href="/">Nero</a>
                                    </div>
                                    <div className="track__album">
                                        <a className="track__album-link" href="/">Welcome Reality</a>
                                    </div>
                                    <div className="track__time">
                                        <svg className="track__time-svg" alt="time">
                                            <use xlinkHref={like}/>
                                        </svg>
                                        <span className="track__time-text">4:44</span>
                                    </div>
                                </div>
                            </div>

                            <div className="playlist__item">
                                <div className="playlist__track track">
                                    <div className="track__title">
                                        <div className="track__title-image">
                                            <svg className="track__title-svg" alt="music">
                                                <use xlinkHref={note}/>
                                            </svg>
                                        </div>
                                        <div className="track__title-text">
                                            <a className="track__title-link" href="/">Elektro <span className="track__title-span"/></a>
                                        </div>
                                    </div>
                                    <div className="track__author">
                                        <a className="track__author-link" href="/">Dynoro, Outwork, Mr. Gee</a>
                                    </div>
                                    <div className="track__album">
                                        <a className="track__album-link" href="/">Elektro</a>
                                    </div>
                                    <div className="track__time">
                                        <svg className="track__time-svg" alt="time">
                                            <use xlinkHref="./img/icon/sprite.svg#icon-like"/>
                                        </svg>
                                        <span className="track__time-text">2:22</span>
                                    </div>
                                </div>
                            </div>

                            <div className="playlist__item">
                                <div className="playlist__track track">
                                    <div className="track__title">
                                        <div className="track__title-image">
                                            <svg className="track__title-svg" alt="music">
                                                <use xlinkHref={note}/>
                                            </svg>
                                        </div>
                                        <div className="track__title-text">
                                            <a className="track__title-link" href="/">I’m Fire <span className="track__title-span"/></a>
                                        </div>
                                    </div>
                                    <div className="track__author">
                                        <a className="track__author-link" href="/">Ali Bakgor</a>
                                    </div>
                                    <div className="track__album">
                                        <a className="track__album-link" href="/">I’m Fire</a>
                                    </div>
                                    <div className="track__time">
                                        <svg className="track__time-svg" alt="time">
                                            <use xlinkHref={like}/>
                                        </svg>
                                        <span className="track__time-text">2:22</span>
                                    </div>
                                </div>
                            </div>

                            <div className="playlist__item">
                                <div className="playlist__track track">
                                    <div className="track__title">
                                        <div className="track__title-image">
                                            <svg className="track__title-svg" alt="music">
                                                <use xlinkHref={note}/>
                                            </svg>
                                        </div>
                                        <div className="track__title-text">
                                            <a className="track__title-link" href="/">Non Stop <span className="track__title-span">(Remix)</span></a>
                                        </div>
                                    </div>
                                    <div className="track__author">
                                        <a className="track__author-link" href="/">Стоункат, Psychopath</a>
                                    </div>
                                    <div className="track__album">
                                        <a className="track__album-link" href="/">Non Stop</a>
                                    </div>
                                    <div className="track__time">
                                        <svg className="track__time-svg" alt="time">
                                            <use xlinkHref={like}/>
                                        </svg>
                                        <span className="track__time-text">4:12</span>
                                    </div>
                                </div>
                            </div>

                            <div className="playlist__item">
                                <div className="playlist__track track">
                                    <div className="track__title">
                                        <div className="track__title-image">
                                            <svg className="track__title-svg" alt="music">
                                                <use xlinkHref={note}/>
                                            </svg>
                                        </div>
                                        <div className="track__title-text">
                                            <a className="track__title-link" href="/">Run Run <span className="track__title-span">(feat. AR/CO)</span></a>
                                        </div>
                                    </div>
                                    <div className="track__author">
                                        <a className="track__author-link" href="/">Jaded, Will Clarke, AR/CO</a>
                                    </div>
                                    <div className="track__album">
                                        <a className="track__album-link" href="/">Run Run</a>
                                    </div>
                                    <div className="track__time">
                                        <svg className="track__time-svg" alt="time">
                                            <use xlinkHref={like}/>
                                        </svg>
                                        <span className="track__time-text">2:54</span>
                                    </div>
                                </div>
                            </div>

                            <div className="playlist__item">
                                <div className="playlist__track track">
                                    <div className="track__title">
                                        <div className="track__title-image">
                                            <svg className="track__title-svg" alt="music">
                                                <use xlinkHref={note}/>
                                            </svg>
                                        </div>
                                        <div className="track__title-text">
                                            <a className="track__title-link" href="/">Eyes on Fire <span className="track__title-span">(Zeds Dead Remix)</span></a>
                                        </div>
                                    </div>
                                    <div className="track__author">
                                        <a className="track__author-link" href="/">Blue Foundation, Zeds Dead</a>
                                    </div>
                                    <div className="track__album">
                                        <a className="track__album-link" href="/">Eyes on Fire</a>
                                    </div>
                                    <div className="track__time">
                                        <svg className="track__time-svg" alt="time">
                                            <use xlinkHref={like}/>
                                        </svg>
                                        <span className="track__time-text">5:20</span>
                                    </div>
                                </div>
                            </div>

                            <div className="playlist__item">
                                <div className="playlist__track track">
                                    <div className="track__title">
                                        <div className="track__title-image">
                                            <svg className="track__title-svg" alt="music">
                                                <use xlinkHref={note}/>
                                            </svg>
                                        </div>
                                        <div className="track__title-text">
                                            <a className="track__title-link" href="/">Mucho Bien <span className="track__title-span">(Hi Profile Remix)</span></a>
                                        </div>
                                    </div>
                                    <div className="track__author">
                                        <a className="track__author-link" href="/">HYBIT, Mr. Black, Offer Nissim, Hi Profile</a>
                                    </div>
                                    <div className="track__album">
                                        <a className="track__album-link" href="/">Mucho Bien</a>
                                    </div>
                                    <div className="track__time">
                                        <svg className="track__time-svg" alt="time">
                                            <use xlinkHref={like}/>
                                        </svg>
                                        <span className="track__time-text">3:41</span>
                                    </div>
                                </div>
                            </div>

                            <div className="playlist__item">
                                <div className="playlist__track track">
                                    <div className="track__title">
                                        <div className="track__title-image">
                                            <svg className="track__title-svg" alt="music">
                                                <use xlinkHref={like}/>
                                            </svg>
                                        </div>
                                        <div className="track__title-text">
                                            <a className="track__title-link" href="/">Knives n Cherries <span className="track__title-span"/></a>
                                        </div>
                                    </div>
                                    <div className="track__author">
                                        <a className="track__author-link" href="/">minthaze</a>
                                    </div>
                                    <div className="track__album">
                                        <a className="track__album-link" href="/">Captivating</a>
                                    </div>
                                    <div className="track__time">
                                        <svg className="track__time-svg" alt="time">
                                            <use xlinkHref={like}/>
                                        </svg>
                                        <span className="track__time-text">1:48</span>
                                    </div>
                                </div>
                            </div>

                            <div className="playlist__item">
                                <div className="playlist__track track">
                                    <div className="track__title">
                                        <div className="track__title-image">
                                            <svg className="track__title-svg" alt="music">
                                                <use xlinkHref={note}/>
                                            </svg>
                                        </div>
                                        <div className="track__title-text">
                                            <a className="track__title-link" href="/">How Deep Is Your Love <span className="track__title-span"/></a>
                                        </div>
                                    </div>
                                    <div className="track__author">
                                        <a className="track__author-link" href="/">Calvin Harris, Disciples</a>
                                    </div>
                                    <div className="track__album">
                                        <a className="track__album-link" href="/">How Deep Is Your Love</a>
                                    </div>
                                    <div className="track__time">
                                        <svg className="track__time-svg" alt="time">
                                            <use xlinkHref={like}/>
                                        </svg>
                                        <span className="track__time-text">3:32</span>
                                    </div>
                                </div>
                            </div>

                            <div className="playlist__item">
                                <div className="playlist__track track">
                                    <div className="track__title">
                                        <div className="track__title-image">
                                            <svg className="track__title-svg" alt="music">
                                                <use xlinkHref={note}/>
                                            </svg>
                                        </div>
                                        <div className="track__title-text">
                                            <a className="track__title-link" href="/">Morena <span className="track__title-span"/></a>
                                        </div>
                                    </div>
                                    <div className="track__author">
                                        <a className="track__author-link" href="/">Tom Boxer</a>
                                    </div>
                                    <div className="track__album">
                                        <a className="track__album-link" href="/">Soundz Made in Romania</a>
                                    </div>
                                    <div className="track__time">
                                        <svg className="track__time-svg" alt="time">
                                            <use xlinkHref={like}/>
                                        </svg>
                                        <span className="track__time-text">3:36</span>
                                    </div>
                                </div>
                            </div>

                            <div className="playlist__item">
                                <div className="playlist__track track">
                                    <div className="track__title">
                                        <div className="track__title-image">
                                            <svg className="track__title-svg" alt="music">
                                                <use xlinkHref={note}/>
                                            </svg>
                                        </div>
                                        <div className="track__title-text">
                                            <a className="track__title-link" href="/">Let it snow!<span className="track__title-span"/></a>
                                        </div>
                                    </div>
                                    <div className="track__author">
                                        <a className="track__author-link" href="/">Frank Sinatra</a>
                                    </div>
                                    <div className="track__album">
                                        <a className="track__album-link" href="/">The Cristmas song</a>
                                    </div>
                                    <div className="track__time">
                                        <svg className="track__time-svg" alt="time">
                                            <use xlinkHref={like}/>
                                        </svg>
                                        <span className="track__time-text">2:38</span>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
    )
}

export default Content;