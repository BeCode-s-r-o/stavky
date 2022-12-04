import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
const pageType = process.env.REACT_APP_WEBSITE_TYPE;
const AccordionOne = ({ customStyle }) => {
  return (
    <Accordion className={`rn-accordion-style ${customStyle}`} defaultActiveKey="">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            {pageType === 'forex' ? 'Ako to v jednoduchosti celé funguje?' : 'Ako to v jednoduchosti celé funguje?'}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            {pageType === 'forex'
              ? 'V jednoduchosti si stačí zakúpiť naše členstvo, po zakúpení členstva získate vstupné informácie a inštrukcie. Po vstupnej konzultácií a vytvorení účtu u brokera, stačí zadávať naše signály do aplikácie. Zisk vidíte automaticky v aplikácií. Samozrejme Vám na začiatku vysvetlíme celý postup, aby ste boli pripravený na zadávanie obchodu do aplikácie. Je to veľmi jednoduché a zvládne to každý, náš support je Vám neustále k dispozícií.'
              : 'V jednoduchosti si stačí zakúpiť naše členstvo, po zakúpení členstva získate vstupné informácie a inštrukcie. Po vstupnej konzultácií a vytvorení účtu v stávkovej kancelárií, stačí zadávať naše tipy do aplikácie. Zisk vidíte automaticky v aplikácií. Samozrejme Vám na začiatku vysvetlíme celý postup, aby ste boli pripravený na zadávanie tipov do aplikácie. Je to veľmi jednoduché a zvládne to každý, náš support je Vám neustále k dispozícií. '}
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Aký balík odporúčate?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            {pageType === 'forex'
              ? 'Určite odporúčame KOMBI balík, získate najväčší počet signálov a taktiež PRÉMIOVÝ signál ZDARMA. Pokiaľ chcete zarábať čo najviac, potrebujete zadávať čo najviac signálov, preto je na rozbeh investovania tento balík ideálny, pokiaľ si zakúpite balík na dlhšie obdobie, overíte si naše služby z dlhodobého hľadiska a budete tak vedieť lepšie posúdiť našu úspešnosť a Váš zárobok. Ku každej službe získate informácie a inštrukcie ohľadom obchodovania. '
              : 'Určite odporúčame KOMBI balík, získate najväčší počet tipov a taktiež VYSOKÝ kurz ZDARMA. Pokiaľ chcete zarábať čo najviac, potrebujete zadávať čo najviac tipov, preto je na rozbeh investovania tento balík ideálny, pokiaľ si zakúpite balík na dlhšie obdobie, overíte si naše služby z dlhodobého hľadiska a budete tak vedieť lepšie posúdiť našu úspešnosť a Váš zárobok. Ku každej službe získate informácie a inštrukcie ohľadom stávkovania.              '}
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            Cez akú aplikáciu sa {pageType === 'forex' ? 'obchoduje' : 'stávkuje'}?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            {pageType === 'forex'
              ? 'Obchodujeme cez aplikáciu MetaTrader 5, niektorý klienti využívajú Vantage Trade Smarter. Sú to aplikácie dostupné pre každého, predtým však musíte mať registráciu u brokera, máme k dispozícií odporúčanie na 2 brokerské kancelárie, všetko Vám napíšeme po zakúpení členstva. Vklad a výber peňazí môžete realizovať kedykoľvek, svoje financie máte neustále pod kontrolou. Aplikácie nájdete dostupné v App Store alebo Google Play. '
              : 'Stávkujeme cez aplikáciu Fortuna, niektorý klienti využívajú Tipsport. Sú to aplikácie dostupné pre každého, predtým však musíte mať registráciu v stávkovej kancelárií, máme k dispozícií odporúčanie na 2 stávkové kancelárie, všetko Vám napíšeme po zakúpení členstva. Vklad a výber peňazí môžete realizovať kedykoľvek, svoje financie máte neustále pod kontrolou. Aplikácie nájdete dostupné v App Store alebo Google Play.'}
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="3">
            Ako často sú {pageType === 'forex' ? 'signály' : 'tipy'} odosielané?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            {pageType === 'forex'
              ? 'Signály odosielame v priebehu dňa, zväčša poobede, môže sa však stať že príde signál aj ráno alebo podvečer, všetko závisí od zdrojov, keď nám zdroj zašle signál, urobíme internú analýzu a po schválení odosielame signál do telegram skupiny. Signály sú každý pracovný deň, nakoľko je to však rizikový trh, môže sa stať že niekedy bude v skupine voľno, tým pádom Vám nepríde signál a v daný deň neobchodujeme a nezadávame signály.'
              : 'Tipy odosielame v priebehu dňa, zväčša poobede, môže sa však stať že príde tip aj ráno alebo podvečer, všetko závisí od zdrojov, keď nám zdroj zašle tip, urobíme internú analýzu a po schválení odosielame hotový tip do telegram skupiny. Tipy sú každý pracovný deň, nakoľko je to však individuálne, môže sa stať že niekedy bude v skupine voľno, tým pádom Vám nepríde tip a v daný deň nestávkujeme a nezadávame stávkové tipy.'}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="6">
            Je úspešnosť služieb garantovaná?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="6">
          <Card.Body>
            {pageType === 'forex'
              ? 'Úspešnosť služieb negarantujeme. Je to investícia a s tým má súvis aj riziko. Pokiaľ však počas členstva nedosiahnete zisk, stačí nám napísať a členstvo Vám predĺžime, bližšie podmienky si dohodneme po individuálnej komunikácií. Stratové mesiace sú však minimálne, vďaka skvelým zdrojom dokážeme vytvárať niekoľko % mesačné zhodnotenie. Práve kvôli tomu odporúčame spoluprácu na dlhšie obdobie, získate prehľad o dlhodobej úspešnosti.'
              : 'Úspešnosť služieb negarantujeme. Je to investícia a s tým má súvis aj riziko. Pokiaľ však počas členstva nedosiahnete zisk, stačí nám napísať a členstvo Vám predĺžime, bližšie podmienky si dohodneme po individuálnej komunikácií. Stratové mesiace sú však minimálne, vďaka skvelým zdrojom dokážeme vytvárať niekoľko % mesačné zhodnotenie. Práve kvôli tomu odporúčame spoluprácu na dlhšie obdobie, získate prehľad o dlhodobej úspešnosti.'}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};
export default AccordionOne;
