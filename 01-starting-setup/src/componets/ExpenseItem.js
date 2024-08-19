import "./ExpenseItem.css";
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>15th August 2024</div>
      <div className="expense-item__description">
        <h2>Mattress</h2>
        <div className="expense-item__price">Ksh.10,000</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
