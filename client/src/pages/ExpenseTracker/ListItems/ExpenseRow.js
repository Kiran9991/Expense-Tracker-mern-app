import symbols from "../../../images/Symbol";
import Row from "../../../components/Row";

const ExpenseRow = ({ expense, amount, description, onDelete }) => {
  return (
    <Row>
      <div
        className="border
        w-[600px] p-1 m-1
        justify-between flex h-full"
      >
        <div className="px-10 flex ">
            <div className="w-36">{expense.slice(0,16)}...  </div>
            <div className="w-32">Rs.{amount}</div>
            <div className="w-32"> {description.slice(0,10)}...</div>
        </div>
        <div className="flex">
          <button
            className="bg-green-200 px-2
               rounded-md flex gap-1 mx-2
                hover:bg-green-600 hover:text-white"
          >
            <img
              src={symbols.edit}
              className="h-4 m-1 
                hover:filter hover:invert"
              alt="edit"
            />
          </button>
          <button
            className="bg-red-200 px-2 
              rounded-md hover:bg-red-600
               hover:text-white flex gap-1 mx-2"
            onClick={onDelete}
          >
            <img
              src={symbols.delete}
              className="h-4 m-1 filter hover:invert"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </Row>
  );
};

export default ExpenseRow;
