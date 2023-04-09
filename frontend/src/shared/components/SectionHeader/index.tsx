import { motion } from "framer-motion";
import "./styles.scss";

function SectionHeader({ children }: { children?: string }) {
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1 }}
      style={{ opacity: 0 }}
    >
      <div className='section_header'>{children}</div>
    </motion.div>
  );
}

export default SectionHeader;
