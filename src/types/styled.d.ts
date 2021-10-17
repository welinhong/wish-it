// import original module declarations
import { SAWTheme } from '@/components/designTokens/index'
import 'styled-components'

declare module 'styled-components' {
  // DefaultTheme is being used as an interface of props.theme out of the box
  export interface DefaultTheme extends Theme {}
}
