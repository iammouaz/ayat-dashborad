import { Divider, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

interface TitlewithborderProps {
  text: string
  broderColor?: string
  fontSize?: string
}

const Titlewithborder: FunctionComponent<TitlewithborderProps> = ({
  text,
  broderColor,
  fontSize,
}) => {
  return (
    <>
      <Text fontWeight='semibold' fontSize={fontSize}>
        {text}
      </Text>
      <Divider
        orientation='horizontal'
        w='50px'
        h='5px'
        bgColor={broderColor || 'primary'}
        borderRadius='8px'
      />
    </>
  )
}

export default Titlewithborder
