const activeLabelStyles = {
  transform: 'scale(0.7) translateY(-12px)',
}

export const labelsVariant = {
  variants: {
    floating: {
      container: {
        _focusWithin: {
          label: {
            ...activeLabelStyles,
          },
        },
        'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
          {
            ...activeLabelStyles,
          },
        label: {
          top: '6px',
          left: '16px',
          zIndex: 2,
          position: 'absolute',
          pointerEvents: 'none',
          mx: 3,
          px: 1,
          my: 2,
          transformOrigin: 'left top',
          fontSize: '14px',
          color: 'gray.400',
        },
      },
    },
  },
}
