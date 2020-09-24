import React from 'react';

const Clients = () => {
    return  (
        <div className="pa1" >
  <div className="overflow-auto" >
  <fieldset id="tickets table" className="bn">
  <legend className="fw8 mb2">KYC Data</legend>
    <table className="f5 w-100 mw8 ml6 center" cellSpacing="0">
      <thead>
        <tr className="stripe-dark">
          <th className="fw8 pa3 bg-white"><input className="" type="checkbox"/></th>
          <th className="fw8 pa3 bg-white">Client ID</th>
          <th className="fw8 pa3 bg-white">First Name</th>
          <th className="fw8 pa3 bg-white">Last Name</th>
          <th className="fw8 pa3 bg-white">Information</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
        <tr className="stripe-dark">
        <td className="pa3"><input className="" type="checkbox"/></td>
          <td className="pa3">123234</td>
          <td className="pa3">Gabriel</td>
          <td className="pa3">Dunn</td>
          <td className="pa3">PDF file</td>
        </tr>
        <tr className="stripe-dark">
        <td className="pa3"><input className="" type="checkbox"/></td>
        <td className="pa3">123234</td>
        <td className="pa3">William</td>
        <td className="pa3">Tell</td>
        <td className="pa3">PDF file</td>
        </tr>
        <tr className="stripe-dark">
        <td className="pa3"><input className="" type="checkbox"/></td>
        <td className="pa3">1232314</td>
        <td className="pa3">Richard</td>
        <td className="pa3">Sloan</td>
        <td className="pa3">PDF file</td>
        </tr>
        <tr className="stripe-dark">
        <td className="pa3"><input className="" type="checkbox"/></td>
        <td className="pa3">45645646</td>
        <td className="pa3">Tiffany</td>
        <td className="pa3">Feign</td>
        <td className="pa3">PDF file</td>
        </tr>
        <tr className="stripe-dark">
        <td className="pa3"><input className="" type="checkbox"/></td>
        <td className="pa3">123234</td>
        <td className="pa3">Paul</td>
        <td className="pa3">Finlay</td>
        <td className="pa3">PDF file</td>
        </tr>
        <tr className="stripe-dark">
        <td className="pa3"><input className="" type="checkbox"/></td>
        <td className="pa3">2342344</td>
        <td className="pa3">Angel</td>
        <td className="pa3">Miller</td>
        <td className="pa3">PDF file</td>
      </tr>
      <tr className="stripe-dark">
      <td className="pa3"><input className="" type="checkbox"/></td>
      <td className="pa3">2342345</td>
      <td className="pa3">Hassan</td>
      <td className="pa3">Finch</td>
      <td className="pa3">PDF file</td>
    </tr>
    <tr className="stripe-dark">
    <td className="pa3"><input className="" type="checkbox"/></td>
    <td className="pa3">123234</td>
    <td className="pa3">Anthony</td>
    <td className="pa3">Hill</td>
    <td className="pa3">PDF file</td>
  </tr>
  <tr className="stripe-dark">
  <td className="pa3"><input className="" type="checkbox"/></td>
  <td className="pa3">1232342</td>
  <td className="pa3">Leon</td>
  <td className="pa3">Gerber</td>
  <td className="pa3">PDF file</td>
</tr>
<tr className="stripe-dark">
<td className="pa3"><input className="" type="checkbox"/></td>
<td className="pa3">1234567</td>
<td className="pa3">Jim</td>
<td className="pa3">Gold</td>
<td className="pa3">PDF file</td>
</tr>
      </tbody>
    </table>
    </fieldset>
  </div>
</div>
    )
}

export default Clients;