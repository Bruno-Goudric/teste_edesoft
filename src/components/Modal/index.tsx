import React, { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { toast } from "react-toastify";
import { DadoProps, ModalProps } from "./IModal";
import { BsXLg } from "react-icons/bs";
import * as S from "./styles";
import APIService from "services/api";
import Loading from "assets/icons/loading.gif";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function Modal({ showModal, closeModal, dado }: ModalProps) {
  const [title, setTitle] = useState<string>();
  const [category, setCategory] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [price, setPrice] = useState<string>();
  const [product, setProduct] = useState<DadoProps>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const dado = {
      title: title,
      price: price,
      description: description,
      category: category,
    };

    APIService.post("products", dado).then((resp) => {
      if (resp.data) {
        toast.success("Update product success!");
        closeModal();
      }
    });
  };

  const getSingleProduct = useCallback((id: number) => {
    APIService.get(`products/${id}`).then((resp) => {
      setProduct(resp.data);
    });
  }, []);

  useEffect(() => {
    getSingleProduct(dado);
  }, [getSingleProduct, dado]);

  return (
    <S.Container open={showModal} onClose={closeModal}>
      <>
        {product?.id !== undefined ? (
          <Box sx={style}>
            <div className="header">
              <BsXLg onClick={closeModal} />
            </div>
            <S.Form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="">Title:</label>
                <input
                  type="text"
                  name="title"
                  placeholder={product?.title}
                  onChange={(e) => setTitle(e.currentTarget.value)}
                />
              </div>
              <div>
                <label htmlFor="">Category:</label>
                <input
                  type="text"
                  name="category"
                  placeholder={product?.category}
                  onChange={(e) => setCategory(e.currentTarget.value)}
                />
              </div>
              <div>
                <label htmlFor="">Description:</label>
                <input
                  type="text"
                  name="description"
                  placeholder={product?.description}
                  onChange={(e) => setDescription(e.currentTarget.value)}
                />
              </div>
              <div>
                <label htmlFor="">Price:</label>
                <input
                  type="text"
                  name="price"
                  placeholder={String(product?.price)}
                  onChange={(e) => setPrice(e.currentTarget.value)}
                />
              </div>
              <S.Button>Enviar</S.Button>
            </S.Form>
          </Box>
        ) : (
          <img src={Loading} alt="loading" />
        )}
      </>
    </S.Container>
  );
}

export { Modal };
