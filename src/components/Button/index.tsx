import { TouchableOpacityProps } from 'react-native';

import { Container, IconPlus, Title, IconEdit, IconRemove } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type: 'Plus' | 'Edit' | 'Remove'
}

export function Button({ title, type, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {type === 'Plus' && <IconPlus />}
      {type === 'Edit' && <IconEdit />}
      {type === 'Remove' && <IconRemove />}
      <Title>{title}</Title>
    </Container>
  );
}