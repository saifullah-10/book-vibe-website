import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { ChartData } from "../../Root";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
let data = [];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
TriangleBar.propTypes = {
  fill: PropTypes.any,
  x: PropTypes.any,
  y: PropTypes.any,
  width: PropTypes.any,
  height: PropTypes.any,
};
const PageToRead = () => {
  const getFromLocalStorage = localStorage.getItem("bookList");
  const convertedData = JSON.parse(getFromLocalStorage);

  const [chart, setChart] = useContext(ChartData);
  useEffect(() => {
    setChart(convertedData);
  }, []);
  data = chart;
  return (
    <>
      {data ? (
        <ResponsiveContainer width={"100%"} height={500}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Bar
              dataKey="totalPages"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <>
          <div className="flex justify-center min-h-[calc(100vh-111px)] items-center">
            <div>
              <p className="text-xl font-medium">You Do not Read Any Book</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default PageToRead;
