import {
  Box,
  Text,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Spacer,
  Center,
  VStack,
  Grid,
  GridItem,
  InputLeftElement,
  CardHeader,
  Heading,
  useDisclosure,
  keyframes,
  ScaleFade,
  Slide,
  SlideFade,
  Hide,
  useColorModeValue,
  useColorMode,
  background,
} from "@chakra-ui/react";
import axios, { Axios } from "axios";
import React, { useState } from "react";
import { Link as RouteLink,useNavigate } from 'react-router-dom'

function LogIn() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { isOpen, onToggle } = useDisclosure()
  const [showCard, setShowCard] = useState(true);
  function toggleShowCard() {
    setShowCard(!showCard); }
    const navigate = useNavigate()

    

    // Strat api 
    const api="https://63e226a5ad0093bf29c8eb0d.mockapi.io/users"
    const [data, setData] = React.useState<any>();
    const [allData, setAllData] = React.useState<any>();
    const [userName, setUserName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    // Get Method 
    React.useEffect(() => {
        axios.get(api).then(res=>{
          setAllData(res.data)
        })  
    },[])

    // Post Method 
    const PostData = ()=>{
      if(userName.length >=3 &&password.length>=8 ){
          axios.post(api,{
            userName,
            email,
            password
          }).then(res=>{
              console.log(res.data);

              
  
          })
          axios.get(api).then(res=>{setAllData(res.data);console.log(allData);

          })
          toggleShowCard()
      }
      else{
          alert(` Check Name And Password
          Password must be more than or equal 8 chars
          and user name mor than 3 cahrs`)
      }
    }


    function forwed() {
      if (email=="" || password=="") {
        alert("Enter Email or Password")
      }
      else{
      axios.get(api).then(res=>{setAllData(res.data)
      })
       let id=0,correct=false;
       for (let i = 0; i < allData.length; i++) {
        if (allData[i].password==password&&allData[i].email==email) {
          correct=true;id=i
          setData(allData[i])
          
          break;
        }    
       }
       if (correct==true) {
        localStorage.setItem("userName",allData[id].userName);
        navigate(`/`)

      }else {alert("Email Or Password Incorrect")}
        
      }
        
       
        
      
    }
    const { toggleColorMode } = useColorMode()
    const bgg = useColorModeValue('#48b064', 'red.200')
  const color = useColorModeValue('white', 'gray.800')
    

  return (
    <>
      <Container
       
        height={"80vh"}
        maxW={"4xl"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        
      >
        <SimpleGrid columns={2} bg={'gray.300'} w="100%" display={"flex"} pos="relative" justifyContent="center" alignItems="center"> 
        {/* تسجيل الدخول */}

        <SimpleGrid width={"100%"} h="md" columns={2} pos="absolute" display={ showCard ? "none":"flex"} alignItems="center" className="Signup"  >  
           


          <Card w={"100%"} h={"100%"}  bg="#39505F">
         <CardHeader mb="5">
         <Heading color='white'  textAlign={"center"}>تسجيل الدخول</Heading>
         </CardHeader>
           <CardBody>
            

            
             <SimpleGrid spacingY={5}>
               <Input bg={"whitesmoke"}   size="md" textAlign={"right"} placeholder="البريد الإلكتروني" onChange={e =>{setEmail(e.target.value)}} />
               
               <InputGroup size="md">
                 <Input bg={"whitesmoke"} 
                   pr="1rem"
                   fontSize={"1.rem"}
                   type={show ? "text" : "password"}
                   placeholder="كلمة السر" textAlign={"right"}
                   onChange={e =>{setPassword(e.target.value)}}/>
                 <InputLeftElement width="4.5rem" >
                   <Button bg={"#e5e5e5"} h="1.75rem"size="sm" onClick={handleClick}>
                     {show ? "إخفاء" : "إظهار"}
                   </Button>
                 </InputLeftElement>
               </InputGroup>
             </SimpleGrid>
           </CardBody>
           <Center pb={"10px"}>
           
             <Button  bg={"#48b064"} 
             _hover={{color:"gray.800",backgroundColor:"wihte"}}
             
             color="white" w="75%"
              onClick={forwed}
             >
              {/* <RouteLink to={"/"}></RouteLink>  */}
             <Text></Text>
               تسجيل الدخول
             </Button>
            
           </Center>
         </Card>
   

      
    
       
      
         <Card bg={"#001F33"} w={"100%"} h={"100%"} display={"flex"} flexDir="column" align="center"  >
           <CardBody pos={"absolute"}  bottom="40%" >
            <SimpleGrid spacingY={3}  >
             <Text textAlign={"center"} color="white" fontSize={"1.3rem"} >
              ليس لديك حساب ؟ 
             </Text>
             <Text textAlign={"center"} color="white" fontSize={"1.3rem"} >من فضلك قم بإنشاء حساب جديد</Text>
             <Center>

             <Button onClick={toggleShowCard}
             _hover={{color:"gray.800",backgroundColor:"wihte"}}
             color="white"_focus={{color:"gray.800",backgroundColor:"wihte"}}
              bg={"#48b064"} w="75%" fontSize={"1.1rem"}>
               تسجيل جديد
             </Button>
             </Center>
             </SimpleGrid>
           </CardBody>
         </Card>
       
     </SimpleGrid>
     
      

        {/* نهاية تسجيل الدخول */}

        {/* بداية تسجيل جديد */}
        <SimpleGrid width={"100%"} h="md" columns={2} pos="absolute" display={ showCard ? "flex":"none"} alignItems="center" className="Signup"  >

        <Card bg={"#001F33"} w={"100%"} h={"100%"} display={"flex"} flexDir="column" align="center" pos={"relative"} >
           <CardBody pos={"absolute"}  bottom="50%">
            <SimpleGrid spacingY={3} >
             <Text textAlign={"center"} color="white" fontSize={"1.3rem"} >
              مرحباً بك  
             </Text>
             <Text textAlign={"center"}></Text>
             <Center>
             <Button onClick={toggleShowCard}
             _hover={{color:"gray.800",backgroundColor:"wihte"}}
             color="white"_focus={{color:"gray.800",backgroundColor:"wihte"}}
             
              bg={"#48b064"} w="100%" fontSize={"1.1rem"}>
               تسجيل الدخول
             </Button>
             </Center>
             </SimpleGrid>
           </CardBody>
         </Card>
         
         <Card w={"100%"} h={"100%"} bg="#39505F">
         <CardHeader>
         <Heading color='white' textAlign={"center"}>تسجيل جديد</Heading>
         </CardHeader>
           <CardBody>
             <SimpleGrid spacingY={2}  >
             
               <Input bg={"whitesmoke"} size="md" textAlign={"right"} placeholder="اسم المستخدم"
               onChange={e =>{setUserName(e.target.value)}} />
                 <Input bg={"whitesmoke"}   size="md" textAlign={"right"} placeholder="البريد الإلكتروني"
               onChange={e =>{setEmail(e.target.value)}} />
               <InputGroup size="md">
                 <Input bg={"whitesmoke"} 
                   pr="1rem"
                   type={show ? "text" : "password"}
                   placeholder="كلمة السر" textAlign={"right"}
                   onChange={e =>{setPassword(e.target.value)}}
                 />
                 <InputLeftElement width="4.5rem" >
                   <Button bg={"#e5e5e5"} h="1.75rem"size="sm" onClick={handleClick}>
                     {show ? "إخفاء" : "إظهار"}
                   </Button>
                 </InputLeftElement>
               </InputGroup>
             </SimpleGrid>
           </CardBody>
           <Center pb={"10px"}>
             <Button  bg={"#48b064"} w="60%"  onClick={PostData} 
             _hover={{color:"gray.800",backgroundColor:"wihte"}}
             color="white">
               تسجيل جديد
             </Button>
           </Center>
         </Card>
       
      

       
     </SimpleGrid>
        {/* نهاية تسجيل جديد */}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default LogIn;
