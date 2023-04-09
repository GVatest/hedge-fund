import { Link } from "react-scroll";
import { Section } from "shared/types";
import "./styles.scss";

type NavProps = {
  sections: Section[];
};

const Navigation = ({ sections }: NavProps) => {
  return (
    <nav className='nav block_bg'>
      {sections.map((section, key) => (
        <Link
          className='nav__item'
          activeClass='active'
          spy={true}
          to={section.id}
          key={key}
          offset={-50}
        >
          <img src={section.iconSrc} />
          <span>{section.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
