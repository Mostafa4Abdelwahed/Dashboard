import { Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react"
import Container from "../../Components/Container"
import { useState } from "react"


const AddEstate = () => {
    const toast = useToast();
    const [agent, setAgent] = useState({
        name: "",
        image: "",
        email: "",
        phone: "",
        whatsapp: ""
    })

    const handleSubmit = () => {
        if (
            agent.name === "" || agent.image === "" ||
            agent.email === "" || agent.phone === "" || agent.whatsapp === ""
        ) {
            return toast({
                title: 'غير مكتلمة.',
                description: "برجاء ملئ جميع الحقول.",
                status: 'error',
                duration: 2000,
                position: "bottom-left"
            })
        }
    }

    return (
        <div>
            <Container>
                <header className="flex justify-between mt-5">
                    <h1 className="text-2xl font-bold">إضافة مكتب جديدة</h1>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7">
                    <FormControl>
                        <FormLabel>الإسم</FormLabel>
                        <Input value={agent.name} onChange={(e) => { setAgent({ ...agent, name: e.target.value }) }} variant="white" type='text' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>الصورة</FormLabel>
                        <Input onChange={(e) => { setAgent({ ...agent, image: e.target.files[0] }) }} className="bg-white" variant="white" type='file' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>الإيميل</FormLabel>
                        <Input value={agent.email} onChange={(e) => { setAgent({ ...agent, email: e.target.value }) }} variant="white" type='email' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>رقم الهاتف</FormLabel>
                        <Input value={agent.phone} onChange={(e) => { setAgent({ ...agent, phone: e.target.value }) }} variant="white" type='text' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>رقم الواتساب</FormLabel>
                        <Input value={agent.whatsapp} onChange={(e) => { setAgent({ ...agent, whatsapp: e.target.value }) }} variant="white" type='text' />
                    </FormControl>
                </div>

                <FormControl>
                    <Button onClick={handleSubmit} loadingText='جاري الإضافة' className="my-7 w-full" colorScheme='teal'>إضافة المكتب</Button>
                </FormControl>
            </Container>
        </div>
    )
}

export default AddEstate