import { Box, Stack, Heading, Text, Button, Image } from '@chakra-ui/react'

type ProductItemProps = {
  slug: string
  name: string
  description: string
  new: boolean
  image: { [key: string]: string }
  category: string
}

const ProductItem: React.FC<ProductItemProps> = ({
  name,
  description,
  new: isNew,
  image,
}): JSX.Element => {
  return (
    <Stack
      spacing={{ base: '2rem', lg: '0' }}
      direction={{ base: 'column' }}
      sx={{
        '@media screen and (min-width: 62em)': {
          '&:nth-of-type(odd) div:nth-of-type(1)': {
            marginRight: '7.8125rem',
          },
          '&:nth-of-type(even) div:nth-of-type(1)': {
            order: 1,
            marginLeft: '7.8125rem',
          },
          alignItems: 'center',
          flexDirection: 'row',
        },
      }}
    >
      <Box flexBasis={{ lg: '55%' }}>
        <picture>
          <source media="(min-width: 62em)" srcSet={image.desktop} />
          <source media="(min-width: 30em)" srcSet={image.tablet} />
          <Image
            src={image.mobile}
            objectFit="cover"
            width="100%"
            borderRadius="0.5rem"
          />
        </picture>
      </Box>

      <Box textAlign={{ base: 'center', lg: 'left' }} flexBasis={{ lg: '45%' }}>
        <Heading
          as="h2"
          textTransform="uppercase"
          fontSize={{ base: '1.75rem' }}
          letterSpacing="0.0625rem"
          mb={{ base: '1.5rem' }}
          maxWidth={{ base: '13ch' }}
          mx={{ base: 'auto', lg: 'unset' }}
        >
          {isNew && (
            <Box
              as="strong"
              display="block"
              textTransform="uppercase"
              color="accent"
              fontSize="0.875rem"
              letterSpacing="0.625rem"
              fontWeight="normal"
              mb="1.5rem"
            >
              New Product
            </Box>
          )}
          {name}
        </Heading>
        <Text
          mb={{ base: '1.5rem' }}
          px={{ sm: '2rem', md: '4rem', lg: 0 }}
          pr="1rem"
        >
          {description}
        </Text>
        <Button>See Product</Button>
      </Box>
    </Stack>
  )
}

export default ProductItem