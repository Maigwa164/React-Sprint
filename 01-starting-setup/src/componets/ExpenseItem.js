import "./ExpenseItem.css";
function ExpenseItem() {
  const expenseDate = new Date(2024, 7, 25);
  const expenseTitle = "Matress";
  const expenseAmount = 10000;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">Ksh.{expenseAmount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
