import { SimpleGrid, Stack, Divider,Text, Stat, StatArrow, StatHelpText, StatNumber } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

function Marque() {
    const [data, setData] = React.useState<any[]>([]);

    const api = "https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab";
  
    React.useEffect(() => {
      axios.get("https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab").then((res) => {
        setData(res.data);
      });
    }, []);


    
  return (
    <>
    <br></br>
      <Marquee pauseOnHover={true} className={"marquee"} speed={60} >
          <SimpleGrid
            display={"flex"}
            justifyContent={"space-between"}
            gap={5}
            p={"2"}
            bg="#001F33"
            color={"white"}
          >
            {data.map((item: any) => (
              <li key={item.id}>
                <Stack direction="row" h={6}>
                  <Divider orientation="vertical" />
                  <Link to={"/company"}>
                    <Text>
                      {" "}
                      {item.nameOfCompany} ( {item.price} $ )
                   
                    </Text>
                  </Link>
                </Stack>
              </li>
            ))}
          </SimpleGrid>
        </Marquee>
        {/* شريط متحرك للأسهم الأكثر بحثاً */}
    
    
    </>
  )
}

export default Marque