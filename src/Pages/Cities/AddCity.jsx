import { useEffect, useState } from "react"
import { Button, FormControl, FormLabel, Input, Select, useToast } from "@chakra-ui/react"
import Container from "../../Components/Container"
import data from "../../assets/currencies.json"


const AddCity = () => {
    const [countries, setCountries] = useState([]);
    const [city, setCity] = useState({
        name: "",
        image: "",
        country: "",
    })
    const toast = useToast();

    const handleSubmit = () => {
        if (city.country === "" || city.image === "" || city.name === "") {
            return toast({
                title: 'غير مكتلمة.',
                description: "برجاء ملئ جميع الحقول.",
                status: 'error',
                duration: 2000,
                position: "bottom-left"
            })
        }
    }

    useEffect(() => {
        setCountries(data);
        console.log(countries);
    }, [countries])

    return (
        <div>
            <Container>
                <header className="flex justify-between mt-5">
                    <h1 className="text-2xl font-bold">إضافة مدينة جديدة</h1>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7">
                    <FormControl>
                        <FormLabel>الإسم</FormLabel>
                        <Input value={city.name} onChange={(e) => { setCity({ ...city, name: e.target.value }) }} variant="white" type='text' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>البلد</FormLabel>
                        <Select variant='white'>
                            <option selected disabled value="">قم باختيار البلد</option>
                            {
                                countries.map((country)=>{
                                    return (
                                        <option key={countries.name} value={country.name}>{country.name}</option>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                </div>
                    <FormControl className="mt-3">
                        <FormLabel>الصورة</FormLabel>
                        <Input className="bg-white" onChange={(e) => { setCity({ ...city, image: e.target.files[0] }) }} variant="white" type='file' />
                    </FormControl>
                <FormControl>
                    <Button onClick={handleSubmit} loadingText='جاري الإضافة' className="my-7 w-full" colorScheme='teal'>إضافة المدينة</Button>
                </FormControl>
            </Container>
        </div>
    )
}

export default AddCity