import { motion } from 'framer-motion';
import FAQ from '../../components/FAQ';

const FaqPage = () => {
  return (
    <motion.div
      className="bg-background pt-10 py-10"
      data-testid="FAQ-page"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <FAQ />
    </motion.div>
  );
};

export default FaqPage;
