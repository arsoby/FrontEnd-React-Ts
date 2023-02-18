import { Card, CardBody } from '@chakra-ui/card';
import { Button, Heading, SimpleGrid,Image,Text, Box, Badge } from '@chakra-ui/react';
import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Favourites() {
    
    const [data,setData]=React. useState<any[]>([]);
    React.useEffect(()=>{
        axios.get('https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab').then(res=>{
            setData(res.data)
            // localStorage.length

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
       let index=[];
       function addid(){}
    }
  return (
    <div>

        <Box ml={"10%"} mr={"10%"}>
        <br></br>
        <Heading size='lg' fontFamily={"Cairo"}> 
        قائمة المتابعة
        </Heading>
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

                 
                    {/* <Button  color={'#ffb606'} fontWeight={"extrabold"}
                    onClick={()=>{

                        item.id
                        localStorage.setItem(`IdOfComp${item.id}`, item.id);
                        
                        
                    }}
                    >مفضلة </Button> */}
                    <Text color={'white'} fontWeight={"bold"}>
                    {item.num}
                    </Text>
                    <Text color={'white'} fontWeight={"bold"}>
                    {item.price} $
                    </Text>
                    <Text color={ishalalColor(item.ishalal)} fontWeight={"bold"}>
                    {item.ishalal}
                    </Text>
                    <Text fontSize={"large"} color="#ffb606" p={"1"} fontWeight={'bold'}>
                    مفضلة
              </Text>

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
    </div>
  )
}

export default Favourites