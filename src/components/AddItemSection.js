import React from "react";
import AddItemForm from "./AddItemForm";
import ItemsSection from "./ItemsSection";
import SearchItem from "./SearchItem";
import { useDispatch } from "react-redux";
import { showAll } from "../features/columns/columnsSlice";
import {
  Column,
  AddItemContainer,
  Header,
  HeaderWrapper,
  SideBarButton,
} from "./StyledComponents";

const AddItemSection = () => {
  const dispatch = useDispatch();

  //I added function, so we will able to see again all data after search filter
  const handleShowAll = () => {
    dispatch(showAll());
  };

  return (
    <>
      <HeaderWrapper>
        <Header>Add an item</Header>
      </HeaderWrapper>
      <AddItemContainer>
        <Column>
          <AddItemForm />
          <SearchItem />
          <SideBarButton onClick={handleShowAll}> Show all </SideBarButton>
        </Column>
        <ItemsSection />
      </AddItemContainer>
    </>
  );
};

export default AddItemSection;
