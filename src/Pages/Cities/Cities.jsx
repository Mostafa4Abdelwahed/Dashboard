import { Link } from 'react-router-dom'
import Container from '../../Components/Container'
import { IoIosAdd } from 'react-icons/io';
import { Button, Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import RowCity from "./Components/rowCity"

const Cities = () => {
  const Cities = [
    {
      image: "https://dkrqtr.ae/images/articleImages/fe67c81666c505b048a2d1882535b193.jpeg",
      name: "بيرلين - المانيا",
      createdAt: "20/07/2025",
    },
    {
      image: "https://dkrqtr.ae/images/articleImages/fe67c81666c505b048a2d1882535b193.jpeg",
      name: "بيرلين - المانيا",
      createdAt: "20/07/2025",
    },
    {
      image: "https://dkrqtr.ae/images/articleImages/fe67c81666c505b048a2d1882535b193.jpeg",
      name: "بيرلين - المانيا",
      createdAt: "20/07/2025",
    },
    {
      image: "https://dkrqtr.ae/images/articleImages/fe67c81666c505b048a2d1882535b193.jpeg",
      name: "بيرلين - المانيا",
      createdAt: "20/07/2025",
    },
    {
      image: "https://dkrqtr.ae/images/articleImages/fe67c81666c505b048a2d1882535b193.jpeg",
      name: "بيرلين - المانيا",
      createdAt: "20/07/2025",
    },
    {
      image: "https://dkrqtr.ae/images/articleImages/fe67c81666c505b048a2d1882535b193.jpeg",
      name: "بيرلين - المانيا",
      createdAt: "20/07/2025",
    },
    {
      image: "https://dkrqtr.ae/images/articleImages/fe67c81666c505b048a2d1882535b193.jpeg",
      name: "بيرلين - المانيا",
      createdAt: "20/07/2025",
    },
    {
      image: "https://dkrqtr.ae/images/articleImages/fe67c81666c505b048a2d1882535b193.jpeg",
      name: "بيرلين - المانيا",
      createdAt: "20/07/2025",
    },
  ]

  return (
    <div>
      <Container>
        <header className="flex justify-between mt-5">
          <h1 className="text-2xl font-bold">المدن</h1>
          <Button as={Link} to="add" leftIcon={<IoIosAdd />} colorScheme='teal' variant='solid'>
            إضافة
          </Button>
        </header>

        <main className="mt-5">
          <TableContainer>
            <Table className="bg-white" variant='simple'>
              <Thead>
                <Tr>
                  <Th>الصورة</Th>
                  <Th>العنوان</Th>
                  <Th>تاريخ الانشاء</Th>
                  <Th>أفعال</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  Cities.map((city) => {
                    return (
                      <RowCity city={city} />
                    )
                  })
                }
              </Tbody>
            </Table>
          </TableContainer>
        </main>
      </Container>
    </div>
  )
}

export default Cities