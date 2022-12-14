import logo from '../../../img/logo.png'

function Logo(){
    return(
        <main className="main__nav">
            <img className="logo__image" src={logo} alt="logo"/>
        </main>
    )
}

export default Logo;