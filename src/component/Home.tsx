import { Box, chakra, Heading, SimpleGrid, Image, Text, StatGroup, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Divider } from '@chakra-ui/react'
import React from 'react'
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Microsoft from "./../assets/microsoft.png";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

import { Bar, Line } from "react-chartjs-2";
import axios from "axios";
import Marque from "./Marque";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import { faker } from '@faker-js/faker';

function Home() {
  const [data, setData] = React.useState<any[]>([]);

  const api = "https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab";

  React.useEffect(() => {
    axios.get("https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab").then((res) => {
      setData(res.data);
    });
  }, []);
  const labels = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "01:00"];

  const [chartData, setChartData] = React.useState<any>({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = React.useState({});


  React.useEffect(() => {
    setChartData({
      labels: labels,
      datasets: [
        {
          label: "مؤشر الاسهم",
          // data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
          data: [2855, 2612, 892, 2005, 5626, 6601, 2848],
          borderColor: "rgba(45, 69, 85, 0.9)",
          backgroundColor: "rgba(45, 69, 85, 0.9)",
          fill: {
            target: "origin", // 3. Set the fill options
            above: "rgba(45, 69, 85, 0.9)"
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
            text: 'المؤشر'
          }
        },
        x: {
          title: {
            display: true,
            text: 'الوقت'
          }
        }
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

  return (
    <Box>
      <Box>
        <Box pos={"absolute"} zIndex={"1"} color={"white"} width={"100%"} textAlign={"center"} height={"20vh"} top={"25vh"}>
          <Box display={"flex"} justifyContent={"center"} gap={"2"}>
            <Heading fontFamily={"Cairo"}>مرحباً بك في موقع</Heading>
            <Heading color={"gray.300"} fontFamily={"Cairo"}>أعرف سهمك</Heading>
          </Box>
          <br></br>
          <Box>
            <Text fontSize={"x-large"}>نساعدك على معرفة شرعية سهمك</Text>
          </Box>
        </Box>
        <ul className="background">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Box>
      <br></br>
      <Box ml={"2vh"} mr={"2vh"}>
        
        <br></br>
        {/* شريط متحرك للأسهم الأكثر بحثاً */}
      <Marque/>

        <br></br>
        {/* الشركات الأكثر بحثاً */}
        <Box>
          <chakra.h2 textAlign={"center"} fontFamily={"Cairo"} fontSize={"3xl"}>
            الشركات الأكثر بحثاً
          </chakra.h2>

          <Box bgColor={"#001F33"}>
            <SimpleGrid columns={6} gap={"12"} p={"6"}>
              
              <Link to={"/company/1"}>
                <Image src='https://logo.clearbit.com/Microsoft.com'></Image>
              </Link>
              <Link to={"/company/2"}>
                <Image src='https://logo.clearbit.com/Tesla.com'></Image>
              </Link>
              <Link to={"/company/3"}>
                <Image src='https://logo.clearbit.com/Apple.com'></Image>
              </Link>
              <Link to={"/company/4"}>
                <Image src='https://logo.clearbit.com/Alibaba.com'></Image>
              </Link>
              <Link to={"/company/5"}>
                <Image src='https://logo.clearbit.com/NIO.com'></Image>
              </Link>
              <Link to={"/company/6"}>
                <Image src='https://logo.clearbit.com/AMC.com'></Image>
              </Link>
            </SimpleGrid>
          </Box>
        </Box>
        {/* الشركات الأكثر بحثاً */}
        <br></br>
        {/* ملخص السوق */}
        <Box>
          <chakra.h2 fontSize={"3xl"} fontWeight={"bold"}>ملخص السوق</chakra.h2>

          <Box>
            <SimpleGrid columns={9} bg={"#001F33"} p={"14"} textAlign={"center"} fontSize={"x-large"} fontWeight={"bold"} color={"white"}>
              <Box color={"green.300"}>
                <Text>الأكثر ارتفاع</Text>
              </Box>
              <Box>
                <StatGroup>
                  <Stat>
                    <StatNumber>Microsoft</StatNumber>
                    <StatHelpText fontSize={"large"} color={"green.300"}>
                      <StatArrow type='increase' />
                      15.9%
                    </StatHelpText>
                  </Stat>
                </StatGroup>
              </Box>
              <Box>
                <StatGroup>
                  <Stat>
                    <StatNumber>Tesla</StatNumber>
                    <StatHelpText fontSize={"large"} color={"green.300"}>
                      <StatArrow type='increase' />
                      13.36%
                    </StatHelpText>
                  </Stat>
                </StatGroup>
              </Box>
              <Box>
                <StatGroup>
                  <Stat>
                    <StatNumber>NIO</StatNumber>
                    <StatHelpText fontSize={"large"} color={"green.300"}>
                      <StatArrow type='increase' />
                      10.96%
                    </StatHelpText>
                  </Stat>
                </StatGroup>
              </Box>
              <Divider orientation='vertical' margin={"auto"} border={"2px"} />
              <Box color={"#FF0D4E"}>
                <Text>الأكثر انخفاضاً</Text>
              </Box>
              <Box>
                <StatGroup>
                  <Stat>
                    <StatNumber>Alphabet</StatNumber>
                    <StatHelpText fontSize={"large"} color={"#FF0D4E"}>
                      <StatArrow type='decrease' />
                      9.05%
                    </StatHelpText>
                  </Stat>
                </StatGroup>
              </Box>
              <Box>
                <StatGroup>
                  <Stat>
                    <StatNumber>Alibaba</StatNumber>
                    <StatHelpText fontSize={"large"} color={"#FF0D4E"}>
                      <StatArrow type='decrease' />
                      14.08%
                    </StatHelpText>
                  </Stat>
                </StatGroup>
              </Box>
              <Box>
                <StatGroup>
                  <Stat>
                    <StatNumber>Apple</StatNumber>
                    <StatHelpText fontSize={"large"} color={"#FF0D4E"}>
                      <StatArrow type='decrease' />
                      16.01%
                    </StatHelpText>
                  </Stat>
                </StatGroup>
              </Box>
            </SimpleGrid>
          </Box>
          <Box h={630} w={"100%"}>
            <Box h={"100%"}>
              <Line options={chartOptions} data={chartData} />
            </Box>
          </Box>
        </Box>
        {/* ملخص السوق */}

      </Box>

    </Box>
  );
}

export default Home;
