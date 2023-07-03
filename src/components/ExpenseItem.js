import "./ExpenseItem.css";

function ExpenseItem(){
    return (
        <div className="expense-item">
            <div >June 30th 2023</div>
            <div className="expense-item__description">
                <h2>Car insurance</h2>
                <div className="expense-item__price">INR5000</div>
            </div>
        </div>
    );
}

export default ExpenseItem;