import ScrollAnimation from 'react-animate-on-scroll';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
const pageType = process.env.REACT_APP_WEBSITE_TYPE;
const testimonialData = [
  {
    // image: 'tesktimonial-01',

    image: pageType === 'forex' ? 1 : 20,
    name: pageType === 'forex' ? 'Filip Paštrák' : 'Samuel Golonka',
    designation: pageType === 'forex' ? 'revízny technik' : 'vysokoškolský študent',
    location: 'CO Miego, AD, USA',
    description:
      pageType === 'forex'
        ? '“Celkový zisk zatiaľ okolo 5000€, začínal som s kapitálom cca 200€, pecka!„'
        : '“Vložil som 648.40€ a celkovo som vyhral až 6873.04€! Určite odporúčam.„',
  },
  {
    // image: 'tesktimonial-01',
    image: 9,
    name: pageType === 'forex' ? 'Juraj Lacko' : 'Filip Jakubovič',
    designation: pageType === 'forex' ? 'architekt' : 'podnikateľ',
    location: 'CO Miego, AD, USA',
    description:
      pageType === 'forex'
        ? '“Prémiové signály sú skvelá vec, vďaka tomuto som svoj zisk zvýšil o pár stovák.„'
        : '“Komunikácia na úrovni a najmä skvelé zdroje, dlhodobo úspešné a profitabilné!„',
  },
  {
    // image: 'tesktimonial-01',
    image: 3,
    name: pageType === 'forex' ? 'Peter Tóth' : 'Martin Kubovčík',
    designation: pageType === 'forex' ? 'PR špecialista' : 'marketingový špecialista',
    location: 'CO Miego, AD, USA',
    description:
      pageType === 'forex'
        ? '“Za prvé 3 mesiace pri vašej firme    som zarobil necelých 3K eur!„'
        : '“Priniesli ste mi výhru až 1500.20€.    Vďaka Vám som sa naučil stávkovať!„',
  },
  {
    // image: 'tesktimonial-01',
    image: pageType === 'forex' ? 13 : 22,
    name: pageType === 'forex' ? 'Dušan Fulla' : 'Elena Siváková',
    designation: pageType === 'forex' ? 'elektrotechnik' : 'mamička na materskej',
    location: 'CO Miego, AD, USA',
    description:
      pageType === 'forex'
        ? '“Nikdy predtým som forex nerobil    a za prvý týždeň mám zisk 250€.„'
        : '“Nikdy som nestávkovala, dala som na    odporúčania a zatiaľ mám zisk okolo 890€.„',
  },
  {
    // image: 'tesktimonial-01',
    image: 5,
    name: pageType === 'forex' ? 'Dávid Tomčík' : 'Dávid Mataj',
    designation: pageType === 'forex' ? 'statik' : 'klampiar',
    location: 'CO Miego, AD, USA',
    description:
      pageType === 'forex'
        ? '“Musím vyzdvihnúť aktivitu na telegrame    a skvelé prevedenie dizajnu spoločnosti.„'
        : '“Vďaka Stávkovému Poradenstvu mám        konečne pasívny príjem cez aplikáciu.„',
  },
  {
    // image: 'tesktimonial-01',
    image: pageType === 'forex' ? 19 : 11,
    name: pageType === 'forex' ? 'Václav Macák' : 'Martina Lazuchová',
    designation: pageType === 'forex' ? 'predajca vozidiel' : 'zdravotná sestra',
    location: 'CO Miego, AD, USA',
    description:
      pageType === 'forex'
        ? '“Vďaka forexu som sa naučil    vytrvalosti, maximálna spokojnosť!„'
        : '“Som u Vás už 3 roky a musím uznať že    Vaše služby sú kvalitné a odborné.„',
  },
  {
    // image: 'tesktimonial-01',
    image: pageType === 'forex' ? 12 : 18,
    name: pageType === 'forex' ? 'Tatiana Roháčová' : 'Tibor Lazár',
    designation: pageType === 'forex' ? 'mamička na materskej' : 'kuriér',
    location: 'CO Miego, AD, USA',
    description:
      pageType === 'forex'
        ? '“Nakoľko som nová, ešte mi to nejde ako    ostatným, ale som v zisku cca 300€!„'
        : '“Pri kombinovanom balíku som zaznamenal      najvyšší počet tipov a najlepšiu úspešnosť.„',
  },
  {
    // image: 'tesktimonial-01',
    image: pageType === 'forex' ? 8 : 15,
    name: pageType === 'forex' ? 'Monika Kupčovie' : 'Samuel Krištofič',
    designation: pageType === 'forex' ? 'prekladateľka' : 'realitný maklér',
    location: 'CO Miego, AD, USA',
    description:
      pageType === 'forex'
        ? '“Forex je zložitý, ale vďaka vašim    dokumentom je to malina, vďaka.„'
        : '“Rýchla komunikácia a odpoveď na    všetky moje otázky, zatiaľ spokojnosť.„',
  },
  {
    // image: 'tesktimonial-01',
    image: pageType === 'forex' ? 2 : 23,
    name: pageType === 'forex' ? 'Zuzana Vargová' : 'Mária Kaderová',
    designation: pageType === 'forex' ? 'recepčná' : 'účtovníčka',
    location: 'CO Miego, AD, USA',
    description:
      pageType === 'forex'
        ? '“Zatiaľ som so všetkým spokojná, určite    si balík predĺžim, rovno na kombinovaný!„'
        : '“Po otestovaní FREE skupiny som si zakúpila        členstvo KOMBI a môj zisk stúpol o 230%!„',
  },
];

const sliderSettings = {
  dots: true,
  slidesToShow: 3,
  speed: 1000,
  slidesToScroll: 1,
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplayspeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

const TestimonialOne = ({ column, teamStyle }: any) => {
  return (
    <div className="row row--15">
      <Slider {...sliderSettings}>
        {testimonialData.map((data, index) => (
          <div className={`${column} mx-4`} key={index}>
            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={true}>
              <div className={`rn-box-card ${teamStyle}`}>
                <div className="inner mx-2">
                  <figure className="thumbnail">
                    <img src={`./images/testimonial/recerence${data.image}.jpg`} alt="img" />
                  </figure>
                  <figcaption className="content">
                    <p className="description">{data.description}</p>
                    <h2 className="title">{data.name}</h2>
                    <h6 className="subtitle theme-gradient">{data.designation}</h6>
                  </figcaption>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialOne;
