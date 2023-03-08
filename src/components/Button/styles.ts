import styled, {css} from 'styled-components/native';
import { Plus, PencilSimpleLine,Trash } from 'phosphor-react-native'

export const Container = styled.TouchableOpacity`
  background-color: ${({theme})=>theme.COLORS.GRAY_200};
  border-radius: 6px;
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 32px;
`;

export const Title = styled.Text`
  ${({theme})=>css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.MD}px;
      color: ${theme.COLORS.WHITE};
    `};
    font-weight: 700;
`;

export const IconPlus = styled(Plus).attrs(({ theme}) => ({
  size: 18,
  color: theme.COLORS.WHITE,
  weight: 'regular'
}))`
  margin-right: 12px;
`;

export const IconEdit = styled(PencilSimpleLine).attrs(({ theme}) => ({
  size: 18,
  color: theme.COLORS.WHITE,
  weight: 'regular'
}))`
  margin-right: 12px;
`;

export const IconRemove = styled(Trash).attrs(({ theme}) => ({
  size: 18,
  color: theme.COLORS.WHITE,
  weight: 'regular'
}))`
  margin-right: 12px;
`;