import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const TimelineData = [
  {
    id: '1',
    title: 'SLUŽBA',
    description: 'Pre uskutočnenie spolupráce je dôležitý výber a objednávka požadovanej služby.',
  },
  {
    id: '2',
    title: 'OBJEDNÁVKA',
    description: 'Následne prebehne realizácia objednávky a úhrada poplatku <br/> cez platobnú bránu. ',
  },
  {
    id: '3',
    title: 'AKTIVÁCIA',
    description: 'Po úhrade služby obdržíte mail s informáciami a vstupnými inštrukciami pre aktiváciu členstva. ',
  },
  {
    id: '4',
    title: 'ZÁROBOK',
    description: 'Po vstupnej konzultácii a nastavení Vášho účtu nasleduje zárobok <br/> cez jednoduchú aplikáciu.',
  },
];

const TimelineTwo = ({ classVar }: any) => {
  return (
    <div className="timeline-style-two bg-color-blackest">
      <div className="row row--0">
        {/* Start Single Progress */}
        {TimelineData.map((data, index) => (
          <div className={`col-lg-3 col-md-3 rn-timeline-single ${classVar}`} key={index}>
            <div className="rn-timeline">
              <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={true}>
                <h6 className="title">{data.title}</h6>
              </ScrollAnimation>
              <div className="progress-line">
                <div className="line-inner"></div>
              </div>
              <div className="progress-dot">
                <div className="dot-level">
                  <div className="dot-inner"></div>
                </div>
              </div>
              <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={true}>
                <p className="description" dangerouslySetInnerHTML={{ __html: data.description || '' }} />
              </ScrollAnimation>
            </div>
          </div>
        ))}
        {/* End Single Progress */}
      </div>
    </div>
  );
};
export default TimelineTwo;
