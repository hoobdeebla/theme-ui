import Card, { type CardProps } from './Card'
import ColorPalette from './ColorPalette'
import TypeStyle from './TypeStyle'

export interface ThemeCardProps extends CardProps {}
export const ThemeCard = (props: ThemeCardProps) => (
  <Card
    {...props}
    sx={{
      color: 'text',
      bg: 'background',
    }}
  >
    <TypeStyle />
    <ColorPalette label={false} size={32} />
  </Card>
)

export default ThemeCard
