import React from 'react';
import './ZodiacSignContainer.css';
import './sag.jpg';
import { Link } from 'react-router-dom';

const ZodiacSignContainer = ({ id }) => {
  return (
    <section className="button-container">
      <h1 className="choose-sign">Choose Your Zodiac Sign</h1>
      <section className="top-buttons">
        <Link to={`/aries`}>
          <div>
            <button id="aries">
              Aries
              <p>Mar 21 - Apr 19</p>
            </button>
          </div>
        </Link>
        <Link to={`/${id}`}>
          <div>
            <button id="taurus">
              Taurus
              <p>Apr 20 - May 20</p>
            </button>
          </div>
        </Link>
        <Link to={`/${id}`}>
          <div>
            <button id="gemini">
              Gemini
              <img
                className="gemini-pic"
                src="gemini.jpg"
                alt="Gemini symbol"
              />
              <p>May 21 -Jun 20</p>
            </button>
          </div>
        </Link>
        <Link to={`/${id}`}>
          <div>
            <button id="cancer">
              Cancer
              <p>Jun21 - Jul 22</p>
            </button>
          </div>
        </Link>
        <Link to={`/${id}`}>
          <div>
            <button id="leo">
              Leo
              <p>Jul 23 - Aug 22</p>
            </button>
          </div>
        </Link>
        <Link to={`/${id}`}>
          <div>
            <button id="virgo">
              Virgo
              <p>Aug 23 - Sep 22</p>
            </button>
          </div>
        </Link>
      </section>
      <section className="bottom-buttons">
        <Link to={`/${id}`}>
          <div>
            <button id="libra">
              Libra
              <p>Sep 23 - Oct 22</p>
            </button>
          </div>
        </Link>
        <Link to={`/${id}`}>
          <div>
            <button id="scorpio">
              Scorpio
              <p>Oct 23 - Nov 21</p>
            </button>
          </div>
        </Link>
        <Link to={`/${id}`}>
          <div>
            <button id="sagittarius">
              Sagittarius
              <img
                alt="Sagittarius Zodiac Sign"
                className="img-responsive"
                src="sag.jpg"
              />
              <p>Nov 22 - Dec 21</p>
            </button>
          </div>
        </Link>
        <Link to={`/${id}`}>
          <div>
            <button id="capricorn">
              Capricorn
              <p>Dec 22 - Jan 19</p>
            </button>
          </div>
        </Link>
        <Link to={`/${id}`}>
          <div>
            <button id="aquarius">
              Aquarius
              <p>Jan 20 - Feb 18</p>
            </button>
          </div>
        </Link>
        <Link to={`/${id}`}>
          <div>
            <button id="pisces">
              Pisces
              <p>Feb 19 - Mar 20</p>
            </button>
          </div>
        </Link>
      </section>
    </section>
  );
};

export default ZodiacSignContainer;
