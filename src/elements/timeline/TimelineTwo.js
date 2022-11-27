import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const TimelineData = [
  {
    id: '1',
    title: 'SLUŽBA',
    description: 'Pre uskutočnenie spolupráce je dôležitý výber a vloženie služby do košíka. ',
  },
  {
    id: '2',
    title: 'OBJEDNÁVKA',
    description: 'Následne prebehne realizácia objednávky a úhrada zvoleného poplatku.',
  },
  {
    id: '3',
    title: 'AKTIVÁCIA',
    description: 'Po úhrade získate mail so vstupnými informáciami a inštrukciami.',
  },
  {
    id: '4',
    title: 'ZÁROBOK',
    description: 'Po vstupnej konzultácií a nastavení Vášho účtu nasleduje zárobok.',
  },
];

const TimelineTwo = ({ classVar }) => {
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
                <p className="description">{data.description}</p>
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
