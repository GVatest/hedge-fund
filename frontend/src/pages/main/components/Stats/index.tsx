import icon from "assets/nav/flows.svg";
import Chart from "entities/Chart";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Section } from "shared/types";
import { animations } from "shared/utils";
import "./styles.scss";

function Stats() {
  return (
    <motion.section {...animations.fade} id='stats' className='stats'>
      <div className='stats__content'>
        <div className='stats__content__title'>Hedge Fund</div>
        <div className='stats__content__text'>
          A. C. Hedge - это инвестиционный фонд, который позволит вам не
          потерять деньги в это тяжелое время и быстро их приумножить. Надежными
          и прибыльными методами мы гарантируем пассивный доход нашим
          участникам, а взамен оставляем себе комиссию за услуги.
        </div>
        <Link to='application' className='stats__content__button block_bg'>
          Подать заявку
        </Link>
      </div>
      <Chart />
    </motion.section>
  );
}

export const sectionData = {
  id: "stats",
  label: "Статистика",
  iconSrc: icon,
} as Section;

export default Stats;
