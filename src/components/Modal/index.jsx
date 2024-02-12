import { motion } from "framer-motion";
import Backdrop from "../backdrop";

const popUp = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
};

const Modal = ({ handleClose, children }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="w-[clamp(50%,700px,90%)] h-[min(50%, 300px)]
        m-auto rounded-[4px] flex flex-col items-center bg-body-primary p-8"
        onClick={(e) => e.stopPropagation()}
        variants={popUp}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
