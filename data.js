const webapp = [
  {
    "imgLink": "./img/hangman.png",
    "title": "A discord bot to play hangman with friends",
    "demoLink": null,
    "githubLink": "https://github.com/tahaphuong/demo-discord-hangman"
  },
  {
    "imgLink": "./img/teender.png",
    "title": "Tinder clone - A dating website",
    "demoLink": null,
    "githubLink": "https://github.com/tahaphuong/teender_public"
  },
  {
    "imgLink": "./img/eclass.png",
    "title": "Homework-manager for teachers & students.",
    "demoLink": "https://eclass-thp.herokuapp.com/",
    "githubLink": "https://github.com/tahaphuong/eclass"
  },
  {
    "imgLink": "./img/borrowmoney.png",
    "title": "Debts-tracker and reminder via email",
    "demoLink": null,
    "githubLink": "https://github.com/tahaphuong/borrowMoney"
  },
]
const webstatic = [
    {
    "imgLink": "./img/snake.png",
    "title": "Classical snake game, self-freestyle coding with JS",
    "demoLink": "https://tahaphuong.github.io/snake-game",
    "githubLink": "https://github.com/tahaphuong/snake-game"
  },
  {
    "imgLink": "./img/paint.png",
    "title": "Classical snake game, self-freestyle coding with JS",
    "demoLink": "https://vue-paint.netlify.app/",
    "githubLink": "https://github.com/tahaphuong/demo-paint"
  },
  {
    "imgLink": "./img/stop-distracting.png",
    "title": "A chrome extension to keep you from distraction",
    "demoLink": null,
    "githubLink": "https://github.com/tahaphuong/stopDistracting"
  },
  {
    "imgLink": "./img/game-page.png",
    "title": "A landing page to showcase games. Made with raw CSS",
    "demoLink": "https://tahaphuong.github.io/game-page",
    "githubLink": "https://github.com/tahaphuong/game-page"
  },
]


function genProjects(data) {

  let temp = `<div class="skip work-showcase-webapp">`
  for (let item of data) {
    console.log(item)
    temp += `<div class="skip work-showcase-webapp-img" style="background-image: url(${item["imgLink"]});">
        <div class="skip work-showcase-webapp-block">
          <div class="skip work-showcase-webapp-des">${item["title"]}</div>
          <div class="skip work-showcase-webapp-link">
            <a target="_blank" href="${item["demoLink"]}" title="demo web"><ion-icon name="link-outline"></ion-icon></a>
            <a target="_blank" href="${item["githubLink"]}" title="detail & source code"><ion-icon name="code-slash-outline"></ion-icon></a>
          </div>
        </div>
      </div>
    `
  }
  temp += `</div>`

  return temp
}

const workHTML = {
  "artwork-title": `
    <div class="skip work-showcase-artworks" id="work-showcase-artworks">
      <div class="skip work-showcase-artworks-pallete">

        <div class="skip work-showcase-artworks-color">
          <div class="skip work-showcase-artworks-copied">copied</div>
          <div class="skip work-showcase-artworks-color-ball" onclick="copyOnClick('f0e2d3', this)" style="background-color: #f0e2d3"></div>
          <div class="skip work-showcase-artworks-color-name" onclick="copyOnClick('f0e2d3', this)">f0e2d3</div>
        </div>

        <div class="skip work-showcase-artworks-color">
          <div class="skip work-showcase-artworks-copied">copied</div>
          <div class="skip work-showcase-artworks-color-ball" onclick="copyOnClick('f3ceb4', this)" style="background-color: #f3ceb4"></div>
          <div class="skip work-showcase-artworks-color-name" onclick="copyOnClick('f3ceb4', this)">f3ceb4</div>
        </div>

        <div class="skip work-showcase-artworks-color">
          <div class="skip work-showcase-artworks-copied">copied</div>
          <div class="skip work-showcase-artworks-color-ball" onclick="copyOnClick('ffdecf', this)" style="background-color: #ffdecf"></div>
          <div class="skip work-showcase-artworks-color-name" onclick="copyOnClick('ffdecf', this)">ffdecf</div>
        </div>

      </div>
    <img src="./img/artworks.jpg"/>


      <div class="skip work-showcase-artworks-pallete">


        <div class="skip work-showcase-artworks-color">
          <div class="skip work-showcase-artworks-copied">copied</div>
          <div class="skip work-showcase-artworks-color-ball" onclick="copyOnClick('e4d9b4', this)" style="background-color: #e4d9b4"></div>
          <div class="skip work-showcase-artworks-color-name" onclick="copyOnClick('e4d9b4', this)">e4d9b4</div>
        </div>

        <div class="skip work-showcase-artworks-color">
          <div class="skip work-showcase-artworks-copied">copied</div>
          <div class="skip work-showcase-artworks-color-ball" onclick="copyOnClick('c9b998', this)" style="background-color: #c9b998"></div>
          <div class="skip work-showcase-artworks-color-name" onclick="copyOnClick('c9b998', this)">c9b998</div>
        </div>

        <div class="skip work-showcase-artworks-color">
          <div class="skip work-showcase-artworks-copied">copied</div>
          <div class="skip work-showcase-artworks-color-ball" onclick="copyOnClick('8f9072', this)" style="background-color: #8f9072"></div>
          <div class="skip work-showcase-artworks-color-name" onclick="copyOnClick('8f9072', this)">8f9072</div>
        </div>
      </div>
    </div>
  `,

  "webapp-title": genProjects(webapp),

  "staticweb-title": genProjects(webstatic),

  "mobile-title": `
    <div class="skip work-showcase-mobile" id="work-showcase-mobile">
          <img src="./img/film.jpg"/>
          <div class="skip work-showcase-mobile-block">
            <div class="skip work-showcase-mobile-block-title">A film app</div>
            <br><br>
            <div class="skip work-showcase-mobile-block-des">
              User can look up film and save favourite films to the download list - which is synchronized by Firebase storage.
              <br><br>
              I use "global state" to make the data changes updated in all screens.
              <br><br>
              "Loading on scroll" is applied to search result screen in order to enhance the performance.
              <br><br><br>
              <a target="_blank" href="https://github.com/tahaphuong/filmRN">Github link</a>
            </div>
          </div>
        </div>
    `
}

