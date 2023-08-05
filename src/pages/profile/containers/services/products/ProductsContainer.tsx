import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Box, Flex, Text } from '@chakra-ui/react'
import ProductCard from './ProductCard'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

interface ProductsContainerProps {}

const ProductsContainer: React.FunctionComponent<ProductsContainerProps> = () => {
  return (
    <Box w='full' boxShadow='lg' p={3} bgColor='white' borderRadius='10px'>
      <Flex justifyContent='space-between' alignItems='center'>
        <Text fontSize='20px' fontWeight='semibold'>
          Products
        </Text>

        <Flex alignItems='center' gap='5px'>
          <ChevronLeftIcon fontSize='20px' color='primary' />
          <ChevronRightIcon fontSize='20px' color='primary' />
        </Flex>
      </Flex>

      <Swiper spaceBetween={1} slidesPerView={4} pagination={false}>
        {Array.from({ length: 5 }, (_, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default ProductsContainer
