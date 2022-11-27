import { motion } from 'framer-motion';
import AddItemForm from '../../components/AddItemForm/AddItemForm';

export default function AddItemPage() {
  return (
    <motion.div
      data-testid="add-item-page"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <AddItemForm />
    </motion.div>
  );
}
