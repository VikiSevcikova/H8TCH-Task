import React from "react";
import { selectColumns } from "../features/columns/columnsSlice";
import { useSelector } from "react-redux";
import ItemsColumnSection from "./ItemsColumnSection";
import { ItemsContainer } from "./StyledComponents";

const ItemsSection = () => {
  const columns = useSelector(selectColumns);
  //if the data in columns state are not undefined, columns are filtered based on the column attribute
  const column1 = columns ? columns.filter((item) => item.column === "Column 1") : [];
  const column2 = columns ? columns.filter((item) => item.column === "Column 2") : [];

  return (
    <ItemsContainer>
      <ItemsColumnSection column={"Column 1"} items={column1} />
      <ItemsColumnSection column={"Column 2"} items={column2} />
    </ItemsContainer>
  );
};

export default ItemsSection;
