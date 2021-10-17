import color, { ColorSet } from './color'
import typography, { TypographySet } from './typography'

export interface SAWTheme {
  color: ColorSet
  typography: TypographySet
}

export default {
  color,
  typography,
}
