import ReactApexChart from "react-apexcharts";
import Container from "./../../Components/Container";

const Home = () => {
  const series = [{
    name: 'Series 1',
    data: [80, 50, 30, 40, 100, 20],
  }];

  const options = {
    chart: {
      height: 350,
      type: 'radar',
    },
    title: {
      text: 'Basic Radar Chart'
    },
    yaxis: {
      stepSize: 20
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June']
    }
  }


  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-5">
          <div className="bg-teal-600 rounded-md text-white flex flex-col items-center justify-center py-6">
            <h1 className="text-5xl">150</h1>
            <span>عدد الوحدات</span>
          </div>
          <div className="bg-teal-600 rounded-md text-white flex flex-col items-center justify-center py-6">
            <h1 className="text-5xl">3</h1>
            <span>عدد المستخدمين</span>
          </div>
          <div className="bg-teal-600 rounded-md text-white flex flex-col items-center justify-center py-6">
            <h1 className="text-5xl">16</h1>
            <span>عدد المقالات</span>
          </div>
        </div>

          <div className="p-3 bg-white rounded-lg mt-7">
            <div id="chart">
              <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={350}
              />
            </div>
          </div>
      </Container>
    </div>
  );
};

export default Home;
