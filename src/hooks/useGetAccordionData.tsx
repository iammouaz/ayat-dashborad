import { useToast } from '@chakra-ui/react'
import { AccordionItemsTypes } from 'enums/AccourdionItems'
import { useState } from 'react'

export const useGetAccordionData = (data: AccordionItemsTypes[]) => {
  const [accourdionData, setAccourdionData] = useState(data)
  const toast = useToast()
  console.log(accourdionData)

  const hundleRemoveItemFirstLevel = (id: string) => {
    const newData = accourdionData.filter((item) => item.id !== id)
    setAccourdionData(newData)
    toast({
      title: 'Item removed',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  const handleRemvoeItem = (parentId: string, itemId: string) => {
    const newData = accourdionData.map((item) => {
      if (item.id === parentId) {
        return {
          ...item,
          items: item.items.filter((subItem) => subItem.id !== itemId),
        }
      }
      return item
    })
    setAccourdionData(newData)
    toast({
      title: 'Item removed',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  return { accourdionData, handleRemvoeItem, hundleRemoveItemFirstLevel }
}
