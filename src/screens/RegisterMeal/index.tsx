import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Container,
  GoBack,
  Title,
  TitleContainer,
  Button,
  FormContainer,
  Label,
  Input,
  DateContainer,
  InfoContainer,
  ButtonsContainer,
  BtnYes,
  BtnNo,
  BtnText,
  CircleBtnYesIcon,
  CircleBtnNoIcon,
  Register,
  TextBtnRegister,
} from "./styles";

export function RegisterMeal() {
  const [onDiet, setOnDiet] = useState(false);
  const [withOutDiet, setWithOutDiet] = useState(false);
  const navigation = useNavigation();

  const handleToDashboard = () => {
    navigation.navigate("dashboard");
  };

  return (
    <Container>
      <TitleContainer>
        <Button onPress={handleToDashboard}>
          <GoBack />
        </Button>
        <Title>Nova refeição</Title>
      </TitleContainer>
      <FormContainer>
        <Label style={{ marginTop: 40 }}>Nome</Label>
        <Input autoFocus />

        <Label>Descrição</Label>
        <Input />
        <DateContainer>
          <InfoContainer>
            <Label>Data</Label>
            <Input
              dataDetectorTypes={"calendarEvent"}
              inputMode={"text"}
              placeholder={"DD/MM/YYYY"}
            />
          </InfoContainer>

          <InfoContainer>
            <Label>Hora</Label>
            <Input inputMode={"text"} placeholder={"HH:MM"} />
          </InfoContainer>
        </DateContainer>
        <Label>Está dentro da dieta?</Label>
        <ButtonsContainer>
          <BtnYes
            active={onDiet}
            onPress={() => {
              setOnDiet(true);
              setWithOutDiet(false);
            }}
          >
            <CircleBtnYesIcon />
            <BtnText>Sim</BtnText>
          </BtnYes>

          <BtnNo
            active={withOutDiet}
            onPress={() => {
              setWithOutDiet(true);
              setOnDiet(false);
            }}
          >
            <CircleBtnNoIcon />
            <BtnText>Não</BtnText>
          </BtnNo>
        </ButtonsContainer>
        <Register>
          <TextBtnRegister>Cadastrar refeição</TextBtnRegister>
        </Register>
      </FormContainer>
    </Container>
  );
}
