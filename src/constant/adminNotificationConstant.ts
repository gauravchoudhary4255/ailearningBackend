export = Object.freeze({
  NOTIFICATION_CATEGORY_ARRAY: [
    'New Ticket',
    'New KYC',
    'Update KYC',
    'Block User',
    'Report User',
    'New Manually Withdrawal Request',
    'New Manually Desposit Cash Request'
  ],

  NOTIFICATION_CATEGORY_OBJ: {
    newTicket: 'New Ticket',
    newKYC: 'New KYC',
    updateKYC: 'Update KYC',
    blockUser: 'Block User',
    reportUser: 'Report User',
    newManuallyWithdrawalRequest: 'New Manually Withdrawal Request',
    newManuallyDepositCashRequest: 'New Manually Desposit Cash Request'
  },

  NOTIFICATION_TITLE: {
    newTicket: ':userName Raised the new ticket.',
    newKYC: ':username Created new KYC.',
    updateKYC: ':userName Update his KYC.',
    blockUser: ':userName Blocked the :blockedUserName.',
    reportUser: ':userName Reported the :reportedUserName.',
    newManuallyWithdrawalRequest: ':userName Raised the new withdrawal request.',
    newManuallyDepositCashRequest: ':userName Raised the new deposit cash request.'
  },

  KYC_TYPE_OBJ: {
    panCard: 'Pan Card',
    aadharCard: 'Aadhar Card'
  }
});
