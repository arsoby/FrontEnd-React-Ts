import { Box, Card, Image, chakra, Stack, CardBody, Heading, Text, CardFooter, Button, HStack, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import MicosoftLogo from './../assets/microsoft.png'
import axios from 'axios'

function Companies() {
    const [data,setData]=React. useState<any[]>([]);

    const api = "https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab"

    React.useEffect(()=>{
        axios.get('https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab').then(res=>{
            setData(res.data)
        })
    },[])

    const ishalalColor = (item:string) => {

        let colorState = "white";

        if(item == "متوافقة مع الشريعة") {

            colorState = "green.400";

        }

        if(item == "غير متوافقة مع الشريعة") {

            colorState = "red.400";

        }

        return colorState;

    }

  return (
    <>

    <Box ml={"10%"} mr={"10%"} >
        <br></br>
        <Heading size='lg' fontFamily={"Cairo"}>جميع الشركات</Heading>
        <br></br>
        {data.map((item:any)=>
        <li key={item.id}>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            padding={"1vh"}
            variant='outline'
            bg={'#193547'}
            mt={3}
            >
            
        <Image
            objectFit={"contain"}
            maxW={{ base: '100%', sm: '200px' }}
            src={item.img}
            alt='Microsoft'/>
            
            <CardBody>
                <SimpleGrid columns={6} spacing={"5"} alignItems={"center"}>
                    <Heading color={'white'} size="lg">{item.nameOfCompany}</Heading>

                    <Text color={'white'} fontWeight={"bold"}>
                    {item.num}
                    </Text>
                    <Text color={'white'} fontWeight={"bold"}>
                    {item.price} $
                    </Text>
                    <Text color={ishalalColor(item.ishalal)} fontWeight={"bold"}>
                    {item.ishalal}
                    </Text>
                    <Button variant='solid' colorScheme='yellow'>
                        إضافة للمفضلة
                    </Button>
                    <Link to={`/company/${item.id}`}>
                <Button variant='solid' colorScheme='blue'>
                    للمزيد
                </Button>
                </Link>
                </SimpleGrid>
            </CardBody>
        </Card>
        </li>
        )}
    </Box>
    
    </>
  )
}

export default Companies