const workHTMLDe = {
  "artwork-title": `
  <div class="skip work-showcase-artworks" id="work-showcase-artworks">
    <div class="skip work-showcase-artworks-pallete">

      <div class="skip work-showcase-artworks-color">
        <div class="skip work-showcase-artworks-copied">kopiert</div>
        <div class="skip work-showcase-artworks-color-ball" onclick="copyOnClick('f0e2d3', this)" style="background-color: #f0e2d3"></div>
        <div class="skip work-showcase-artworks-color-name" onclick="copyOnClick('f0e2d3', this)">f0e2d3</div>
      </div>

      <div class="skip work-showcase-artworks-color">
        <div class="skip work-showcase-artworks-copied">kopiert</div>
        <div class="skip work-showcase-artworks-color-ball" onclick="copyOnClick('f3ceb4', this)" style="background-color: #f3ceb4"></div>
        <div class="skip work-showcase-artworks-color-name" onclick="copyOnClick('f3ceb4', this)">f3ceb4</div>
      </div>

      <div class="skip work-showcase-artworks-color">
        <div class="skip work-showcase-artworks-copied">kopiert</div>
        <div class="skip work-showcase-artworks-color-ball" onclick="copyOnClick('ffdecf', this)" style="background-color: #ffdecf"></div>
        <div class="skip work-showcase-artworks-color-name" onclick="copyOnClick('ffdecf', this)">ffdecf</div>
      </div>
    </div>
  <img src="./img/artworks.jpg"/>

    <div class="skip work-showcase-artworks-pallete">

      <div class="skip work-showcase-artworks-color">
        <div class="skip work-showcase-artworks-copied">kopiert</div>
        <div class="skip work-showcase-artworks-color-ball" onclick="copyOnClick('e4d9b4', this)" style="background-color: #e4d9b4"></div>
        <div class="skip work-showcase-artworks-color-name" onclick="copyOnClick('e4d9b4', this)">e4d9b4</div>
      </div>

      <div class="skip work-showcase-artworks-color">
        <div class="skip work-showcase-artworks-copied">kopiert</div>
        <div class="skip work-showcase-artworks-color-ball" onclick="copyOnClick('c9b998', this)" style="background-color: #c9b998"></div>
        <div class="skip work-showcase-artworks-color-name" onclick="copyOnClick('c9b998', this)">c9b998</div>
      </div>

      <div class="skip work-showcase-artworks-color">
        <div class="skip work-showcase-artworks-copied">kopiert</div>
        <div class="skip work-showcase-artworks-color-ball" onclick="copyOnClick('8f9072', this)" style="background-color: #8f9072"></div>
        <div class="skip work-showcase-artworks-color-name" onclick="copyOnClick('8f9072', this)">8f9072</div>
      </div>
    </div>
  </div>
  `,

  "webapp-title": `
  <div class="skip work-showcase-webapp">

    <div class="skip work-showcase-webapp-img" style="background-image: url('./img/borrowmoney.png');">
      <div class="skip work-showcase-webapp-block">
        <div class="skip work-showcase-webapp-des">Schulden-Tracker und Erinnerung per Email</div>
        <div class="skip work-showcase-webapp-link">
          <a target="_blank" href="https://borrowmoney-thp.herokuapp.com/" title="demo web"><ion-icon name="link-outline"></ion-icon></a>
          <a target="_blank" href="https://github.com/tahaphuong/borrowMoney" title="detail & source code"><ion-icon name="code-slash-outline"></ion-icon></a>

        </div>
      </div>
    </div>

    <div class="skip work-showcase-webapp-img" style="background-image: url('./img/chat.png');">
      <div class="skip work-showcase-webapp-block">
        <div class="skip work-showcase-webapp-des">ein simple Chat Web-app</div>
        <div class="skip work-showcase-webapp-link">
          <a target="_blank" href="https://tahaphuong.github.io/chat" title="demo web"><ion-icon name="link-outline"></ion-icon></a>
          <a target="_blank" href="https://github.com/tahaphuong/chat" title="detail & source code"><ion-icon name="code-slash-outline"></ion-icon></a>
        </div>
      </div>
    </div>

    <div class="skip work-showcase-webapp-img" style="background-image: url('./img/eclass.png'); border-bottom: none">
      <div class="skip work-showcase-webapp-block">
        <div class="skip work-showcase-webapp-des">Hausaufgaben-Manager für Lehrer und Schüler.</div>
        <div class="skip work-showcase-webapp-link">
          <a target="_blank" href="https://eclass-thp.herokuapp.com/" title="demo web"><ion-icon name="link-outline"></ion-icon></a>
          <a target="_blank" href="https://github.com/tahaphuong/eclass" title="detail & source code"><ion-icon name="code-slash-outline"></ion-icon></a>
        </div>
      </div>
    </div>
    <div id="filler" class="skip work-showcase-webapp-img" style="border-bottom: none">
      <div class="skip work-showcase-webapp-block">
        <ion-icon class="skip work-showcase-webapp-des" name="pizza-outline" style="font-size: 5vw; color: #353535; transition: all 0.4s"></ion-icon>
      </div>
    </div>
  </div>
  `,

  "staticweb-title": `

  <div class="skip work-showcase-webapp">
    <div class="skip work-showcase-webapp-img" style="background-image: url('./img/health.png');">
      <div class="skip work-showcase-webapp-block">
        <div class="skip work-showcase-webapp-des">Meine erste Webseite!<br>Gesundheit/Lebenstil Tipps & Tests (self-design)</div>
        <div class="skip work-showcase-webapp-link">
          <a target="_blank" href="https://tahaphuong.github.io/health" title="demo web"><ion-icon name="link-outline"></ion-icon></a>
          <a target="_blank" href="https://github.com/tahaphuong/health" title="detail & source code"><ion-icon name="code-slash-outline"></ion-icon></a>
        </div>
      </div>
    </div>

    <div class="skip work-showcase-webapp-img" style="background-image: url('./img/hac.png');">
      <div class="skip work-showcase-webapp-block">
        <div class="skip work-showcase-webapp-des">Ein Landing-Page<br>für den Kunst&Musik-klub meiner Schule. (self-design)</div>
        <div class="skip work-showcase-webapp-link">
          <a target="_blank" href="https://hsgsartclub.github.io" title="demo web"><ion-icon name="link-outline"></ion-icon></a>
          <a target="_blank" href="https://github.com/hsgsartclub/hsgsartclub.github.io" title="detail & source code"><ion-icon name="code-slash-outline"></ion-icon></a>
        </div>
      </div>
    </div>

    <div class="skip work-showcase-webapp-img" style="background-image: url('./img/udic.png'); border-bottom: none">
      <div class="skip work-showcase-webapp-block">
        <div class="skip work-showcase-webapp-des">Ein Landing-Page für ein Immobilienunternehmen</div>
        <div class="skip work-showcase-webapp-link">
          <a target="_blank" href="https://tahaphuong.github.io/udicTest" title="demo web"><ion-icon name="link-outline"></ion-icon></a>
          <a target="_blank" href="https://github.com/tahaphuong/udicTest" title="detail & source code"><ion-icon name="code-slash-outline"></ion-icon></a>
        </div>
      </div>
    </div>

    <div id="filler" class="skip work-showcase-webapp-img" style="border-bottom: none">
      <div class="skip work-showcase-webapp-block">
        <ion-icon class="skip work-showcase-webapp-des" name="rocket-outline" style="font-size: 5vw; color: #353535; transition: all 0.4s"></ion-icon>
      </div>
    </div>
  </div>
  `,

  "mobile-title": `
  <div class="skip work-showcase-mobile" id="work-showcase-mobile">
        <img src="./img/film.jpg"/>
        <div class="skip work-showcase-mobile-block">
          <div class="skip work-showcase-mobile-block-title">A film app</div>
          <br><br>
          <div class="skip work-showcase-mobile-block-des">
            Benutzer kann Filme suchen und Informationen seiner Lieblingsfilme in einer Download-Liste speichern, die von Firebase Storage synchronisiert wird.
            <br><br>
            Ich verwende "Global State", um Daten auf allen Bildschirmen sofort zu aktualisieren.
            <br><br>
            "Laden beim Scrollen" wird auf Suchbildschirm angewendet, um die Performance zu optimieren.
            <br><br><br>
            <a target="_blank" href="https://github.com/tahaphuong/filmRN">Github link</a>
          </div>
        </div>
      </div>
  `
}
