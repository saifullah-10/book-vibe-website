// import { data } from "autoprefixer";
import { useContext } from "react";
import { ReadBook } from "../../Root";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

const PageToRead = () => {
  const [readData] = useContext(ReadBook);

  return (
    <div className="flex items-center justify-center w-full min-h-[calc(100vh-111px)]">
      <div className="w-full">
        {readData && readData.length > 0 ? (
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={readData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="bookName" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="totalPages" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center">No Data Please Read Book</p>
        )}
      </div>
    </div>
  );
};

export default PageToRead;
