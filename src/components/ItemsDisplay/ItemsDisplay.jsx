import ItemsCard from '../ItemCard/ItemsCard';

const ItemsDisplay = ({ items }) => {
  return (
    <div
      className="w-full grid lg:col-span-2 xl:col-span-4 gap-y-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 content-center justify-items-center bg-background py-6 gap-x-3"
      data-testid="itemsdisplay-div"
    >
      {items.map((item) => {
        return <ItemsCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ItemsDisplay;
