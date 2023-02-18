import { Box, Button, Flex, Heading, Input,Text } from "@chakra-ui/react";
import React from "react";
import Marque from "./Marque";

function Calculator() {

    // المبلغ كامل للزكاه
    const[number,setNumber]=React.useState<any>()
    // عددالاسهم
    const[number2,setNumber2]=React.useState<any>()
    // نسبه التطهير
    const[number3,setNumber3]=React.useState<any>()

    const[total,setTotal]=React.useState<any>()
    const[total2,setTotal2]=React.useState<any>()

   {/* حاسبه الزكاه */}
    const calculat1 = ()=>{
        setTotal (number/40)
       
    }
   {/* حاسبه التطهير */}
    const calculat2 = ()=>{
        const t=number2 * number3
        setTotal2 (t)
       
    }
  return (
    <div>
      <Marque/>
      <Flex 
      mt={20}
      alignItems="center"
      justifyContent="center"
      gap="40">
        {/* حاسبه التطهير */}
        <Box
          border="2px"
          textAlign="center"
          width={400}
          h={300}
          bg="#39505F"
          rounded="xl"
          shadow="xl"
          p={10}
          color='white'
        >
          <Heading fontSize="2xl"> حاسبه التطهير </Heading>

          <Input mt={5} color='white' placeholder="ادخل  مقدار الربح " onChange={e =>{setNumber2(e.target.value)}}></Input>
          <Input mt={5} placeholder=" ادخل نسبه التطهير" onChange={e =>{setNumber3(e.target.value)}}></Input>

          <Button mt={5} bg='green' onClick={()=>calculat2()}>احسب</Button>
          <Text mt={5} bg='green'>{total2}</Text>

        </Box>

        {/* حاسبه الزكاه */}

        <Box
          border="2px"
          textAlign="center"
          width={400}
          h={300}
          bg="#39505F"
          rounded="xl"
          shadow="xl"
          p={10}
          color='white'
        >
          <Heading fontSize="2xl"> حاسبه الزكاه </Heading>

          <Input mt={5} placeholder="ادخل المبلغ" onChange={e =>{setNumber(e.target.value)}}></Input>

          <Button  bg='green' mt={5}onClick={()=>calculat1()}>احسب</Button>
          <Text mt={8} bg='green'>{total}</Text>
        </Box>
        
      </Flex>
      <br></br>
    </div>
  );
}

export default Calculator;
