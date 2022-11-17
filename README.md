## ForexPoradenstvo & StavkovePoradenstvo

![CI/CD](https://github.com/VladimirTomko/stavky/actions/workflows/main.yml/badge.svg)

Pôjde o 2 webky ktoré budú úplne identické, jedine sa budú pri builde setovať ENV variable a na základe podmienok v kóde sa zmení text/logo/farba,…

Toto si ešte preberieme, zatiaľ treba poukldať komponenty, šablónka je reactová takže o starosť menej.

Potom si zavoláme a preberieme nejaký CW a fotky + úpravy od klienta.

**Poprosím ťa všetky prehodiť do TYPESCRIPTU .tsx !**

---

Linky:

- [https://www.forexporadenstvo.sk](https://www.forexporadenstvo.sk)
- [https://www.stavkoveporadenstvo.sk](https://www.stavkoveporadenstvo.sk)

---

Texty:

[POSTUP-WEBU.docx](https://github.com/VladimirTomko/stavky/files/10016203/POSTUP-WEBU.docx)

---

FTP:

forexporadenstvo.sk
ftp.forexporadenstvo.sk
Oz2P]7LU}|

stavkoveporadenstvo.sk
ftp.stavkoveporadenstvo.sk
Wy1=?6T^0B

---

Firebase

```
npm install firebase
```

```js
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDO_IO7ZFUrVl-44Klo6JjNXPgeJfCMsYY',
  authDomain: 'forex-stavkove.firebaseapp.com',
  projectId: 'forex-stavkove',
  storageBucket: 'forex-stavkove.appspot.com',
  messagingSenderId: '440847828743',
  appId: '1:440847828743:web:a9d2199ca6d9b176d9a7a2',
  measurementId: 'G-64DZNMWGSY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

---

ENV
Budeme stále používať env REACT_APP_WEBSITE_TYPE : forex | stavkove a podla toho budeme davat podmienky na content (texty,fotky,farby,...)

```json
 "scripts": {
    "start:forex": "REACT_APP_WEBSITE_TYPE=forex react-scripts start",
    "start:stavkove": "REACT_APP_WEBSITE_TYPE=stavkove react-scripts start",
    "build:forex": "REACT_APP_WEBSITE_TYPE=forex react-scripts build",
    "build:stavkove": "REACT_APP_WEBSITE_TYPE=stavkove react-scripts build"
  },
```

---

Farby:

```css
FOREX {
  color1: #463acc;
  color2: #352c99;
}
STAVKOVE {
  color: #3b055b;
  color1: #2c074f;
}
```

---

## Rozloženie webu/komponentov

| KOMPONENT                             | LINK                                                                                   | SPLNENÉ |
| ------------------------------------- | -------------------------------------------------------------------------------------- | ------- |
| ÚVOD                                  | [https://doob.rainbowit.net/web-agency](https://doob.rainbowit.net/web-agency)         | ❌      |
| SLUŽBY                                | [https://doob.rainbowit.net/service](https://doob.rainbowit.net/service)               | ❌      |
| INFORMÁCIE                            | [https://doob.rainbowit.net/tab](https://doob.rainbowit.net/tab)                       | ❌      |
| TIMELINE                              | [https://doob.rainbowit.net/timeline](https://doob.rainbowit.net/timeline)             | ❌      |
| ČLENSTVO                              | [https://doob.rainbowit.net/pricing](https://doob.rainbowit.net/pricing)               | ❌      |
| ŠTATISTIKY                            | [https://doob.rainbowit.net/counter](https://doob.rainbowit.net/counter)               | ❌      |
| REFERENCIE                            | [https://doob.rainbowit.net/testimonial](https://doob.rainbowit.net/testimonial)       | ❌      |
| VÝZVA NA INSTAGRAM A TELEGRAM         | [https://doob.rainbowit.net/call-to-action](https://doob.rainbowit.net/call-to-action) | ❌      |
| FAQ                                   | [https://doob.rainbowit.net/accordion](https://doob.rainbowit.net/accordion)           | ❌      |
| STÁLE VÁHATE? PREZRITE SI NAŠU PONUKU | [https://doob.rainbowit.net/call-to-action](https://doob.rainbowit.net/call-to-action) | ❌      |
| SLEDUJTE NÁS NA SOCIÁLNYCH SIEŤACH    | [https://doob.rainbowit.net/social-share](https://doob.rainbowit.net/social-share)     | ❌      |
| BLOG                                  | [https://doob.rainbowit.net/blog-grid](https://doob.rainbowit.net/blog-grid)           | ❌      |
| KONTAKT                               | [https://doob.rainbowit.net/contact](https://doob.rainbowit.net/contact)               | ❌      |

---

## Balíky

1.  STARTER
    1.  1-3 TIPY DENNE
    2.  ÚSPEŠNOSŤ 78-80%
    3.  24/7 SUPPORT
    4.  TELEGRAM NOTIFIKÁCIE
        1.  **15 DNÍ | 39.90€**
        2.  **30 DNÍ | 69.90€**
        3.  **90 DNÍ | 149.90€**
2.  KOMBI
    1.  **STARTER & EXCLUSIVE**
    2.  **LIMITOVANÉ MIESTA**
    3.  **VERIFIKOVANÉ ZDROJE**
    4.  **5-15 TIPOV DENNE**
    5.  **VYSOKÝ KURZ ZDARMA**
    6.  **ÚSPEŠNOSŤ 84-86%**
    7.  **24/7 SUPPORT**
    8.  **TELEGRAM NOTIFIKÁCIE**
        1.  **30 DNÍ | 129.90€ (-40€)**
        2.  **90 DNÍ | 219.90€ (-100€)**
        3.  **180 DNÍ | 299.90€ (-140€)**
3.  EXCLUSIVE
    1.  **2-5 TIPOV DENNE**
    2.  **ÚSPEŠNOSŤ 81-83%**
    3.  **24/7 SUPPORT**
    4.  **TELEGRAM NOTIFIKÁCIE**
        1.  **30 DNÍ | 99.90€**
        2.  **90 DNÍ | 169.90€**
        3.  **180 DNÍ | 239.90€**
