import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const TabTwo = ({ pageType }) => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <Tabs>
            <div className="row row--30 align-items-center">
              <div className="col-lg-5">
                <img
                  className="radius-small"
                  src={pageType === 'forex' ? '/images/team/mock1.jpg' : '/images/team/mock2.jpg'}
                  alt="Corporate React Template"
                />
              </div>
              <div className="col-lg-7 mt_md--40 mt_sm--40">
                <div className="rn-default-tab style-two">
                  <div className="tab-button-panel">
                    <TabList className="tab-button">
                      <Tab>
                        <div className="rn-tab-button">
                          <button>O NÁS</button>
                        </div>
                      </Tab>
                      <Tab>
                        <div className="rn-tab-button">
                          <button>VÍZIA</button>
                        </div>
                      </Tab>
                      <Tab>
                        <div className="rn-tab-button">
                          <button>VÝHODY</button>
                        </div>
                      </Tab>
                    </TabList>
                  </div>

                  <div className="tab-content-panel">
                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <p>
                            {pageType === 'forex'
                              ? 'Naša spoločnosť poskytuje odborné poradenstvo a konzultácie v oblasti obchodovania menových párov. Sme tím zložený z 5 členov, máme niekoľkoročné skúsenosti v oblasti akciových trhov a taktiež celkový prehľad v ekonomike a investíciách.'
                              : 'Naša spoločnosť poskytuje odborné poradenstvo a konzultácie v oblasti stávkovania športových zápasov. Sme tím zložený z 5 členov, máme niekoľkoročné skúsenosti v oblasti stávkovania zápasov a taktiež celkový prehľad v športe a investíciách.'}
                          </p>

                          <p>
                            {pageType === 'forex'
                              ? 'Fungujeme niekoľko rokov ako legálna spoločnosť, máme najväčšie marketingové zázemie na Slovenskom a Českom trhu a podporujú nás najväčší influenceri na trhu.'
                              : 'Fungujeme niekoľko rokov ako legálna spoločnosť, máme najväčšie marketingové zázemie na Slovenskom a Českom trhu a podporujú nás najväčší influenceri na trhu. '}
                          </p>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <p>
                            {pageType === 'forex'
                              ? 'Snažíme sa pomôcť čo najväčšiemu rozsahu klientov, v aktuálnej situácií sú najzásadnejšie investičné príležitosti pred nami, ochráňte svoje financie pred infláciou. Získajte finančnú stabilitu a možnosť viacerých online príjmov.'
                              : 'Snažíme sa pomôcť čo najväčšiemu rozsahu klientov, v aktuálnej situácií sú najzásadnejšie investičné príležitosti pred nami, ochráňte svoje financie pred infláciou. Získajte finančnú stabilitu a možnosť viacerých online príjmov. '}
                          </p>

                          <p>
                            {pageType === 'forex'
                              ? 'Našim klientom sa každodenne snažíme priniesť ziskové a prehľadné signály na určenie pohybu trhu. Využívame svetové zdroje s dlhodobou a overenou úspešnosťou. Do súkromnej skupiny získate pravidelne viaceré signály pre dosiahnutie zárobku.'
                              : 'Našim klientom sa každodenne snažíme priniesť ziskové a prehľadné tipy na určenie výsledku zápasu. Využívame svetové zdroje s dlhodobou a overenou úspešnosťou. Do súkromnej skupiny získate pravidelne viaceré tipy pre dosiahnutie zárobku.'}
                          </p>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <p>
                            {pageType === 'forex'
                              ? 'Spolupráca je dynamická a signály budete získavať priamo do Vášho telefónu prostredníctvom telegram notifikácie. Dbáme na serióznu spoluprácu, každý klient má prideleného osobného konzultanta v prípade akýchkoľvek otázok.'
                              : 'Spolupráca je dynamická a tipy budete získavať priamo do Vášho telefónu prostredníctvom telegram notifikácie. Dbáme na serióznu spoluprácu, každý klient má prideleného osobného konzultanta v prípade akýchkoľvek otázok.'}
                          </p>

                          <p>
                            {pageType === 'forex'
                              ? 'Naše komplexné služby zabezpečia pravidelnú aktualizáciu noviniek, profesionálnu konzultáciu, dôkladné analýzy udalostí a najmä úspešné signály pre dosiahnutie Vašich ambícií v obchodovaní menových párov.'
                              : 'Naše komplexné služby zabezpečia pravidelnú aktualizáciu noviniek, profesionálnu konzultáciu, dôkladné analýzy udalostí a najmä úspešné tipy pre dosiahnutie Vašich ambícií v stávkovaní športových zápasov. '}
                          </p>
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TabTwo;
