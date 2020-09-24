import React from 'react';

const Table = () => {
    return  (
        <div className="pa1" >
  <div className="overflow-auto" >
  <fieldset id="tickets table" className="bn">
  <legend className="fw8 mb2">Tickets requiring your attention(10)</legend>
    <table className="f5 w-100 mw8 ml6 center" cellSpacing="0">
      <thead>
        <tr className="stripe-dark">
          <th className="fw8 pa3 bg-white"><input className="" type="checkbox"/></th>
          <th className="fw8 pa3 bg-white">Ticket ID</th>
          <th className="fw8 pa3 bg-white">Subject</th>
          <th className="fw8 pa3 bg-white">Requester</th>
          <th className="fw8 pa3 bg-white">Request Date</th>
          <th className="fw8 pa3 bg-white">Group</th>
          <th className="fw8 pa3 bg-white">Assignee</th>
          <th className="fw8 pa3 bg-white">Pending</th>
          <th className="fw8 pa3 bg-white">Resolved</th>
          
        </tr>
      </thead>
      <tbody className="lh-copy">
        <tr className="stripe-dark">
        <td className="pa3"><input className="" type="checkbox"/></td>
          <td className="pa3">#12</td>
          <td className="pa3">Trouble logging in</td>
          <td className="pa3">Hassan Finch</td>
          <td className="pa3">Sep 15</td>
          <td className="pa3">Support</td>
          <td className="pa3">Robert</td>
          <td className="pa3">n/a</td>
          <td className="pa3">n/a</td>
        </tr>
        <tr className="stripe-dark">
        <td className="pa3"><input className="" type="checkbox"/></td>
        <td className="pa3">#11</td>
        <td className="pa3">Address Change</td>
        <td className="pa3">Holly Mason</td>
        <td className="pa3">Sep 13</td>
        <td className="pa3">Support</td>
        <td className="pa3">Robert</td>
        <td className="pa3">n/a</td>
        <td className="pa3">n/a</td>
        </tr>
        <tr className="stripe-dark">
        <td className="pa3"><input className="" type="checkbox"/></td>
        <td className="pa3">#10</td>
        <td className="pa3">I need assistance</td>
        <td className="pa3">Anthony Hill</td>
        <td className="pa3">Sep 12</td>
        <td className="pa3">Support</td>
        <td className="pa3">Robert</td>
        <td className="pa3">n/a</td>
          <td className="pa3">n/a</td>
        </tr>
        <tr className="stripe-dark">
        <td className="pa3"><input className="" type="checkbox"/></td>
        <td className="pa3">#9</td>
        <td className="pa3">Password reset</td>
        <td className="pa3">Faustin Kurnd</td>
        <td className="pa3">Sep 11</td>
        <td className="pa3">Support</td>
        <td className="pa3">Robert</td>
        <td className="pa3">n/a</td>
          <td className="pa3">n/a</td>
        </tr>
        <tr className="stripe-dark">
        <td className="pa3"><input className="" type="checkbox"/></td>
          <td className="pa3">#8</td>
          <td className="pa3">Forgot password</td>
          <td className="pa3">Sarah Burns</td>
          <td className="pa3">Sep 10</td>
          <td className="pa3">Password Reset</td>
          <td className="pa3">Charles</td>
          <td className="pa3">n/a</td>
          <td className="pa3">n/a</td>
        </tr>
        <tr className="stripe-dark">
        <td className="pa3"><input className="" type="checkbox"/></td>
         <td className="pa3">#7</td>
          <td className="pa3">Pin Reset</td>
          <td className="pa3">Harry Styles</td>
          <td className="pa3">Sep 9</td>
          <td className="pa3">Password Reset</td>
          <td className="pa3">Charles</td>
          <td className="pa3">n/a</td>
          <td className="pa3">n/a</td>
      </tr>
      <tr className="stripe-dark">
      <td className="pa3"><input className="" type="checkbox"/></td>
      <td className="pa3">#6</td>
      <td className="pa3">Can't log in</td>
      <td className="pa3">Angela Fuehn</td>
      <td className="pa3">Sep 8</td>
      <td className="pa3">Support</td>
      <td className="pa3">Robert</td>
      <td className="pa3">n/a</td>
       <td className="pa3">n/a</td>
    </tr>
    <tr className="stripe-dark">
    <td className="pa3"><input className="" type="checkbox"/></td>
    <td className="pa3">#5</td>
    <td className="pa3">Need a refund</td>
    <td className="pa3">Patrick Smith</td>
    <td className="pa3">Sep 7</td>
    <td className="pa3">Finance</td>
    <td className="pa3">Sandy</td>
    <td className="pa3">n/a</td>
    <td className="pa3">n/a</td>
  </tr>
  <tr className="stripe-dark">
  <td className="pa3"><input className="" type="checkbox"/></td>
  <td className="pa3">#4</td>
  <td className="pa3">Hello there</td>
  <td className="pa3">Derrick Mat</td>
  <td className="pa3">Sep 6</td>
  <td className="pa3">Support</td>
  <td className="pa3">Robert</td>
  <td className="pa3">n/a</td>
  <td className="pa3">n/a</td>
</tr>
<tr className="stripe-dark">
<td className="pa3"><input className="" type="checkbox"/></td>
<td className="pa3">#3</td>
<td className="pa3">Can't log in</td>
<td className="pa3">Yvonne Hill</td>
<td className="pa3">Sep 8</td>
<td className="pa3">Password Reset</td>
<td className="pa3">Robert</td>
<td className="pa3">n/a</td>
<td className="pa3">n/a</td>
</tr>
      </tbody>
    </table>
    </fieldset>
  </div>
</div>
    )
}

export default Table;