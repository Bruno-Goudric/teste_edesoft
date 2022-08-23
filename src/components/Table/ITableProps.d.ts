type ITableProps = {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  image: string;
};
interface TableProps {
  dado: Array<ITableProps>;
  showModal: (id: number) => void;
}

export { ITableProps, TableProps };
