import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import LinkedListIcon from 'assets/icons/linked-list.svg'
interface NestedCheckboxesProps {}

const NestedCheckboxes: React.FunctionComponent<NestedCheckboxesProps> = () => {
  const data = {
    users: [
      {
        id: 'lorem-1',
        name: 'Lorem ipsum dolor sit amet consectetur ',
      },
      {
        id: 'user-2',
        name: 'Lorem ipsum dolor sit amet consectetur ',
      },
    ],
  }

  const [checkedItems, setCheckedItems] = useState(data.users.map(() => false))

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked

  return (
    <Stack bgColor='#f5f9ff' m={3}>
      <Accordion allowToggle>
        <AccordionItem border={0}>
          <AccordionButton border={0}>
            <Box alignItems='center' gap={3} display='flex'>
              <Checkbox
                isChecked={allChecked}
                isIndeterminate={isIndeterminate}
                onChange={(e) => setCheckedItems(data.users.map(() => e.target.checked))}
                size='lg'
                rounded='lg'
                borderColor={'#c3daff'}
                boxShadow='lg'
              />

              <Text fontSize='14px'>Lorem ipsum dolor sit amet consectetur</Text>
            </Box>
          </AccordionButton>

          <AccordionPanel p={0}>
            <Stack position='relative' pl={6} mt={2} spacing={2}>
              {data.users.map((user, index) => (
                <Box
                  display='flex'
                  gap={3}
                  alignItems='center'
                  bgColor='#ebf3ff'
                  px={2}
                  py={1}
                  key={user.id}
                >
                  <Checkbox
                    key={user.id}
                    isChecked={checkedItems[index]}
                    onChange={(e) =>
                      setCheckedItems([
                        ...checkedItems.slice(0, index),
                        e.target.checked,
                        ...checkedItems.slice(index + 1),
                      ])
                    }
                  />

                  <Text fontSize='14px'> {user.name}</Text>
                </Box>
              ))}
              <Image left='10px' top='17%' src={LinkedListIcon} position='absolute' />
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  )
}

export default NestedCheckboxes
