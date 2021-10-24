import { TypographySet } from '@/components/designTokens/typography'
import { ChangeEvent } from 'react'
import styled from 'styled-components'

export interface Props {
  value?: string | number
  helper?: string
  placeholder?: string
  postfix?: string
  typographyType?: keyof TypographySet
  className?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

// TODO: (추후) 글자수 count - max값 입력

const TextInput = ({
  value,
  helper,
  placeholder = '',
  postfix,
  typographyType,
  className,
  onChange,
}: Props): JSX.Element => {
  return (
    <StyledContainer typographyType={typographyType} className={className}>
      <StyledInput
        name={helper}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {postfix && <span>{postfix}</span>}
      <label htmlFor={helper}>{helper}</label>
    </StyledContainer>
  )
}

const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #767676;
  &:focus {
    outline: none;
    ${({ theme }) => `border-color: ${theme.color.primary};`}
  }
`
interface StyledProps {
  typographyType?: keyof TypographySet
}
const StyledContainer = styled.div<StyledProps>`
  ${({ theme, typographyType }) =>
    typographyType ? theme.typography[typographyType] : theme.typography.body1}
  label {
    display: block;
    font-size: 14px;
  }
  ${StyledInput} {
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }
`

export default TextInput
