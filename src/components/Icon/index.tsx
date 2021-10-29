import { FC, SVGProps, useEffect, useState } from 'react'
import { IconPack } from './enum'

export interface Props extends React.SVGProps<SVGSVGElement> {
  name: IconPack
}

const Icon: React.FC<Props> = ({ name, ...svgProps }): JSX.Element => {
  const [SvgIcon, setSvgIcon] = useState<FC<SVGProps<SVGSVGElement>>>()

  useEffect(() => {
    let isComponentMounted = true

    const importSvgDynamically = async () => {
      try {
        const importedModule = await import(
          `!!@svgr/webpack?-svgo,+titleProp,+ref!./svgs/${name}.svg`
        )
        if (isComponentMounted) setSvgIcon(importedModule.default)
      } catch (error) {
        console.error(`Icon name '${name}' is not found`)
      }
    }
    importSvgDynamically()

    return () => {
      isComponentMounted = false
    }
  }, [name])

  return SvgIcon ? <SvgIcon {...svgProps} /> : <></>
}

export { IconPack }
export default Icon
