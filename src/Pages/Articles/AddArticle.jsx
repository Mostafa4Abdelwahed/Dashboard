import { Button, FormControl, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react"
import Container from "../../Components/Container"
import { useState } from "react"


const AddArticle = () => {
    const toast = useToast();
    const [article, setArticle] = useState({
        title: "",
        image: "",
        content: ""
    })

    const handleSubmit = ()=>{
        if (article.content === "" || article.image === "" || article.title === "") {
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
                    <h1 className="text-2xl font-bold">إضافة مقال جديدة</h1>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7">
                    <FormControl>
                        <FormLabel>العنوان</FormLabel>
                        <Input value={article.title} onChange={(e)=>{setArticle({...article, title: e.target.value})}} variant="white" type='text' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>الصورة</FormLabel>
                        <Input className="bg-white" onChange={(e)=>{setArticle({...article, image: e.target.files[0]})}} variant="white" type='file' />
                    </FormControl>
                </div>
                    <FormControl className="mt-3">
                        <FormLabel>المحتوي</FormLabel>
                        <Textarea rows={15} value={article.content} onChange={(e)=>{setArticle({...article, content: e.target.value})}} variant="white" type='text' />
                    </FormControl>
                <FormControl>
                    <Button onClick={handleSubmit} loadingText='جاري الإضافة' className="my-7 w-full" colorScheme='teal'>إضافة المقال</Button>
                </FormControl>
            </Container>
        </div>
    )
}

export default AddArticle