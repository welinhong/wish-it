const header1 = `
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0;
`

const header2 = `
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0;
`

const header3 = `
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0;
`

const header4 = `
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0;
`

const header5 = `
  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0;
`

const body1 = `
  font-size: 20px;
  font-weight: normal;
  line-height: 24px;
  letter-spacing: 0;
`

const body2 = `
  font-size: 14px;
  font-weight: normal;
  line-height: 22px;
  letter-spacing: 0;
`

export interface TypographySet {
  header1: string
  header2: string
  header3: string
  header4: string
  header5: string
  body1: string
  body2: string
}

export default {
  header1,
  header2,
  header3,
  header4,
  header5,
  body1,
  body2,
}
