import ellipse from "assets/ellipse.png";
import ApplicationForm from "entities/ApplicationForm";
import { motion } from "framer-motion";
import { SectionHeader } from "shared/components";
import { Section } from "shared/types";
import { animations } from "shared/utils";
import icon from "assets/nav/application.svg";
import "./styles.scss";

const Application = () => {
  return (
    <motion.section
      {...animations.fade}
      id='application'
      className='application'
    >
      <SectionHeader>Подать заявку</SectionHeader>
      <div className='application__wrapper'>
        <div className='application__art'>
          <img
            className='application__art__ellipse application__art__ellipse_1'
            src={ellipse}
            alt='Application ellipse art'
          />
          <img
            className='application__art__ellipse application__art__ellipse_2'
            src={ellipse}
            alt='Application ellipse art'
          />
          <img
            className='application__art__ellipse application__art__ellipse_3'
            src={ellipse}
            alt='Application ellipse art'
          />
        </div>
        <ApplicationForm />
      </div>
    </motion.section>
  );
};

export const sectionData = {
  id: "application",
  label: "Подать заявку",
  iconSrc: icon,
} as Section;

export default Application;
