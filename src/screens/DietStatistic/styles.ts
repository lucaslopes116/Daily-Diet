import styled, { css } from "styled-components/native";
import { TouchableOpacity, View } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const PercentOFMealsStatistic = styled(View).attrs(
  (props: { percentage: number }) => props
)`
  height: 220px;
  background-color: ${(props) =>
    props.percentage > 50 ? "#E5F0DB" : "#F4E6E7"};
`;

export const InfoStatistic = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `};
  text-align: center;
  margin-bottom: 34px;
`;

export const ContainerArrow = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  left: 0px;
  padding-top: 56px;
  padding-left: 24px;
`;

export const ContainerStatistic = styled(View)`
  flex: 1;
  position: relative;
  top: -12px;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `};
  text-align: center;
  margin-bottom: 23px;
  margin-top: 33px;
`;

export const Wrapper = styled.View`
  flex-direction: column;
  gap: 12px;
`;
export const SequenceOfDishes = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  width: 100%;
  height: 89px;
  border-radius: 8px;
  padding: 16px;
  align-items: center;
`;
export const RegisteredMeals = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  width: 100%;
  height: 89px;
  border-radius: 8px;
  padding: 16px;
  align-items: center;
`;
export const MealsWithinTheDiet = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  width: 157.5px;
  height: 107px;
  border-radius: 8px;
  padding: 16px;
  flex: 1;

  align-items: center;
`;
export const OffDietMeals = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
  width: 157.5px;
  height: 107px;
  border-radius: 8px;
  padding: 16px;
  flex: 1;

  align-items: center;
`;

export const WarperTotal = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const Numbers = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const InfosAboutDiet = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `};
`;
