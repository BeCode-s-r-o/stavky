var LOREM_IPSUM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

// obtain cookieconsent plugin
var cc = initCookieConsent();

// run plugin with config object
cc.run({
  current_lang: 'sk',
  autoclear_cookies: false, // default: false
  cookie_name: 'cookies', // default: 'cc_cookie'
  cookie_expiration: 365, // default: 182
  page_scripts: true, // default: false
  force_consent: false, // default: false

  // auto_language: null,                     // default: null; could also be 'browser' or 'document'
  // autorun: true,                           // default: true
  // delay: 0,                                // default: 0
  // hide_from_bots: false,                   // default: false
  // remove_cookie_tables: false              // default: false
  // cookie_domain: location.hostname,        // default: current domain
  // cookie_path: '/',                        // default: root
  // cookie_same_site: 'Lax',
  // use_rfc_cookie: false,                   // default: false
  // revision: 0,                             // default: 0

  gui_options: {
    consent_modal: {
      layout: 'cloud', // box,cloud,bar
      position: 'bottom center', // bottom,middle,top + left,right,center
      transition: 'slide', // zoom,slide
    },
    settings_modal: {
      layout: 'bar', // box,bar
      position: 'left', // right,left (available only if bar layout selected)
      transition: 'slide', // zoom,slide
    },
  },

  onFirstAction: function () {},

  onAccept: function (cookie) {},

  onChange: function (cookie, changed_preferences) {
    // If analytics category is disabled => disable google analytics
    if (!cc.allowedCategory('analytics')) {
      typeof gtag === 'function' &&
        gtag('consent', 'update', {
          analytics_storage: 'denied',
        });
    }
  },

  languages: {
    en: {
      consent_modal: {
        title: 'Používame cookies',
        description:
          'Súbory cookie a ďalšie technológie sledovania používame na zlepšenie vášho zážitku\
           z prehliadania našich webových stránok, na to, aby sme vám zobrazovali prispôsobený\
            obsah a cielené reklamy, na analýzu návštevnosti našich webových stránok a na \
            pochopenie toho, odkiaľ naši návštevníci prichádzajú. \
            <a href="/ochrana-osobnych-udajov" class="cc-link">Zásady ochrany osobných údajov.</a>',
        primary_btn: {
          text: 'Prijať',
          role: 'accept_all', //'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: 'Nastavenia',
          role: 'settings', //'settings' or 'accept_necessary'
        },
        revision_message: '<br><br> Vážený používateľ, zmluvné podmienky sa od vašej poslednej návštevy zmenili!',
      },
      settings_modal: {
        title: 'Nastavenia cookies',
        save_settings_btn: 'Uložiť aktuálny výber',
        accept_all_btn: 'Prijať všetky',
        reject_all_btn: 'Odmietnuť všetky',
        close_btn_label: 'Zavrieť',
        cookie_table_headers: [{ col1: 'Meno' }, { col2: 'Doména' }, { col3: 'Expirácia' }],
        blocks: [
          {
            title: 'Vaše súkromie je pre nás dôležité',
            description:
              'Súbory cookie sú veľmi malé textové súbory, ktoré sa ukladajú do vášho \
              počítača pri návšteve webovej stránky. Súbory cookie používame na rôzne účely\
               a na zlepšenie vášho online zážitku z našej webovej stránky (napríklad na zapamätanie prihlasovacích údajov vášho účtu).\
               <br/><br/> Môžete zmeniť svoje predvoľby a odmietnuť určité typy súborov cookie, ktoré sa majú ukladať vo vašom počítači\
                pri prehliadaní našich webových stránok. Môžete tiež odstrániť všetky súbory cookie, ktoré sú už uložené vo vašom počítači, \
                ale nezabudnite, že vymazanie súborov cookie vám môže zabrániť v používaní častí našej webovej stránky.' +
              ' <a href="/ochrana-osobnych-udajov" class="cc-link">Zásady ochrany osobných údajov.</a>',
          },
          {
            title: 'Nevyhnutné cookies',
            description:
              'Tieto súbory cookie sú nevyhnutné na to, aby sme vám mohli poskytovať\
             služby dostupné prostredníctvom našej webovej stránky a aby ste mohli používať \
             určité funkcie našej webovej stránky. Bez týchto súborov cookie vám nemôžeme poskytnúť určité služby na našom webe.',
            toggle: {
              value: 'necessary',
              enabled: true,
              readonly: true, //cookie categories with readonly=true are all treated as "necessary cookies"
            },
          },
          {
            title: 'Sledovacie a výkonnostné cookies',
            description:
              'Tieto súbory cookie sa používajú na zhromažďovanie informácií na analýzu prenosu na našom webe a toho, ako návštevníci používajú náš web.\
            Tieto súbory cookie môžu napríklad sledovať napríklad to, koľko času strávite na webových stránkach alebo navštívených stránkach, čo nám pomáha pochopiť,\
             ako môžeme pre vás vylepšiť naše webové stránky.\
              Informácie zhromaždené prostredníctvom týchto súborov cookie na sledovanie a výkonnosť neidentifikujú žiadneho jednotlivého návštevníka.',
            toggle: {
              value: 'analytics',
              enabled: false,
              readonly: false,
            },
            cookie_table: [
              {
                col1: '^_ga',
                col2: window.location.href,
                col3: '24 hodín',

                is_regex: true,
              },
            ],
          },
          {
            title: 'Zacielenie a reklamné cookies',
            description:
              'Tieto súbory cookie sa používajú na zobrazovanie reklám, ktoré by vás mohli pravdepodobne zaujímať na základe vašich zvykov pri prehliadaní.\
            Tieto súbory cookie, ktoré slúžia pre náš obsah a/alebo poskytovateľov reklám, môžu kombinovať informácie zhromaždené z našej webovej stránky s ďalšími \
            informáciami, ktoré nezávisle zhromaždili, týkajúce sa aktivít vášho webového prehliadača v rámci ich siete webových stránok.\
            Ak sa rozhodnete odstrániť alebo zakázať tieto súbory cookie pre zacielenie alebo reklamu, stále sa vám budú zobrazovať reklamy, ktoré však pre vás nemusia byť relevantné.',
            toggle: {
              value: 'targeting',
              enabled: false,
              readonly: false,
              reload: 'on_disable', // New option in v2.4, check readme.md
            },
            cookie_table: [
              {
                col1: '^_cl', // New option in v2.4: regex (microsoft clarity cookies)
                col2: window.location.href,
                col3: 'Tieto súbory cookie sú nastavené spoločnosťou Microsoft Clarity',
                // path: '/',               // New option in v2.4
                is_regex: true, // New option in v2.4
              },
            ],
          },
          {
            title: 'Viac informácií',
            description:
              'Ak máte akékoľvek otázky týkajúce sa našich zásad týkajúcich sa súborov cookie a vašich možností, <a href="https://tomkowebstranky.sk">kontaktujte nás</a>.\
            Ak sa chcete dozvedieť viac, navštívte  <a href="/ochrana-osobnych-udajov" class="cc-link">Zásady ochrany osobných údajov.</a>',
          },
        ],
      },
    },
  },
});
