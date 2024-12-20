function App() {
    const [colCount, setColCount] = React.useState(0);
  
    // تابع برای تولید جدول
    const generateTable = () => {
      if (colCount < 1) return null; // رندر نشدن جدول برای مقادیر کمتر از 1
      const rows = [];
      const totalNumbers = 10000; // کاهش تعداد اعداد
  
      for (let i = 0; i < Math.ceil(totalNumbers / colCount); i++) {
        const cols = [];
        for (let j = 0; j < colCount; j++) {
          const number = i * colCount + j + 1;
          if (number > totalNumbers) break;
          cols.push(
            <td key={number} className="border px-2 py-1 text-center">
              {number}
            </td>
          );
        }
        rows.push(<tr key={i}>{cols}</tr>);
      }
  
      return rows;
    };
  
    return (
      <div className={"flex flex-col items-center mt-10"}>
        <div className="mb-4">
          <label
            htmlFor="number-input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Select number of columns:
          </label>
          <input
            type="number"
            id="number-input"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter number of columns"
            value={colCount}
            onChange={(e) => {
              const value = Math.max(1, Math.min(100, parseInt(e.target.value || 0)));
              setColCount(value);
            }}
          />
        </div>
        <div className="numbers overflow-auto">
          <table className="border-collapse border border-gray-400 w-full">
            <tbody>{generateTable()}</tbody>
          </table>
        </div>
      </div>
    );
  }
  
  // رندر کردن App
  ReactDOM.render(<App />, document.getElementById("root"));
  