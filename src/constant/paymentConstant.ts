export = Object.freeze({
  KYC_STATUS: {
    pending: 'pending',
    approve: 'approve',
    reject: 'reject'
  },

  KYC_STATUS_ARRAY: ['pending', 'approve', 'reject'],

  REJECT_REASON: 'Rejected by admin',
  RAZORPAY_WEBHOOK_SECRET: process.env.RAZORPAY_WEBHOOK_SECRET || 'Naresh@123',
  RAZORPAY_KEY: process.env.RAZORPAY_KEY || 'rzp_test_qZfDewTfxcIxvb',
  RAZORPAY_SECRET: process.env.RAZORPAY_SECRET || 'kxw6DPXmk6ITYmYQSAR1ToPK',
  RAZORPAY_ACCOUNT_NUMBER: process.env.RAZORPAY_ACCOUNT_NUMBER || '2323230034578000',
  RAZORPAY_PURPOSE: 'payout',
  RAZORPAY_PAYOUT_MODE_IMPS: 'IMPS',
  RAZORPAY_PAYOUT_MODE_UPI: 'UPI',
  RAZORPAY_PAYOUT_NARRATION: 'MGP Withdraw',

  PAYOUT_METHOD_ARRAY: ['bank_account', 'vpa'],

  PAYOUT_STATUS_ARRAY: ['processing', 'processed', 'cancelled', 'reversed'],

  PAYOUT_STATUS: {
    processing: 'processing',
    processed: 'processed',
    cancelled: 'cancelled',
    reversed: 'reversed'
  },

  PAYOUT_METHOD: {
    bank_account: 'bank_account',
    vpa: 'vpa'
  },

  APPROVE_STATUS: {
    pending: 'pending',
    approve: 'approve',
    reject: 'reject',
    refund: 'refund'
  },

  APPROVE_STATUS_ARRAY: ['pending', 'approve', 'reject'],

  WITHDRAWAL_TYPE: {
    user: 'user',
    publisher: 'publisher'
  },

  WITHDRAWAL_TYPE_ARRAY: ['user', 'publisher'],

  MINIMUM_WITHDRAWAL_AMOUNT: 5,

  PAYMENT_TYPE_ARRAY: ['Deposit', 'Withdrawals', 'Refund', 'Reject Deposit Cash'],

  PAYMENT_TYPE: {
    deposit: 'Deposit',
    withdrawals: 'Withdrawals',
    refund: 'Refund',
    rejectDepositCash: 'Reject Deposit Cash'
  },

  PAYMENT_STATUS: {
    processing: 'processing',
    processed: 'processed',
    cancelled: 'cancelled',
    reversed: 'reversed'
  },

  PAYMENT_STATUS_ARRAY: ['processing', 'processed', 'cancelled', 'reversed'],

  PROCESSING_FEE_COUNT_ARRAY: ['processed'],

  INR_CURRENCY: 'INR',

  RAZORPAY_CONTACT_TYPES: {
    customer: 'customer'
  },

  RAZORPAY_ACCOUNT_TYPE: {
    bank_account: 'bank_account',
    vpa: 'vpa'
  },

  PAYMENT_TITLE_DESCRIPTION: {
    DEPOSIT_CASH: {
      paymentStatus: "Deposit Cash",
      title: "Add Cash",
      description: "Credited to Deposit Cash",
    },

    WITHDRAWALS_CASH: {
      paymentStatus: "Withdraw Cash",
      title: "Withdrawal Cash",
      description: "Debited from Winning Cash",
    },

    REFUND_WITHDRAWALS_CASH: {
      paymentStatus: "Refund Winning Cash",
      title: "Refund Withdrawal Cash",
      description: "Credited to Winning Cash",
    },

    REJECT_DEPOSIT_CASH: {
      paymentStatus: "Reject Deposit Cash",
      title: "Reject Deposit Cash",
      description: "Deposit Cash Rejected",
    },
  },

  WITHDRAWAL_PAYMENT_GATEWAY_OBJ: {
    manually: 'Manually',
    razorpay: 'Razorpay',
  },

  TRANSACTION_TYPE_ARRAY: ["credited", "debited"],

  TRANSACTION_TYPE_OBJ: {
    credit: "credited",
    debit: "debited",
  },

  TRANSACTION_INTO_ARRAY: ["DepositCash", "WinCash", "Bonus"],

  TRANSACTION_INTO_OBJ: {
    Winning: "WinCash",
    Deposit: "DepositCash",
    Bonus: "Bonus"
  },

  DEPOSIT_PAYMENT_GATEWAY_OBJ: {
    manually: 'Manually',
    phonePay: 'PhonePay',
    razorpay: 'Razorpay'
  },

  PHONE_PE_PAYMENT_TYPE_ARRAY: ["UPI", "Card"],

  PHONE_PE_PAYMENT_TYPE: {
    upi: 'UPI',
    card: 'Card'
  }
});