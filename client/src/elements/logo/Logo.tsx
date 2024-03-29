import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Logo = ({ image, img2 }: any) => {
  return (
    <div className="logo">
      <Link to={process.env.PUBLIC_URL + '/'}>
        <img className="logo-light" src={image} alt="logo" />
        <img className="logo-dark" src={image} alt="logo" />
      </Link>
    </div>
  );
};
Logo.propTypes = {
  image: PropTypes.string,
};

export default Logo;
