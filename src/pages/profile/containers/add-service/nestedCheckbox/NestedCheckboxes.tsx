import { Box, Checkbox, Stack } from '@chakra-ui/react'
import { useState } from 'react'
interface NestedCheckboxesProps {}

const NestedCheckboxes: React.FunctionComponent<NestedCheckboxesProps> = () => {
  const data = {
    users: [
      {
        id: 'user-1',
        name: 'User 1',
        child: [{ name: 'Salary1' }, { name: 'Department1' }],
      },
    ],
  }

  const [checkedItems, setCheckedItems] = useState(data.users.map(() => false))

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked

  return (
    <Stack pt={3} pl={3}>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems(data.users.map(() => e.target.checked))}
      >
        Parent Checkbox
      </Checkbox>

      <Stack pl={6} mt={2} spacing={2}>
        {data.users.map((user, index) => (
          <Box key={user.id}>
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
            >
              {user.name}
            </Checkbox>
            <Stack pl={6} spacing={2}>
              {user.child.map((category) => (
                <Checkbox key={category.name}>{category.name}</Checkbox>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Stack>
  )
}

export default NestedCheckboxes
