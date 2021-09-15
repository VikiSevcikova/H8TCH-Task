import styled from "styled-components";

const inputTextColor = 'rgb(242,243,244)';
const inputBgColor = 'rgb(155,161,172)';

const ContainerBox = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  padding: 6rem;
  left: 50%;
  transform: translate(-50%);
  background-color: rgb(121, 129, 143);
  @media (min-width: 768px) {
    width: 70%;
    padding: 6rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Title = styled.h1`
  font-style: italic;
  font-weight: lighter;
  font-size: 42px;
  margin: 0.5rem 0;
`;

const Paragraph = styled.p`
  color: rgb(139, 235, 223);
  @media (min-width: 768px) {
    width: 60%;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
  padding: 0.5rem 0;
  background-image: linear-gradient(rgb(163, 172, 184), rgb(130, 144, 163));
  text-align: center;
`;

const Header = styled.h4`
  font-weight: lighter;
  text-transform: uppercase;
`;

const AddItemContainer = styled.div`
  margin-top: 10px;
  min-height: 400px;
  display: grid;
  grid-template-columns: 1 1;
  gap: 10px;
  @media (min-width: 768px) {
    grid-template-columns: 25% auto;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  border: 5px solid white;
`;

const ItemsColumnHeader = styled.h3`
  padding: 12px;
  background-image: linear-gradient(rgb(163, 172, 184), rgb(79, 90, 110));
  text-transform: uppercase;
  font-weight: lighter;
  font-size: 15px;
  text-align: center;
`;

const ItemsColumn = styled(Column)`
    justify-content: flex-start;
    &:nth-of-type(odd) {
        border-right: 5px solid white;
    }
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 25px 12px 12px;
  position: relative;

  &:nth-of-type(even) {
    background-color: rgb(188, 192, 199);
    div {
      border: 2px solid white;
    }
  }
  &:nth-of-type(odd) {
    background-color: white;
    color: rgb(124,132,145);
    div {
      border: 2px solid rgb(124,132,145);
      color: rgb(124,132,145)
    }
  }
`;

const DeleteIcon = styled.div`
  position:absolute;
  top: 9px;
  right: 9px;
  padding: 0 4px;
  border-radius: 5px;
  cursor: pointer;
`;

const SideBarForm = styled.form`
    width: 100%;
    height: 65%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: 768px) {
      flex-direction: column;
    }
`;

const SideBarInput = styled.input`
    padding: 12px 5px;
    width: 100%;
    margin-bottom: 20px;
    border: 3px solid white;
    background-color: ${inputBgColor};
    color: ${inputTextColor};
    font-size: 0.7rem;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: ${inputTextColor};
        text-transform: uppercase;
    }
`;

const SideBarSelector = styled.select`
    padding: 12px 5px;
    margin-bottom: 20px;
    width: 100%;
    border: 3px solid white;
    background-color: ${inputBgColor};
    color: ${inputTextColor};
    text-transform: uppercase;
    font-size: 11px;

    &:focus{
        outline: none;
    }
`;

const SideBarButton = styled.button`
    margin-top: 5px;
    padding: 12px 5px;
    border: 3px solid white;
    background-color: transparent;
    text-transform: uppercase;
    font-size: 11px;
    transition: all 0.4s ease-in-out;
    &:hover{
        background-color: ${inputBgColor};
    }
`;

const SearchForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    margin-bottom: 20px;
`;

const SearchLabel = styled.label`
    font-size: 9px;
    margin-bottom: 10px;
    text-transform: uppercase;
`;

const SearchInput = styled(SideBarInput)`
    padding: 5px;
    margin: 0;
`;

const SearchInputButton = styled.button`
    position: absolute;
    cursor: pointer;
    bottom: 6px;
    right: 5px;
    color: ${inputTextColor};
    background: transparent;
    border: none;
`;

export {
  ContainerBox,
  Title,
  Paragraph,
  HeaderWrapper,
  Header,
  AddItemContainer,
  Column,
  ItemsContainer,
  ItemsColumnHeader,
  ItemsColumn,
  Item,
  DeleteIcon,
  SideBarForm,
  SideBarInput,
  SideBarSelector,
  SideBarButton,
  SearchForm,
  SearchLabel,
  SearchInput,
  SearchInputButton
};
