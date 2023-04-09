import ellipse from "assets/ellipse.png";
import icon1 from "assets/tools/icon1.svg";
import icon2 from "assets/tools/icon2.svg";
import icon3 from "assets/tools/icon3.svg";
import icon4 from "assets/tools/icon4.svg";
import icon5 from "assets/tools/icon5.svg";
import navIcon from "assets/nav/tools.svg";
import { motion, MotionStyle } from "framer-motion";
import { SectionHeader } from "shared/components";
import { Section } from "shared/types";
import { animations } from "shared/utils";
import "./styles.scss"

const motionDivStyles = {
  width: "30%",
  minWidth: "30rem",
} as MotionStyle;

const toolsItemsData = [
  {
    iconSrc: icon5,
    text: "Международный арбитраж в Турцию и страны Европы",
  },
  {
    iconSrc: icon1,
    text: "Межбиржевые арбитраж схемы",
  },
  {
    iconSrc: icon4,
    text: "Обмен криптовалюты на большую базу постоянных клиентов",
  },
  {
    iconSrc: icon2,
    text: "Сотрудничество с иностранными командами по запуску крипто-токенов",
  },
  {
    iconSrc: icon3,
    text: "Ряд приватных высокодоходных схем",
  },
];

const Tools = () => {
  return (
    <section id='tools' className='tools'>
      <SectionHeader>Используемые инструменты</SectionHeader>
      <div className='tools__wrapper'>
        {toolsItemsData.map((item, key) => (
          <motion.div
            {...animations.fadeSkew(-10)}
            style={motionDivStyles}
            key={key}
          >
            <div className='tools__item block_bg'>
              <img className='tools__item__icon' src={item.iconSrc} />
              <p>{item.text}</p>
              <img
                className='tools__item__art'
                style={{ transform: "translate(-50%, -50%) rotate(180deg)" }}
                src={ellipse}
                alt='Ellipse art'
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const sectionData = {
  id: "tools",
  label: "Инструменты",
  iconSrc: navIcon,
} as Section;

export default Tools;
