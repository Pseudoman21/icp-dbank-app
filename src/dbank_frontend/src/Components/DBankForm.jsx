
import React, { useState, useEffect } from "react";
import { dbank_backend } from "../../../declarations/dbank_backend";
import logo from "../../assets/logo.png"
const DBankForm = () => {
  const [balance, setBalance] = React.useState(0);

  const [topUpAmount, setTopUpAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  async function checkBal() {
    setBalance(await dbank_backend.checkBalance())
  }

  async function topUp() {
    await dbank_backend.topUp(parseFloat(topUpAmount))
  }

  async function withraw() {
    await dbank_backend.withdraw(parseFloat(withdrawAmount))
  }

  async function transact() {
    if(topUpAmount !== 0 && topUpAmount !== "") {
      await topUp()
    }
    if(withdrawAmount !== 0 && withdrawAmount < balance && withdrawAmount !== "") {
      await withraw()
    }
    checkBal()
  }

  useEffect(() => {
    checkBal()
  }, []);

  setTimeout(function (){
    checkBal()
  },3000)

  return (
    <div>
     <div className="card">
      <img src={logo} />
      <p>Current Balance: ${balance.toFixed(2)}</p>
      <hr />
      <form>
        <div className='inp-area'>
          <label>Amount to Top Up</label>
          <input type='text' onChange={(e) => {
            setTopUpAmount(e.target.value)
          }} step="0.01" min="0" />
        </div>
        <div className='inp-area'>
          <label>Amount to Withdraw</label>
          <input type='text' onChange={(e) => {
            setWithdrawAmount(e.target.value)
          }} step="0.01" min="0" />
        </div>
        <button onClick={transact}>Finalise Transaction</button>
      </form>
     </div>
    </div>
  );
};

export default DBankForm
