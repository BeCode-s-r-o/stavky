import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';

const Data = [
  {
    countNum: 900,
    countTitle: 'SPOKOJNÝCH KLIENTOV',
    description: 'Celkovo sme pomohli už viac ako 900 spokojným klientom.',
    suffix: '+',
  },
  {
    countNum: 8,
    countTitle: 'ROKOV PÔSOBENIA',
    description: 'Na našom trhu pôsobíme už viac ako 8 rokov. ',
    suffix: '+',
  },
  {
    countNum: 87,
    countTitle: 'DLHODOBÁ ÚSPEŠNOSŤ ',
    description: 'Naša úspešnosť služieb z dlhodobého hľadiska dosahuje až 87%. ',
    suffix: '%',
  },
];
const CounterUpTwo = ({ textALign, counterStyle, column }) => {
  return (
    <div className="row">
      {Data.map((data, index) => (
        <div className={`${column}`} key={index}>
          <div className={`count-box ${counterStyle} ${textALign}`}>
            <TrackVisibility once>
              {({ isVisible }) =>
                isVisible && (
                  <div className="count-number">
                    {isVisible ? <CountUp end={data.countNum} suffix={data.suffix} /> : 0}
                  </div>
                )
              }
            </TrackVisibility>
            <h5 className="title">{data.countTitle}</h5>
            <p className="description">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CounterUpTwo;
