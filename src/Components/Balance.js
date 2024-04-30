import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../context/Globalstate';
import Transaction from './Transcation';
function Balance() {
  let amounts=[];
    const {transactions}=useContext(GlobalContext)
    const amount=transactions.map(transaction=>transaction.amount)
      const total = amount.reduce((acc,item)=>(acc,acc+=item),0);
      

    
  return (
    <>    <h4>Your Balance</h4>
    <h1>${total}.0</h1>
    </>

  )
}

export default Balance;