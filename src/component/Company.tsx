import {
  Badge,
  Box,
  Button,
  chakra,
  Heading,
  Link,
  SimpleGrid,
  Text,
  Image,
  Card,
  CardBody,
  CardHeader,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouteLink, useParams } from "react-router-dom";
import { BsStar } from "react-icons/bs";
import MicosoftLogo from "./../assets/microsoft.png";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import axios from "axios";

function Company() {

    const [data,setData]=React. useState<any>([]);
   const parmams= useParams()
    const id=parmams.id
    const api = `https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab/${id}`

    function getCompany() {

        axios.get(api)
         .then((res) => {
           setData(res.data); 
        
          
        });
    }

 
    console.log(id)
    React.useEffect(() => {
      
        getCompany()
    }, [getCompany()]);

   

  const labels = [
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "01:00",
  ];

  const [chartData, setChartData] = React.useState<any>({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = React.useState({});

  React.useEffect(() => {
    setChartData({
      labels: labels,
      datasets: [
        {
          label: "مؤشر السهم",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
        //   data: [3333, 2612, 892, 223, 2000, 4601, 7848],
          borderColor: "rgba(45, 69, 85, 0.9)",
          backgroundColor: "rgba(45, 69, 85, 0.9)",
          fill: {
            target: "origin", // 3. Set the fill options
            above: "rgba(45, 69, 85, 0.9)",
          },
        },
      ],
    });
    setChartOptions({
      responsive: true,
      scales: {
        y: {
          title: {
            display: true,
            text: "المؤشر",
          },
        },
        x: {
          title: {
            display: true,
            text: "الوقت",
          },
        },
      },
      plugins: {
        legend: {
          position: "top",
        },
        // title: {
        //   display: true,
        //   text: "Whom'st let the dogs out",
        // },
      },
    });
  }, []);

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
    <Box>
         <br></br>
         
     
      <Box ml={"4vh"} mr={"4vh"}>
        <SimpleGrid columns={2} alignItems={"center"}>
          <Box>
            <Heading>{data.nameOfCompany}</Heading>
            <br></br>
            <Box display={"flex"} justifyContent={"space-between"} w={"30%"}>
              <Badge fontSize={"large"} colorScheme="blue" p={"1"}>
              {data.num}
              </Badge>
              <Badge mr={10}color={ishalalColor(data.ishalal)} fontSize={"large"}  p={"1"}>
              
              {data.ishalal}
              </Badge>
            
            </Box>
          </Box>
          <Box>
            <Image
              objectFit={"contain"}
              maxW={{ base: "100%", sm: "200px" }}
              src={data.img}
              alt="Microsoft"
            />
          </Box>
        </SimpleGrid>
        <br></br>
        <SimpleGrid columns={2}>
          {/* <Box>
            <Link
              href="#"
              color={"blue"}
              _hover={{ textDecoration: "none" }}
              fontSize={"x-large"}
              display={"flex"}
              alignItems={"center"}
            >
              <Text>إضافة الى المفضلة</Text> <BsStar />
            </Link>
          </Box> */}

<Box>
          <Box justifyContent={"space-between"} w={"100%"}>
            <Text fontSize={"3xl"} fontWeight={"bold"}>
              {" "}
              نظره عامة:{" "}
            </Text>
            <Text fontSize={"xl"} >
            {data.description}
            </Text>
          </Box>
        </Box>


          <Box>
            <Card bg="#001F33" color={"white"}>
              <CardHeader>
                <Heading size="lg" fontWeight={"bold"}>بيانات الشركة</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="md" textTransform="uppercase">
                      السعر
                    </Heading>
                    <Text pt="2" fontSize="sm">
                    {data.price} $
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="md" textTransform="uppercase">
                      مجال الشركة
                    </Heading>
                    <Text pt="2" fontSize="sm">
                    {data.reang}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="md" textTransform="uppercase">
                      إجمالي الإيرادات
                    </Heading>
                    <Text pt="2" fontSize="sm">
                    {data.tRevenue} $
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="md" textTransform="uppercase">
                      القيمة السوقية
                    </Heading>
                    <Text pt="2" fontSize="sm">
                    {data.MarkeValue} $
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="md" textTransform="uppercase">
                      الإيرادات الأخرى
                    </Heading>
                    <Text pt="2" fontSize="sm">
                    {data.otherRevenue} $
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="md" textTransform="uppercase">
                      إجمالي الدين
                    </Heading>
                    <Text pt="2" fontSize="sm">
                    {data.tDebt} $
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        </SimpleGrid>
        <br></br>
        <Text bg="#001F33" p={2}  w={"10%"}color={"white"} mr={4} fontSize={"3xl"} fontWeight={"bold"}>
              {" "}
             أداء السهم
            </Text>

        <Box h={630} w={"100%"}>
          <Box h={"100%"}  >
            <Line  options={chartOptions} data={chartData} />
          </Box>
        </Box>



      </Box>
    </Box>
  );
}

export default Company;
