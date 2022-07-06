
import React, { useState } from 'react';
import "./reset.css"
import "./Styles.css" 
import Header from "./Header.jsx"

function App() {

  const [onOffButton, setOnOffButton] = useState(false);






  return (
    <>
  <Header onOffB={onOffButton} setOnOffB={setOnOffButton} />
  <main className={
  onOffButton ? "dark" : "light"
}>
  
      <section>
        <article>
          <img src="https://source.unsplash.com/random/300x200" alt="random img from unsplash"></img>
          <h2>
            Article One
          </h2>
          <p>Once upon a time there were some words that were there to take up space and show developers what it would look like with actual text there. Once upon a time there were some words that were there to take up space and show developers what it would look like with actual text there. Once upon a time there were some words that were there to take up space and show developers what it would look like with actual text there.</p>
        </article>

        <article>
          <img src="https://source.unsplash.com/random/301x200" alt="random img from unsplash"></img>
          <h2>
            Article Two
          </h2>
          <p>Once upon a time there were some words that were there to take up space and show developers what it would look like with actual text there. Once upon a time there were some words that were there to take up space and show developers what it would look like with actual text there. Once upon a time there were some words that were there to take up space and show developers what it would look like with actual text there.</p>
        </article>

        <article>
          <img src="https://source.unsplash.com/random/300x201" alt="random img from unsplash"></img>
          <h2>
           Article Three
          </h2>
          <p>Once upon a time there were some words that were there to take up space and show developers what it would look like with actual text there. Once upon a time there were some words that were there to take up space and show developers what it would look like with actual text there. Once upon a time there were some words that were there to take up space and show developers what it would look like with actual text there.</p>
        </article>
      </section>


      </main>

      <footer className={
  onOffButton ? "dark" : "light"
}>
  Copyright 2022 Homebrew Studios LLC
        </footer>
</>
  )
}

export default App;
