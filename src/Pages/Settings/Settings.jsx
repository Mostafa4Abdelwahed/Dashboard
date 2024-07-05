import { useState } from "react"
import { Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react"
import Container from "../../Components/Container"


const Settings = () => {
    const toast = useToast();
    const [settings, setSettings] = useState({
        name: "دار الخير",
        logo: "http://localhost:5173/logo.png",
        contact: {
          adress: "الدوحة - قطر",
          phone: "01014426851",
          whatsapp: "01282313371",
          email: "mstfa.mohmd22@gmail.com",
          social: {
            facebook: "https://fb.com/sasa.des2",
            instagram: "",
            twitter: "",
          }
          },
        locationUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1803.8497815362093!2d51.504222319250744!3d25.2806901072089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45db45f30ca181%3A0x9326b5251230e22c!2sDar%20Alkhobara!5e0!3m2!1sen!2sqa!4v1678012815881!5m2!1sen!2sqa",
    })

    const handleSubmit = () => {
        if (
            settings.name === "" || settings.logo === "" ||
            settings.locationUrl === "" || settings.contact.adress === "" || settings.contact.email === "" ||
            settings.contact.phone === "" || settings.contact.whatsapp === ""
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
                    <h1 className="text-2xl font-bold">إعدادات الموقع</h1>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7">
                    <FormControl>
                        <FormLabel>الإسم</FormLabel>
                        <Input value={settings.name} onChange={(e) => { setSettings({...settings, name: e.target.value }) }} variant="white" type='text' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>اللوجو</FormLabel>
                        <Input className="bg-white" onChange={(e) => { setSettings({...settings, logo: e.target.files[0] }) }} variant="white" type='file' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>العنوان</FormLabel>
                        <Input value={settings.contact.adress} onChange={(e) => { setSettings({...settings, contact: {adress: e.target.value} }) }} variant="white" type='text' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>رقم الهاتف</FormLabel>
                        <Input value={settings.contact.phone} onChange={(e) => { setSettings({...settings, contact:{ phone:  e.target.value } }) }} variant="white" type='text' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>رقم الواتساب</FormLabel>
                        <Input value={settings.contact.whatsapp} onChange={(e) => { setSettings({...settings, contact: {whatsapp: e.target.value} }) }} variant="white" type='text' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>الايميل</FormLabel>
                        <Input value={settings.contact.email} onChange={(e) => { setSettings({...settings, contact: {email: e.target.value} }) }} variant="white" type='text' />
                    </FormControl>
                </div>
                <FormControl className="mt-3">
                        <FormLabel>اللوكيشن</FormLabel>
                        <Input value={settings.locationUrl} onChange={(e) => { setSettings({...settings, locationUrl: e.target.value }) }} variant="white" type='text' />
                    </FormControl>
                <FormControl>
                    <Button onClick={handleSubmit} loadingText='جاري التحديث' className="my-7 w-full" colorScheme='teal'>تحديث</Button>
                </FormControl>
            </Container>
        </div>
    )
}

export default Settings