import React from 'react';
import { FiActivity, FiCast, FiMap } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

const ServiceList = [
  {
    icon: <FiActivity />,
    title: 'INOVATÍVNE OVLÁDANIE',
    description:
      'Obchodné signály zadávate do modernej aplikácie. Vďaka jednoduchému ovládaniu to zvládne absolútne každý.',
  },
  {
    icon: <FiCast />,
    title: 'NÍZKA INVESTÍCIA ',
    description:
      'Naše služby Vám zabezpečia možnosť investície aj s nižším kapitálom. Najnižšia investícia je tak určená na 50€. ',
  },
  {
    icon: <FiMap />,
    title: 'EFEKTVÍNA KOMUNIKÁCIA ',
    description:
      'Rozumieme potrebám a obavám našich klientov, preto sa snažíme byť neustále k dispozícií a pripravený zodpovedať Vaše otázky. ',
  },
];

const ServiceOne = ({ textAlign, serviceStyle }: any) => {
  return (
    <div className="row row--15 service-wrapper">
      {ServiceList.map((val, i) => (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
          <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={true}>
            <div className={`service ${serviceStyle} ${textAlign}`}>
              <div className="icon">{val.icon}</div>
              <div className="content">
                <h4 className="title w-600">
                  <Link to="#service" dangerouslySetInnerHTML={{ __html: val.title }}></Link>
                </h4>
                <p
                  className="description b1 color-gray mb--0"
                  dangerouslySetInnerHTML={{ __html: val.description }}
                ></p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      ))}
    </div>
  );
};
export default ServiceOne;
