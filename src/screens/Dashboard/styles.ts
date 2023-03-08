import styled , { css } from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context'
import { ArrowUpRight } from 'phosphor-react-native'


export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme})=>theme.COLORS.GRAY_700};
  padding: 30px 24px 0 24px;

`;

export const Header = styled.View`  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: -15px;
  margin-bottom: 32px;
`;

export const PercentOFMeals = styled.View`
  background-color: ${({theme})=>theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;

`;

export const NumberPercent = styled.Text`
  ${({theme})=>css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XLL}px;
    color: ${theme.COLORS.GRAY_100};
    `};
    text-align: center;
    margin-top: 20px;
    
`;

export const Info = styled.Text`
  ${({theme})=>css`
      font-family: ${theme.FONT_FAMILY.REGULAR};
      font-size: ${theme.FONT_SIZE.MD}px;
      color: ${theme.COLORS.GRAY_100};
    `};
    text-align: center;
    margin-bottom: 20px;

`;
export const Meals = styled.Text`
 ${({theme})=>css`
      font-family: ${theme.FONT_FAMILY.REGULAR};
      font-size: ${theme.FONT_SIZE.MDD}px;
      color: ${theme.COLORS.GRAY_100};
      font-weight: 400;
    `};
  margin-top: 40px;
  margin-bottom: 4px;`;

  export const IconArrowUpRight = styled(ArrowUpRight).attrs(({ theme}) => ({
    size: 24,
    color: theme.COLORS.GREEN_DARK,
    weight: 'thin'
  }))`
    position: absolute;
    top: 8px;
    right: 8px;
  `;

export const NameMeal = styled.Text`
${({theme})=>css`
     font-family: ${theme.FONT_FAMILY.REGULAR};
     font-size: ${theme.FONT_SIZE.SM}px;
     color: ${theme.COLORS.GRAY_100};
     font-weight: 400;
     flex: 1;
   `};
`;

export const HourMeal = styled.Text`
${({theme})=>css`
     font-family: ${theme.FONT_FAMILY.REGULAR};
     font-size: ${theme.FONT_SIZE.SM}px;
     color: ${theme.COLORS.GRAY_100};
     font-weight: 700;
   `};
   margin-right: 12px;
`;
export const CompletedMeal = styled.View.attrs((props: {completed: boolean})=> props)`
  background-color:  ${props => props.completed ? '#CBE4B4': '#F3BABD'};
  width: 14px;
  height: 14px;
  border-radius: 9999px;
`;

export const ContainerMeal = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 14px 16px 14px 12px;
  border: 1px solid #DDDEDF;
  border-radius: 6px;
  margin-bottom: 12px;
`;

export const Date = styled.Text`
${({theme})=>css`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.L}px;
  color: ${theme.COLORS.GRAY_100};
  font-weight: 700;
`};
  margin-bottom: 8px;
  margin-top: 32px;
`;

export const Divider = styled.View`
  width: 0px;
  height: 14px;

  border: 1px solid #B9BBBC;
  margin-right: 12px;
`;
