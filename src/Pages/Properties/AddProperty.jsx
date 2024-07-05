import { useEffect, useState } from "react"
import { Button, FormControl, FormLabel, HStack, Input, InputGroup, InputLeftAddon, InputRightAddon, Radio, RadioGroup, Select, Textarea, useToast } from "@chakra-ui/react"
import SelectM from "react-select"
import Container from "../../Components/Container"
import data from "../../assets/currencies.json"


const AddProperty = () => {
    const [currencies, setCurrencies] = useState([]);
    const [optionsSelected, setOptionsSelected] = useState([]);
    const [estate, setEstate] = useState({
        title: "",
        adType: "",
        price: 0,
        currency: "",
        payType: "",
        city: "",
        images: [],
        estateType: "",
        parking: 0,
        toilet: 0,
        rooms: 0,
        landErea: 0,
        buildingErea: 0,
        content: "",
        agent: ""
    })
    const toast = useToast();

    const options = [
        { value: 'وايفاي', label: 'وايفاي' },
        { value: 'مسبح', label: 'مسبح' },
        { value: 'مركز اللياقة البدنية', label: 'مركز اللياقة البدنية' },
        { value: 'ساونا', label: 'ساونا' },
        { value: 'الموافق (الماء و الكهرباء)', label: 'ساونا' },
        { value: 'إطلالة بحرية', label: 'إطلالة بحرية' },
        { value: 'جاكوزي', label: 'جاكوزي' },
        { value: 'حراسة + استقبال', label: 'حراسة + استقبال' },
        { value: 'استقبال', label: 'استقبال' },
        { value: 'صالة رياضية', label: 'صالة رياضية' },
        { value: 'وقوف السيارات / المراب', label: 'وقوف السيارات / المراب' },
        { value: 'غرفة خادمة', label: 'غرفة خادمة' },
        { value: 'شرفة / تراس', label: 'شرفة / تراس' },
        { value: 'حديقة', label: 'حديقة' },
        { value: 'منطقة لعب اطفال', label: 'منطقة لعب اطفال' },
        { value: 'مغسلة', label: 'مغسلة' },
        { value: 'مفروش بشكل كامل', label: 'مفروش بشكل كامل' },
        { value: 'شبة مفروش', label: 'شبة مفروش' },
        { value: 'غير مفروش', label: 'غير مفروش' },
        { value: 'مطبخ مفتوح', label: 'مطبخ مفتوح' },
        { value: 'إطلالة شارع', label: 'إطلالة شارع' },
    ];

    const handleSubmit = ()=>{
        if (
            estate.adType === "" || estate.agent === "" ||
            estate.buildingErea === "" || estate.city === "" ||
            estate.content === "" || estate.currency === "" ||
            estate.estateType === "" || estate.images === "" ||
            estate.landErea === "" || estate.parking === "" ||
            estate.payType === "" || estate.price === "" ||
            estate.rooms === "" || estate.title === "" || estate.toilet === ""
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

    useEffect(() => {
        setCurrencies(data);
    }, [currencies])
  return (
    <div>
      <Container>
        <header className="flex justify-between mt-5">
          <h1 className="text-2xl font-bold">إضافة وحدة جديدة</h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7">
          <FormControl>
            <FormLabel>العنوان</FormLabel>
            <Input
              value={estate.title}
              onChange={(e) => {
                setEstate({ ...estate, title: e.target.value });
              }}
              variant="white"
              type="text"
            />
          </FormControl>
          <FormControl as="fieldset">
            <FormLabel as="legend">نوع الاعلان</FormLabel>
            <RadioGroup className="bg-white rounded p-2" defaultValue="Itachi">
              <HStack spacing="24px">
                <Radio
                  onChange={(e) => {
                    setEstate({ ...estate, adType: e.target.value });
                  }}
                  value="بيع"
                >
                  بيع
                </Radio>
                <Radio
                  onChange={(e) => {
                    setEstate({ ...estate, adType: e.target.value });
                  }}
                  value="تأجير"
                >
                  تأجير
                </Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel>سعر الوحدة</FormLabel>
            <InputGroup className="flex gap-3">
              <Input
                name="price"
                value={estate.price}
                onChange={(e) => {
                  setEstate({ ...estate, price: e.target.value });
                }}
                variant="white"
                type="number"
              />
              <Select
                value={estate.currency}
                onChange={(e) => {
                  setEstate({ ...estate, currency: e.target.value });
                }}
                variant="white"
              >
                <option selected disabled value="">
                  قم باختيار العملة
                </option>
                {currencies.map((cur) => {
                  return (
                    <option key={cur.symbol_native} value={cur.symbol_native}>
                      {cur.name_plural} ({cur.symbol_native})
                    </option>
                  );
                })}
              </Select>
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>نوع الدفع</FormLabel>
            <Select
              onChange={(e) => {
                setEstate({ ...estate, payType: e.target.value });
              }}
              variant="white"
            >
              <option selected disabled value="">
                قم باختيار نوع الدفع
              </option>
              <option value="شهريا">شهريا</option>
              <option value="سنويا">سنويا</option>
              <option value="دفعة واحدة">دفعة واحدة</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>المدينة</FormLabel>
            <Select
              onChange={(e) => {
                setEstate({ ...estate, city: e.target.value });
              }}
              variant="white"
            >
              <option disabled selected value="">
                قم باختيار المدينة
              </option>
              <option value="لندن">لندن</option>
              <option value="بيرلين">بيرلين</option>
              <option value="جدة">جدة</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>المميزات</FormLabel>
            <SelectM
              value={optionsSelected}
              onChange={setOptionsSelected}
              options={options}
              isMulti
            />
          </FormControl>
          <FormControl>
            <FormLabel>الصور</FormLabel>
            <Input
              value={estate.images}
              onChange={(e) => {
                setEstate({ ...estate, images: e.target.value });
              }}
              className="bg-white"
              variant="white"
              type="file"
              multiple
            />
          </FormControl>
          <FormControl>
            <FormLabel>نوع الوحدة</FormLabel>
            <Select
              value={estate.estateType}
              onChange={(e) => {
                setEstate({ ...estate, estateType: e.target.value });
              }}
              variant="white"
            >
              <option selected disabled value="">
                قم باختيار نوع الوحدة
              </option>
              <option value="فيلا">فيلا</option>
              <option value="شقة">شقة</option>
              <option value="قطعة أرض">قطعة أرض</option>
              <option value="بناية كاملة">بناية كاملة</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>التفاصيل</FormLabel>
            <div className="flex flex-col gap-3">
              <InputGroup>
                <InputRightAddon>باركينج</InputRightAddon>
                <Input
                  value={estate.parking}
                  onChange={(e) => {
                    setEstate({ ...estate, parking: e.target.value });
                  }}
                  variant="white"
                  type="number"
                />
              </InputGroup>
              <InputGroup>
                <InputRightAddon>حمام</InputRightAddon>
                <Input
                  value={estate.toilet}
                  onChange={(e) => {
                    setEstate({ ...estate, toilet: e.target.value });
                  }}
                  variant="white"
                  type="number"
                />
              </InputGroup>
              <InputGroup>
                <InputRightAddon>غرف النوم</InputRightAddon>
                <Input
                  value={estate.rooms}
                  onChange={(e) => {
                    setEstate({ ...estate, rooms: e.target.value });
                  }}
                  variant="white"
                  type="number"
                />
              </InputGroup>
              <InputGroup>
                <InputRightAddon>مساحة البناء</InputRightAddon>
                <Input
                  value={estate.buildingErea}
                  onChange={(e) => {
                    setEstate({ ...estate, buildingErea: e.target.value });
                  }}
                  variant="white"
                  type="number"
                />
                <InputLeftAddon>م2</InputLeftAddon>
              </InputGroup>
              <InputGroup>
                <InputRightAddon>مساحة الأرض</InputRightAddon>
                <Input
                  value={estate.landErea}
                  onChange={(e) => {
                    setEstate({ ...estate, landErea: e.target.value });
                  }}
                  variant="white"
                  type="number"
                />
                <InputLeftAddon>م2</InputLeftAddon>
              </InputGroup>
            </div>
          </FormControl>
          <FormControl>
            <FormLabel>المحتوي</FormLabel>
            <Textarea
              value={estate.content}
              onChange={(e) => {
                setEstate({ ...estate, content: e.target.value });
              }}
              rows={10}
              variant="white"
            />
          </FormControl>
        </div>
        <FormControl className="mt-4">
          <FormLabel>المكتب</FormLabel>
          <Select
            onChange={(e) => {
              setEstate({ ...estate, agent: e.target.value });
            }}
            variant="white"
          >
            <option selected disabled value="">
              قم باختيار المكتب
            </option>
            <option value="المستقبل للعقارات">المستقبل للعقارات</option>
            <option value="الشينجل للعقارات البوني">
              الشينجل للعقارات البوني
            </option>
          </Select>
        </FormControl>
        <FormControl>
          <Button
            onClick={handleSubmit}
            loadingText="جاري الإضافة"
            className="my-7 w-full"
            colorScheme="teal"
          >
            إضافة الوحدة
          </Button>
        </FormControl>
      </Container>
    </div>
  );
};

export default AddProperty;
