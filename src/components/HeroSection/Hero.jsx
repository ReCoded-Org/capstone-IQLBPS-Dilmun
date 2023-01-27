import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SIGN_UP_ROUTE } from '../../route';

function Hero() {
  const { t } = useTranslation();
  return (
    <div
      data-testid="hero-section"
      className=" overflow-hidden backdrop-blur-md bg-background h-[100vh] bg-hero-bg bg-no-repeat text-center text-background bg-cover bg-center"
    >
      <div className="backdrop-blur-md w-full h-full  flex flex-col justify-center text-center">
        <div className=" text-bg-black md:mx-0 mx-4">
          <h1 className=" text-background text-7xl font-bold  ">
            {t('hero.welcome_to_dilmun')}
          </h1>
          <p className="text-background text-xl my-4">{t('hero.your_way')}</p>
          <div className="btn__container">
            <Link to={SIGN_UP_ROUTE}>
              <button
                type="button"
                className="bg-secondary hover:bg-tertiary text-white font-bold py-2 px-4 rounded-full"
              >
                {t('hero.get_started')}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
