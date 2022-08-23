import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { toast } from "react-toastify";
import CreateProps from "./ICreate";
import { BsXLg } from "react-icons/bs";
import * as S from "./styles";
import APIService from "services/api";

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

function Create({ showModal, closeModal }: CreateProps) {
  const [title, setTitle] = useState<string>();
  const [category, setCategory] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [price, setPrice] = useState<string>();

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
        toast.success("Product create success!");
        closeModal();
      }
    });
  };

  return (
    <S.Container open={showModal} onClose={closeModal}>
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
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
          </div>
          <div>
            <label htmlFor="">Category:</label>
            <input
              type="text"
              name="category"
              onChange={(e) => setCategory(e.currentTarget.value)}
            />
          </div>
          <div>
            <label htmlFor="">Description:</label>
            <input
              type="text"
              name="description"
              onChange={(e) => setDescription(e.currentTarget.value)}
            />
          </div>
          <div>
            <label htmlFor="">Price:</label>
            <input
              type="text"
              name="price"
              onChange={(e) => setPrice(e.currentTarget.value)}
              placeholder="00.00"
            />
          </div>

          <S.Button>Enviar</S.Button>
        </S.Form>
      </Box>
    </S.Container>
  );
}

export { Create };
