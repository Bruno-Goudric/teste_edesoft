import React, { useState, useEffect, useCallback } from "react";
import { ToastContainer } from "react-toastify";
import { BsPlusCircle } from "react-icons/bs";
import APIService from "services/api";
import HomeProps from "./IHome";
import * as Component from "components";

import * as S from "./styles";

function Home() {
  const [products, setProducts] = useState<HomeProps[]>([]);
  const [show, setShow] = useState(false);
  const [create, setCreate] = useState(false);
  const [idProduct, setIdProduct] = useState<number>(0);

  const getProducts = useCallback(() => {
    APIService.get("products").then((resp) => {
      setProducts(resp.data);
    });
  }, []);

  const openModal = (id: number) => {
    setIdProduct(id);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleCloseCreate = () => setCreate(false);

  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <S.Container>
      <ToastContainer />
      <S.Header>
        <div>
          <span className="Title">List Products</span>
        </div>
        <div className="addProduct" onClick={() => setCreate(true)}>
          <BsPlusCircle />
          <span>Add Product</span>
        </div>
      </S.Header>
      <Component.Table dado={products} showModal={openModal} />
      <Component.Modal
        showModal={show}
        closeModal={handleClose}
        dado={idProduct}
      />
      <Component.Create showModal={create} closeModal={handleCloseCreate} />
    </S.Container>
  );
}

export { Home };
