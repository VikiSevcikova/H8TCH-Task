import React from "react";
import AddItemSection from "./AddItemSection";
import { ContainerBox, Title, Paragraph } from "./StyledComponents";

const Container = () => {
  return (
    <ContainerBox>
      <Title>Marvelous!</Title>
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since.
      </Paragraph>

      <AddItemSection />
    </ContainerBox>
  );
};

export default Container;
