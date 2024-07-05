import { Link } from "react-router-dom"
import Container from "./../../Components/Container"
import { Button, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { IoIosAdd } from "react-icons/io";
import RowAgent from "./Components/RowAgent";

const Agents = () => {

  const agents = [
    {
      name: "Al Hilal",
      image: "https://dkrqtr.ae/images/ProfileImage/6499577a73db7fb4a4e3195c1069b101.jpeg",
      email: "alhilal2@gmail.com",
      phone: "01014426851",
      whatsapp: "01282313371",
    },
    {
      name: "Al Hilal",
      image: "https://dkrqtr.ae/images/ProfileImage/6499577a73db7fb4a4e3195c1069b101.jpeg",
      email: "alhilal2@gmail.com",
      phone: "01014426851",
      whatsapp: "01282313371",
    },    {
      name: "Al Hilal",
      image: "https://dkrqtr.ae/images/ProfileImage/6499577a73db7fb4a4e3195c1069b101.jpeg",
      email: "alhilal2@gmail.com",
      phone: "01014426851",
      whatsapp: "01282313371",
    },    {
      name: "Al Hilal",
      image: "https://dkrqtr.ae/images/ProfileImage/6499577a73db7fb4a4e3195c1069b101.jpeg",
      email: "alhilal2@gmail.com",
      phone: "01014426851",
      whatsapp: "01282313371",
    },    {
      name: "Al Hilal",
      image: "https://dkrqtr.ae/images/ProfileImage/6499577a73db7fb4a4e3195c1069b101.jpeg",
      email: "alhilal2@gmail.com",
      phone: "01014426851",
      whatsapp: "01282313371",
    },
  ]

  return (
    <div>
      <Container>
        <header className="flex justify-between mt-5">
          <h1 className="text-2xl font-bold">المكاتب</h1>
          <Button as={Link} to="/agents/add" leftIcon={<IoIosAdd />} colorScheme='teal' variant='solid'>
            إضافة
          </Button>
        </header>
        <main className="py-5">
          <TableContainer>
            <Table className="bg-white" variant='simple'>
              <Thead>
                <Tr>
                  <Th>الصورة</Th>
                  <Th>الإسم</Th>
                  <Th>الايميل</Th>
                  <Th>رقم الهاتف</Th>
                  <Th>الواتساب</Th>
                  <Th>أفعال</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  agents.map((agent) => {
                    return (
                      <RowAgent key={agent.name} agent={agent} />
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

export default Agents