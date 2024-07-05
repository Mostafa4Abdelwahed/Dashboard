import { Button, FormControl, FormLabel, Input, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Td, Tr, useDisclosure } from "@chakra-ui/react"
import { BiSolidChevronDown } from "react-icons/bi"
import { Link } from "react-router-dom";

const rowAgent = ({ agent }) => {
    const confirmDelete = useDisclosure();
    const UpdateImages = useDisclosure();

    return (
        <>
            <Tr>
                <Td>
                    <img className="rounded-sm w-[40px]" src={agent.image} alt="" />
                </Td>
                <Td>{agent.name}</Td>
                <Td>{agent.email}</Td>
                <Td>{agent.phone}</Td>
                <Td>{agent.whatsapp}</Td>
                <Td className="flex gap-2.5">
                    <Menu>
                        <MenuButton colorScheme="blue" as={Button} rightIcon={<BiSolidChevronDown />}>
                            تعديل
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={UpdateImages.onOpen}>تعديل الصورة</MenuItem>
                            <MenuItem as={Link} to={`/agents/${agent._id}`}>تعديل المكتب</MenuItem>
                        </MenuList>
                    </Menu>
                    <Button onClick={confirmDelete.onOpen} colorScheme='red'>حذف</Button>
                </Td>
            </Tr>

            {/* Modal Confirm Delete */}
            <Modal isOpen={confirmDelete.isOpen} onClose={confirmDelete.onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>حذف المكتب</ModalHeader>
                    <ModalBody>
                        <h1 className="text-lg">هل انت متأكد من حذف المكتب, إذا قمت بحذفة لا يمكنك إسترداده مرة اخري.</h1>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='teal' ml={3}>
                            حذف
                        </Button>
                        <Button onClick={confirmDelete.onClose} variant='ghost'>إلغاء</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            {/* Modal Update Images */}
            <Modal isOpen={UpdateImages.isOpen} onClose={UpdateImages.onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>تعديل الصورة</ModalHeader>
                    <ModalBody>
                        <FormControl>
                            <FormLabel>الصورة</FormLabel>
                            <Input type='file' multiple />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='teal' ml={3}>
                            تعديل
                        </Button>
                        <Button onClick={UpdateImages.onClose} variant='ghost'>إلغاء</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    )
}

export default rowAgent