import { Link } from 'react-router-dom'
import Container from './../../Components/Container'
import { IoIosAdd } from 'react-icons/io';
import { Button, Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import RowArticle from "./Components/rowArticle"

const Articles = () => {
  const articles = [
    {
      image: "https://dkrqtr.ae/images/articleImages/fe67c81666c505b048a2d1882535b193.jpeg",
      title: "كأس العالم 2022 ومدى تأثيره على العقار في قطر",
      content: "01014426851",
      createdAt: "10/05/2024",
    },
    {
      image: "https://dkrqtr.ae/images/articleImages/fe67c81666c505b048a2d1882535b193.jpeg",
      title: "كأس العالم 2022 ومدى تأثيره على العقار في قطر",
      content: "01014426851",
      createdAt: "10/05/2024",
    },
    {
      image: "https://dkrqtr.ae/images/articleImages/fe67c81666c505b048a2d1882535b193.jpeg",
      title: "كأس العالم 2022 ومدى تأثيره على العقار في قطر",
      content: "01014426851",
      createdAt: "10/05/2024",
    },
    {
      image: "https://dkrqtr.ae/images/articleImages/fe67c81666c505b048a2d1882535b193.jpeg",
      title: "كأس العالم 2022 ومدى تأثيره على العقار في قطر",
      content: "01014426851",
      createdAt: "10/05/2024",
    },
    {
      image: "https://dkrqtr.ae/images/articleImages/fe67c81666c505b048a2d1882535b193.jpeg",
      title: "كأس العالم 2022 ومدى تأثيره على العقار في قطر",
      content: "01014426851",
      createdAt: "10/05/2024",
    },
    {
      image: "https://dkrqtr.ae/images/articleImages/fe67c81666c505b048a2d1882535b193.jpeg",
      title: "كأس العالم 2022 ومدى تأثيره على العقار في قطر",
      content: "01014426851",
      createdAt: "10/05/2024",
    },
    {
      image: "https://dkrqtr.ae/images/articleImages/fe67c81666c505b048a2d1882535b193.jpeg",
      title: "كأس العالم 2022 ومدى تأثيره على العقار في قطر",
      content: "01014426851",
      createdAt: "10/05/2024",
    },
    {
      image: "https://dkrqtr.ae/images/articleImages/fe67c81666c505b048a2d1882535b193.jpeg",
      title: "كأس العالم 2022 ومدى تأثيره على العقار في قطر",
      content: "01014426851",
      createdAt: "10/05/2024",
    },
    {
      image: "https://dkrqtr.ae/images/articleImages/fe67c81666c505b048a2d1882535b193.jpeg",
      title: "كأس العالم 2022 ومدى تأثيره على العقار في قطر",
      content: "01014426851",
      createdAt: "10/05/2024",
    },
  ]
  return (
    <div>
      <Container>
        <header className="flex justify-between mt-5">
          <h1 className="text-2xl font-bold">المقالات</h1>
          <Button as={Link} to="/articles/add" leftIcon={<IoIosAdd />} colorScheme='teal' variant='solid'>
            إضافة
          </Button>
        </header>

        <main className="py-5">
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
                  articles.map((article) => {
                    return (
                      <RowArticle key={article._id} article={article} />
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

export default Articles