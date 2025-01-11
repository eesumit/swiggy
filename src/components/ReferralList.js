// ReferralList.js
import React from 'react';

function ReferralList({ referrals }) {
  return (
    <div>
      <h2>Your Referrals</h2>
      <ul>
        {referrals.map((referral, index) => (
          <li key={index}>
            {referral.email} - {referral.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReferralList;
