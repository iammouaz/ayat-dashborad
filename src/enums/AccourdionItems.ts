export const AccordionItems = [
  {
    id: '1',
    title: 'Lorem ipsum dolor sit amet consectetur',
    items: [
      {
        id: '1-1',
        title: 'Lorem ipsum dolor sit amet consectetur',
        items: ['Lorem ipsum dolor sit amet consectetur', 'Lorem ipsum dolor sit amet consectetur'],
      },
      {
        id: '1-2',
        title: 'Lorem ipsum dolor sit amet consectetur',
        items: ['Lorem ipsum dolor sit amet consectetur', 'Lorem ipsum dolor sit amet consectetur'],
      },
    ],
  },
  {
    id: '2',
    title: 'Lorem ipsum dolor sit amet consectetur',
    items: [
      {
        id: '2-1',
        title: 'Lorem ipsum dolor sit amet consectetur',
        items: ['Lorem ipsum dolor sit amet consectetur', 'Lorem ipsum dolor sit amet consectetur'],
      },
      {
        id: '2-2',
        title: 'Lorem ipsum dolor sit amet consectetur',
        items: ['Lorem ipsum dolor sit amet consectetur', 'Lorem ipsum dolor sit amet consectetur'],
      },
    ],
  },
  {
    id: '3',
    title: 'Lorem ipsum dolor sit amet consectetur',
    items: [
      {
        id: '3-1',
        title: 'Lorem ipsum dolor sit amet consectetur',
        items: ['Lorem ipsum dolor sit amet consectetur', 'Lorem ipsum dolor sit amet consectetur'],
      },
      {
        id: '3-2',
        title: 'Lorem ipsum dolor sit amet consectetur',
        items: ['Lorem ipsum dolor sit amet consectetur', 'Lorem ipsum dolor sit amet consectetur'],
      },
    ],
  },
]

export interface AccordionItemsTypes {
  id: string
  title: string
  items: {
    id: string
    title: string
    items: string[]
  }[]
}
;[]
