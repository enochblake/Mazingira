import { Card, CardBody, CardFooter,Button,Image,Stack,Heading,Text,ButtonGroup } from '@chakra-ui/react'
export default function HomeSection(){
    return(
        <div>
            <h1>Home section</h1>
            <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://www.bmwhk.com/content/dam/bmw/common/all-models/m-series/m2-coupe/2022/Navigation/bmw-m-series-m2-coupe-lci-modelfinder.png/jcr:content/renditions/cq5dam.resized.img.585.low.time1665405919486.png'
      alt='org'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Organization</Heading>
      <Text>
        Description about the organization

      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Learn More
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
        </div>
            )
}