import React from "react";
import { useDispatch } from "react-redux";
import {
  ItemsColumn,
  ItemsColumnHeader,
  Item,
  DeleteIcon,
} from "./StyledComponents";
import { deleteItem } from "../features/columns/columnsSlice";

const ItemsColumnSection = ({ column, items }) => {
  const dispatch = useDispatch();

  //when the x button is clicked, the dispatch with deleteItem actions is called
  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <ItemsColumn>
      <ItemsColumnHeader>{column}</ItemsColumnHeader>
      {items && items.map((item) => (
        <Item key={item.id}>
          {item.name}
          <DeleteIcon onClick={() => handleDelete(item.id)}>x</DeleteIcon>
        </Item>
      ))}
    </ItemsColumn>
  );
};

export default ItemsColumnSection;
