const Header = (onOffButton) => {


    return(
        <header className={
            onOffButton.onOffB ? "dark" : "light"
          }>
            <nav>
              <div>
              <p>Dark Mode</p>
              <button 
              className={
                onOffButton.onOffB ? "On" : "Off"
              }
              onClick ={
                (event) => {
                  event.preventDefault()
                  onOffButton.setOnOffB(!onOffButton.onOffB)
                }
               }
             > 
             <div></div>
               <p> {
                  onOffButton.onOffB ? "On" : "Off"
                }
                </p>
              </button>
              </div>
              <a className={onOffButton.onOffB ? "dark" : "light"} href='https://www.google.com'>Google</a>
              <a className={onOffButton.onOffB ? "dark" : "light"} href='https://www.youtube.com'>YouTube</a>
              <a className={onOffButton.onOffB ? "dark" : "light"} href='https://www.twitch.com'>Twitch</a>
              <a className={onOffButton.onOffB ? "dark" : "light"} href='https://www.github.com'>GitHub</a>
              <a className={onOffButton.onOffB ? "dark" : "light"} href='https://www.unity.com'>Unity</a>
              </nav>
            </header>
    );
}

export default Header;