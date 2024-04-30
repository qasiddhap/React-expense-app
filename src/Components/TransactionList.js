import React, { useContext } from 'react'
import { GlobalContext } from '../context/Globalstate'
import Transaction from './Transcation';
function TransactionList() {
  const {transactions} =useContext(GlobalContext);

  return (
    <>
    <h3>History</h3>
      <ul  className="list">
         {transactions.map(
          (transaction)=> 
          <Transaction transaction={transaction} key={transaction.id} ></Transaction>
       )}
        
      </ul>
      </>
    )
}

export default TransactionList