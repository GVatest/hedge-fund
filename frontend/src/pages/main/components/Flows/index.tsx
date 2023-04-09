import FlowsTable from "entities/FlowsTable";
import { motion } from "framer-motion";
import { animations } from "shared/utils";
import "./styles.scss";

function Flows() {
  return (
    <motion.section {...animations.fade} className='flows block_bg'>
      <FlowsTable />
    </motion.section>
  );
}

export default Flows;
