import React from 'react';
import PropTypes from 'prop-types';
import './ZodiacCard.css';
import { Link } from 'react-router-dom';
import virgo from '.././assets/virgo.webp';
import taurus from '.././assets/taurus.webp';
import scorpio from '.././assets/scorpio.webp';
import pisces from '.././assets/pisces.webp';
import libra from '.././assets/libra.webp';
import leo from '.././assets/leo.webp';
import gemini from '.././assets/gemini.webp';
import capricorn from '.././assets/capricorn.webp';
import cancer from '.././assets/cancer.webp';
import aries from '.././assets/aries.webp';
import aquarius from '.././assets/aquarius.webp';
import sag from '.././assets/sag.jpg';

const ZodiacCard = () => {
  return (
    <>
      <section className="buttons">
        <Link to={`/singlezodiac/aries/today`}>
          <div>
            <button className="button-styling" id="aries">
              <img src={aries} alt="Aries symbol" />
              <p>Aries</p>
              <p>Mar 21 - Apr 19</p>
            </button>
          </div>
        </Link>
        <Link to={`/singlezodiac/taurus/today`}>
          <div>
            <button className="button-styling" id="taurus">
              <img src={taurus} alt="Taurus symbol" />
              <p>Taurus</p>
              <p>Apr 20 - May 20</p>
            </button>
          </div>
        </Link>
        <Link to={`/singlezodiac/gemini/today`}>
          <div>
            <button className="button-styling" id="gemini">
              <img src={gemini} alt="Gemini symbol" />
              <p>Gemini</p>
              <p>May 21 -Jun 20</p>
            </button>
          </div>
        </Link>
        <Link to={`/singlezodiac/cancer/today`}>
          <div>
            <button className="button-styling" id="cancer">
              <img src={cancer} alt="Cancer symbol" />
              <p>Cancer</p>
              <p>Jun21 - Jul 22</p>
            </button>
          </div>
        </Link>
        <Link to={`/singlezodiac/leo/today`}>
          <div>
            <button className="button-styling" id="leo">
              <img src={leo} alt="Leo symbol" />
              <p>Leo</p>
              <p>Jul 23 - Aug 22</p>
            </button>
          </div>
        </Link>
        <Link to={`/singlezodiac/virgo/today`}>
          <div>
            <button className="button-styling" id="virgo">
              <img src={virgo} alt="Virgo Icon" />
              <p>Virgo</p>
              <p>Aug 23 - Sep 22</p>
            </button>
          </div>
        </Link>
        <Link to={`/singlezodiac/libra/today`}>
          <div>
            <button className="button-styling" id="libra">
              <img src={libra} alt="Libra Icon" />
              <p>Libra</p>
              <p>Sep 23 - Oct 22</p>
            </button>
          </div>
        </Link>
        <Link to={`/singlezodiac/scorpio/today`}>
          <div>
            <button className="button-styling" id="scorpio">
              <img src={scorpio} alt="Scorpio Icon" />
              <p>Scorpio</p>
              <p>Oct 23 - Nov 21</p>
            </button>
          </div>
        </Link>
        <Link to={`/singlezodiac/sagittarius/today`}>
          <div>
            <button className="button-styling" id="sagittarius">
              <img src={sag} alt="Sagittarius Icon" />
              <p>Sagittarius</p>
              <p>Nov 22 - Dec 21</p>
            </button>
          </div>
        </Link>
        <Link to={`/singlezodiac/capricorn/today`}>
          <div>
            <button className="button-styling" id="capricorn">
              <img src={capricorn} alt="Capricorn Icon" />
              <p>Capricorn</p>
              <p>Dec 22 - Jan 19</p>
            </button>
          </div>
        </Link>
        <Link to={`/singlezodiac/aquarius/today`}>
          <div>
            <button className="button-styling" id="aquarius">
              <img src={aquarius} alt="Aquarius Icon" />
              <p>Aquarius</p>
              <p>Jan 20 - Feb 18</p>
            </button>
          </div>
        </Link>
        <Link to={`/singlezodiac/pisces/today`}>
          <div>
            <button className="button-styling" id="pisces">
              <img src={pisces} alt="Pisces Icon" />
              <p>Pisces</p>
              <p>Feb 19 - Mar 20</p>
            </button>
          </div>
        </Link>
      </section>
    </>
  );
};

export default ZodiacCard;

ZodiacCard.propTypes = {
  id: PropTypes.number,
};
