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

export const IconArrowUpRight = styled(ArrowUpRight).attrs(({ theme}) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
  weight: 'thin'
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const Meals = styled.Text`
 ${({theme})=>css`
      font-family: ${theme.FONT_FAMILY.REGULAR};
      font-size: ${theme.FONT_SIZE.MDD}px;
      color: ${theme.COLORS.GRAY_100};
      font-weight: 400;
    `};
  margin-top: 40px;
  margin-bottom: 4px;
`;