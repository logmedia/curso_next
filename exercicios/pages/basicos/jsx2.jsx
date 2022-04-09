import { Heading, Skeleton, Box } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'


export default function jsx2() {
  const conteudo = (

    <Skeleton isLoaded>
      <Box maxW='sm' boxSize="sm" borderWidth='1px' borderRadius='lg' overflow='hidden' p={4} m={10} >
        <Heading>Conteúdo JSX2</Heading>
      </Box>
    </Skeleton> 
  );

  return conteudo;
}
