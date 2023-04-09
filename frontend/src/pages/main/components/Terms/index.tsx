import icon from "assets/nav/terms.svg";
import art from "assets/terms/terms_card-art.svg";
import { motion, MotionStyle } from "framer-motion";
import { SectionHeader } from "shared/components";
import { Section } from "shared/types";
import { animations } from "shared/utils";
import "./styles.scss";

const motionDivStyles = {
  width: "45%",
  minWidth: "35rem",
} as MotionStyle;

const termsItemsData = [
  {
    percent: "50",
    text: "прибыли идут нашей команде",
  },
  {
    percent: "50",
    text: "прибыли вам каждые 3 дня",
  },
];

const Terms = () => {
  return (
    <section id='terms' className='terms'>
      <SectionHeader>Условия работы</SectionHeader>
      <div className='terms__wrapper'>
        {termsItemsData.map((item, key) => (
          <motion.div
            {...animations.fadeSkew(-5)}
            style={motionDivStyles}
            key={key}
          >
            <div className='terms__item block_bg'>
              <div className='terms__item__percent'>{`${item.percent}%`}</div>
              <p className='terms__item__term'>{item.text}</p>
              <img className='terms__item__art' src={art} alt='Circles art' />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const sectionData = {
  id: "terms",
  label: "Условия",
  iconSrc: icon,
} as Section;

export default Terms;
