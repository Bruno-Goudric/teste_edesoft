import {
  Table as Container,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { BsFillPencilFill, BsTrash } from "react-icons/bs";
import { TableProps, ITableProps } from "./ITableProps";
import { toast } from "react-toastify";
import * as S from "./styles";
import APIService from "services/api";

function Table({ dado, showModal }: TableProps) {
  const deleteProduct = (id: number) => {
    APIService.delete(`products/${id}`).then((resp) => {
      if (resp.data) {
        toast.success("Deleted product success!");
      }
    });
  };
  return (
    <TableContainer component={Paper}>
      <Container sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Product</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dado.map((row: ITableProps) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">
                <S.Products src={row.image} alt="" />
              </TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">${row.price.toFixed(2)}</TableCell>
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell>
                <div className="action">
                  <BsFillPencilFill
                    size={20}
                    style={{ marginRight: "10px" }}
                    onClick={() => showModal(row.id)}
                  />
                  <BsTrash size={20} onClick={() => deleteProduct(row.id)} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Container>
    </TableContainer>
  );
}

export { Table };
