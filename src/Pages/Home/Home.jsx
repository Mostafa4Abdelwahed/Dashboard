import Container from "./../../Components/Container"

const Home = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-5">
          <div className="bg-teal-600 text-white flex flex-col items-center justify-center py-6">
            <h1 className="text-5xl">150</h1>
            <span>عدد الوحدات</span>
          </div>
          <div className="bg-teal-600 text-white flex flex-col items-center justify-center py-6">
            <h1 className="text-5xl">3</h1>
            <span>عدد المستخدمين</span>
          </div>
          <div className="bg-teal-600 text-white flex flex-col items-center justify-center py-6">
            <h1 className="text-5xl">16</h1>
            <span>عدد المقالات</span>
          </div>
        </div>
        
      </Container>
    </div>
  );
};

export default Home;
