import circle from "assets/Circle.svg";
import { motion } from "framer-motion";
import { SectionHeader } from "shared/components";
import { Section } from "shared/types";
import { animations } from "shared/utils";
import icon from "assets/nav/rules.svg";
import "./styles.scss";

const motionDivStyles = {
  width: "32%",
  minWidth: "33rem",
  transformOrigin: "50% 0px",
};

const rulesItemsData = [
  {
    animation: animations.rotate(45),
    order: "1",
    text: (
      <>
        Заполните <br /> заявку
      </>
    ),
  },
  {
    animation: animations.rotate(-45),
    order: "2",
    text: "Получите одобрение заявки",
  },
  {
    animation: animations.rotate(45),
    order: "3",
    text: "Совершите взнос размером 500$ - 5000$",
  },
  {
    animation: animations.rotate(-45),
    order: "1",
    text: (
      <>
        Получите
        <br />
        доступ&nbsp;к&nbsp;личному
        <br />
        кабинету
      </>
    ),
  },
];

const Rules = () => {
  return (
    <section id='rules' className='rules'>
      <SectionHeader>Как участвовать?</SectionHeader>
      <div className='rules__wrapper'>
        {rulesItemsData.map((item, key) => (
          <motion.div
            {...item.animation}
            className='motion_div'
            style={motionDivStyles}
            key={key}
          >
            <div className='rules__item block_bg'>
              <span className='rules__item__number'>{item.order}</span>
              <span className='rules__item__text'>{item.text}</span>
              <div className='rules__item__art'>
                <img src={circle} alt='Circle art' />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const sectionData = {
  id: "rules",
  label: "Правила участия",
  iconSrc: icon,
} as Section;

export default Rules;
