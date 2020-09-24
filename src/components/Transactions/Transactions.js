import React from 'react';

const Transaction = () => {
    return  (
        <div className="pa1" >
  <div className="overflow-auto" >
  <fieldset id="tickets table" className="bn">
  <legend className="fw8 mb2">Client Transactions</legend>
    <table className="f5 w-100 mw8 ml6 center" cellSpacing="0">
      <thead>
        <tr className="stripe-dark">
          <th className="fw8 pa3 bg-white"><input className="" type="checkbox"/></th>
          <th className="fw8 pa3 bg-white">ID</th>
          <th className="fw8 pa3 bg-white">Name</th>
          <th className="fw8 pa3 bg-white">Credit</th>
          <th className="fw8 pa3 bg-white">Debit</th>
          <th className="fw8 pa3 bg-white">Balance</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
        <tr className="stripe-dark">
        <td className="pa3"><input className="" type="checkbox"/></td>
          <td className="pa3">1001</td>
          <td className="pa3">Gabriel Dunn</td>
          <td className="pa3">5000 Rwf</td>
          <td className="pa3">50,000 Rwf</td>
          <td className="pa3">130,000 Rwf</td>
        </tr>
        <tr className="stripe-dark">
        <td className="pa3"><input className="" type="checkbox"/></td>
        <td className="pa3">1002</td>
        <td className="pa3">William Tell</td>
        <td className="pa3">6000 Rwf</td>
        <td className="pa3">30,000 Rwf</td>
        <td className="pa3">170,000 Rwf</td>
        </tr>
        <tr className="stripe-dark">
        <td className="pa3"><input className="" type="checkbox"/></td>
        <td className="pa3">1003</td>
        <td className="pa3">Richard Sloan</td>
        <td className="pa3">9000 Rwf</td>
        <td className="pa3">10,000 Rwf</td>
        <td className="pa3">240,000 Rwf</td>
        </tr>
        <tr className="stripe-dark">
        <td className="pa3"><input className="" type="checkbox"/></td>
        <td className="pa3">1004</td>
        <td className="pa3">Tiffany Feign</td>
        <td className="pa3">2000 Rwf</td>
        <td className="pa3">90,000 Rwf</td>
        <td className="pa3">530,000 Rwf</td>
        </tr>
        <tr className="stripe-dark">
        <td className="pa3"><input className="" type="checkbox"/></td>
        <td className="pa3">1005</td>
        <td className="pa3">Paul Finlay</td>
        <td className="pa3">40000 Rwf</td>
        <td className="pa3">6000 Rwf</td>
        <td className="pa3">144,000 Rwf</td>
        </tr>
        <tr className="stripe-dark">
        <td className="pa3"><input className="" type="checkbox"/></td>
        <td className="pa3">1006</td>
        <td className="pa3">Angel Miller</td>
        <td className="pa3">67,000 Rwf</td>
        <td className="pa3">25,000 Rwf</td>
        <td className="pa3">930,000 Rwf</td>
      </tr>
      <tr className="stripe-dark">
      <td className="pa3"><input className="" type="checkbox"/></td>
      <td className="pa3">1007</td>
      <td className="pa3">Hassan Finch</td>
      <td className="pa3">50,000 Rwf</td>
      <td className="pa3">30,000 Rwf</td>
      <td className="pa3">610,000 Rwf</td>
    </tr>
    <tr className="stripe-dark">
    <td className="pa3"><input className="" type="checkbox"/></td>
    <td className="pa3">1008</td>
    <td className="pa3">Anthony Hill</td>
    <td className="pa3">56,000 Rwf</td>
    <td className="pa3">68,000 Rwf</td>
    <td className="pa3">567,000 Rwf</td>
  </tr>
  <tr className="stripe-dark">
  <td className="pa3"><input className="" type="checkbox"/></td>
  <td className="pa3">1009</td>
  <td className="pa3">Leon Gerber</td>
  <td className="pa3">11,000 Rwf</td>
  <td className="pa3">4000 Rwf</td>
  <td className="pa3">170,000 Rwf</td>
</tr>
<tr className="stripe-dark">
<td className="pa3"><input className="" type="checkbox"/></td>
<td className="pa3">1001</td>
<td className="pa3">Jim Gold</td>
<td className="pa3">8000 Rwf</td>
<td className="pa3">70,000 Rwf</td>
<td className="pa3">2,030,000 Rwf</td>
</tr>
      </tbody>
    </table>
    </fieldset>
  </div>
</div>
    )
}

export default Transaction;