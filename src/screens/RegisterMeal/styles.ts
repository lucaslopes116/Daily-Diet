import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  padding-top: 23px;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

export const Button = styled(TouchableOpacity)``;

export const GoBack = styled(ArrowLeft)`
  size: 24px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin-left: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.L}px;
    color: ${theme.COLORS.GRAY_100};
    margin-left: 94px;
  `};
`;

export const FormContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex: 1;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `};
`;

export const Input = styled.TextInput`
  border: 1px solid #dddedf;
  border-radius: 6px;
  padding: 14px;

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MDD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  margin-bottom: 24px;
`;

export const DateContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

export const InfoContainer = styled.View`
  flex: 1;
`;

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 8px;

  margin-top: 8px;
  margin-bottom: 148px;
`;

export const BtnYes = styled.TouchableOpacity.attrs(
  (props: { active: boolean }) => props
)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  background-color: ${(props) => (props.active ? "#E5F0DB" : "#DDDEDF")};

  width: 50%;
  height: 50px;
`;
export const BtnNo = styled.TouchableOpacity.attrs(
  (props: { active: boolean }) => props
)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${(props) => (props.active ? "#F4E6E7" : "#DDDEDF")};

  width: 50%;
  height: 50px;
`;
export const BtnText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const CircleBtnYesIcon = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  margin-right: 8px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
`;

export const CircleBtnNoIcon = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  margin-right: 8px;

  background-color: ${({ theme }) => theme.COLORS.RED_DARK};
`;

export const Register = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  height: 50px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextBtnRegister = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
