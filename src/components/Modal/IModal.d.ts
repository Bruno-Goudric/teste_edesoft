interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  dado: number;
}

interface DadoProps {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  image: string;
}

export { ModalProps, DadoProps };
