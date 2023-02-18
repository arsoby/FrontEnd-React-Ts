import {
  useDisclosure,
  Button,
  Drawer,
  Text,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Switch,
  Flex,
  Box,
  localStorageManager,
} from "@chakra-ui/react";
import React from "react";
import { AiFillRobot } from "react-icons/ai";

function Chatbot() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [number, setNumber] = React.useState<any>();
  const [data, setData] = React.useState<any>();

  const show = (n: any) => {
    switch (n) {
      case 1:


         setData(`الشركات الاكثر ربحا لهذا اليوم في المرتبة الاولى Microsoft ثم Tesla ثم NIO`)
        console.log(data);
        break;
      case 2:
        // execute case y code block
        setData(" الشركات الاكثر انخفاضا لهذا اليوم في المرتبه الاولى Apple ثم Alibaba ثم Alphabet");
        break;

        case 3:
          // execute case y code block
          setData("الشركات المتوافقه مع الشريعة هي 1-Microsoft 2-Tesla 3-Apple 4-Amazon 5-Alphabet");
          break;

          case 4:
            // execute case y code block
            setData("  إعلان بشأن الموافقة على إدراج أدوات الدين الحكومية من فئة سبق إدراجها 1444/07/25    16/02/2023 09:47:57 إعلان شركة الكثيري القابضة عن عزمها إصدارالسلسة الأولي من برنامج اصدار صكوك محلية مقومة بالريال السعودي 3008 الكثيري -0.1% (-0.19) 1444/07/25    16/02/2023 09:16:02 إعلان الشركة السعودية لأنابيب الصلب عن النتائج المالية الموحدة السنوية للفترة المنتهية في 31-12-2022 1320 أنابيب السعودية 0.44% (2.21) 1444/07/25    16/02/2023 09:10:57 إعلان بشأن الموافقة على إدراج أدوات الدين الحكومية من فئة سبق إدراجها 1444/07/25    16/02/2023 09:47:57 إعلان شركة الكثيري القابضة عن عزمها إصدارالسلسة الأولي من برنامج اصدار صكوك محلية مقومة بالريال السعودي ");
      
        break;
        case 5:
          // execute case y code block
          setData("   التطهير هو اخراج المساهم أو المتداول في سوق الأسهم لقدر محدد من الارباح التي يجنيها من استثماره في الشركات المختلطة في أسواق الأسهم مقابل ذلك الإيراد المحرم الذي تجنيه الشركة من إرباحها غير التشغيلية – الأخرى – أو اقتراضها لديون بطريقة غير شرعية  ");
    
      break;
      case 6:
        // execute case y code block
        setData("   نحن في موقع اعرف سهمك نساعد على معرفه شرعيه سهمك والوصول الى كافه البيانات التي تريد معرفتها  ");
  
    break;
      default:
      // execute default code block
    }
  };

  return (
    <Box>
      
      <Button mr={5}
      size='lg'
      mt='80vh'
      position="fixed"
      borderRadius={100}
      colorScheme="teal" onClick={onOpen}>
       
        <AiFillRobot/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // finalFocusRef={btnRef}
        size="sm"
     
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          
          <DrawerHeader bg='#39505F'color={'white'} textAlign='center'>مرحبا ماذا تريد ان تعرف </DrawerHeader>

          <DrawerBody >
            <Flex >
            <Box>
             <AiFillRobot  size={50}/> 
            </Box>
          
          <Box mt={2} mb={5}>
            
            <Text mt={2}  bg='gray.500' fontSize='lg' border='1px' h={180} rounded="lg" color='white'> {data} </Text>
            </Box>

            </Flex>
            <AiFillRobot  size={50}/>
            <Flex justifyContent="center" gap={3} mt={3} >
              <Button onClick={() => show(1)}>الشركات الاكثر ربحا</Button>
              <Button onClick={() => show(2)}>الشركات الاكثر انخفاضاً</Button>
            </Flex>

            <Flex justifyContent="center" gap={3} mt={5}>
              <Button onClick={() => show(3)}>الشركات المتوافقة مع الشريعة</Button>
              <Button onClick={() => show(4)}>  اخر الاخبار</Button>
            </Flex>
            <Flex justifyContent="center" gap={3} mt={5}>
              <Button onClick={() => show(5)}> ماهو التطهير</Button>
              <Button onClick={() => show(6)}>  من نحن؟ </Button>
            </Flex>
          
          </DrawerBody>

          <DrawerFooter bg="#001F33">
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              خروج
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Chatbot;
