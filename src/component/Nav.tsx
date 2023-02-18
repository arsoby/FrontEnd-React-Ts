import React, { useReducer } from 'react'
import {
    Box,
    Button,
    CloseButton,
    Flex,
    HStack,
    Icon,
    IconButton,
    Link,
    Popover,
    PopoverContent,
    PopoverTrigger,
    SimpleGrid,
    Stack,
    VStack,
    chakra,
    useColorMode,
    useColorModeValue,
    useDisclosure,
    Image,
    InputGroup,
    InputLeftElement,
    Input,
    InputRightElement
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import axios from 'axios';
import { IoIosArrowDown } from "react-icons/io";
import { AiFillHome, AiOutlineInbox, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link as RouteLink, useNavigate } from 'react-router-dom'
import Chatbot from './Chatbot';
import Logo from "./../assets/logoo.png";
const reduser =(state:any,action:any)=>{
  if(action.type === 'user logIn')return {user: state.user =  true}
  if(action.type === 'user LogOut')return {user: state.user   = false}}
function Nav() {

  const user=localStorage.getItem("userName")
//   localStorage.removeItem("userName")
// console.log(user);
const removeUser =()=>{
  localStorage.removeItem("userName")
  navigate('/login')
}


  const initialState ={user:true};
  const [state,dispatch]:any= useReducer<any>(reduser,initialState)

    const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("fffff", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("#001F33", "gray.800");
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [y, setY] = React.useState(0);
  const height = ref.current ? ref.current.getBoundingClientRect() : 0;

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();

  const MobileNavContent = (
    <VStack
      pos="fixed"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Link href="#home">
      <Button w="full" variant="light">
        الصفحة الرئيسية
      </Button>
      </Link>
      <Link href="#about">
      <Button 
        w="full"
      color="light"
        leftIcon={<AiOutlineInbox />}>
        جميع الشركات
      </Button>
      </Link>
      <Link href="#projects">
      <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
        الحاسبة
      </Button>
      </Link>
    </VStack>
  );
   // Get Method 
   const navigate = useNavigate()
   const api="https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab"

   React.useEffect(() => {
    axios.get(api).then(res=>{
      setAllData(res.data)
console.log(res.data);
    })  
},[])

  let [allData, setAllData] = React.useState <any>();
  let [data, setData] = React.useState <any>();
  let [NumOfC, setNumOfC] = React.useState <any>("");

   const Check = (item:any) => {
      NumOfC=item.target.value.toUpperCase();
    // setNumOfC(item.target.value.toUpperCase());
    // setNumOfC(NumOfC.toUpperCase())
        console.log(NumOfC);

      let id = 0,
        correct = false;
      for (let i = 0; i < allData.length; i++) {
        let st = allData[i].num
        if (st == NumOfC) {
          correct = true;
          id = i;
          setData(allData[i]);
          break; }
        }
        if (correct) {
          // alert(`${allData[id].id} `)
          navigate(`/company/${allData[id].id}`)

        }
        else{
          
          }
        }
    
  
  return (
    <>
    <chakra.header
      ref={ref}
      shadow={y > height ? "sm" : undefined}
      boxShadow={"1px 1px 5px 0px lightgrey"}
      zIndex={1}
      transition="box-shadow 0.2s"
      bg={bg}
      borderTopColor="brand.400"
      w="full"
      pos={"relative"}
      overflowY="hidden"
      // color="gray.200"
      _dark={{ color: "gray.900" }}
      id="header"
    >
      <chakra.div h="4.5rem" mx="auto" maxW="100%">
        <Flex
          w="full"
          h="full"
          px="6"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex align="flex-start">
            <Link href="/">
              <HStack>
                <Image src={Logo} w={"64px"} h={"64px"} borderRadius={"50%"}></Image>
              </HStack>
            </Link>
          </Flex>
          <Flex>
            <HStack spacing="5" display={{ base: "none", md: "flex" }}>
            <RouteLink to={"/"}>
              <Button
                bg={bg}
                color="white"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{ color: cl, backgroundColor:"white"}}
                _focus={{ boxShadow: "none" }}>
                  الصفحة الرئيسية
              </Button>
              </RouteLink>
              <RouteLink to="/companies">
                <Button
                  bg={bg}
                  color="white"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{ color: cl, backgroundColor:"white"}}
                  _focus={{ boxShadow: "none" }}>
                    جميع الشركات
                </Button>
              </RouteLink>
              <RouteLink to={"/calculator"}>
              <Button
                bg={bg}
                color="white"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{ color: cl, backgroundColor:"white"}}
                _focus={{ boxShadow: "none" }}>
                    الحاسبة
              </Button>
              </RouteLink>
              <RouteLink to={"/Favourites"}>
              <Button
                bg={bg}
                color="white"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{ color: cl, backgroundColor:"white"}}
                _focus={{ boxShadow: "none" }}>
                    قائمة المتابعة
              </Button>
              </RouteLink>
            </HStack>
          </Flex>
          <Flex justify="flex-end" align="center" color="gray.400">

          <InputGroup>
              <InputRightElement pointerEvents="none" >
                <AiOutlineSearch />
              </InputRightElement>
              <Input bg={"white"} color='black' type="tel" placeholder="بحث..." mr={"10px"} 
                onChange={Check}
              />
            </InputGroup>
            
            {user === null?
             <RouteLink to={"/login"}> 
              <Button onClick={()=>dispatch({type:"user logIn"})} mr={"2"} color={cl}>
              تسجيل دخول
            </Button></RouteLink>  
            :    <Button onClick={()=>removeUser()} mr={"2"} color={cl}>
            تسجيل خروج
          </Button>}
      
        
            <RouteLink to={"/login"}>
          
            </RouteLink>
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color="white"
              _dark={{ color: "inherit" }}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />
          </Flex>
        </Flex>
        {MobileNavContent}
      </chakra.div>
    </chakra.header>
      <Chatbot/>
</>
  )
}

export default Nav