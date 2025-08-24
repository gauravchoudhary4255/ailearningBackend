export = Object.freeze({

  TRANSACTION_STATUS: {
    bonus: 'Bonus',
    cash: 'Cash',
    adminAddBonus: 'Bonus',
    adminAddDeposits: 'Cash',
    entryFees: 'Entry Fees',
    win: 'Win',
    dailyWheelBonus: 'DailyWheelBonus',
    userReferBonus: 'Bonus added for refer a friend',
    refUserBonus: 'Bonus added for your friend refer you',
    MonthlyLeaderboardBonus: 'MonthlyLeaderboardBonus',
    MonthlyReferAndEarnLeaderboardBonus: 'MonthlyReferAndEarnLeaderboardBonus',
    signUpCash: 'Signup Cash',
    signUpBonus: 'Signup Bonus',
    offerBonus: 'Offer Bonus'
  },

  TRANSACTION_TITLE: {
    signupCash: "Signup cash",
    signupBonus: "Signup bonus",
    promoBonusCashExpiry: "Promo bonus cash expiry",
    couponsCashbackRewards: "Coupons cashback rewards",
  },

  TRANSACTION_TITLE_DESCRIPTION: {
    SIGNUP_BONUS: {
      status: "Signup Bonus",
      title: "Signup Bonus",
      description: "Credited to Bonus Cash",
    },

    SIGNUP_CASH: {
      status: "Signup Cash",
      title: "Signup Cash",
      description: "Credited to Deposit Cash",
    },

    ENTRY_FEES: {
      status: "Entry Fees",
      title: ":gameName :gameModeName",
      description: "",
    },

    WIN: {
      status: "Win",
      title: ":gameName :gameModeName Win",
      description: "Credited to Winning Cash",
    },

    BONUS_WIN: {
      status: "Win",
      title: ":gameName :gameModeName Win",
      description: "Credited to BONUS",
    },

    LOSS: {
      status: "Loss",
      title: ":gameName :gameModeName Refund Amount",
      description: "Refund Credited +₹:refundAmount to Deposit Cash and Loss amount is -₹:lossAmount",
    },

    ADD_CASH_BONUS: {     // offer and coupon code applied bonus
      status: "Add Cash Bonus",
      title: "Add Cash Bonus",
      description: "Credited to Bonus Cash",
    },

    ADMIN_ADD_BONUS: {
      status: "Admin Add Bonus",
      title: "Bonus Added By MGP",
      description: "Credited to Bonus Cash",
    },

    ADMIN_ADD_CASH: {
      status: "Admin Add Deposit Cash",
      title: "Deposit Added By MGP",
      description: "Credited to Deposit Cash",
    },

    ADMIN_ADD_WIN_CASH: {
      status: "Admin Add win Cash",
      title: "Winning Cash Added By MGP",
      description: "Credited to Winning Cash",
    },

    DAILY_WHEEL_BONUS: {
      status: "Daily Wheel Bonus",
      title: ":Day Daily Spin",
      description: "Credited to :type Cash",
    },

    GST_BONUS: {
      status: "GST Bonus",
      title: "GST Bonus",
      description: "Credited to Bonus Cash",
    },

    TDS_BONUS: {
      status: "TDS Bonus",
      title: "TDS Bonus",
      description: "Credited to Bonus Cash",
    },

    CONVERT_AMOUNT: {
      status: "Convert Amount",
      title: "Convert Amount",
      description: "Debited from :type Cash",
    },

    REFER_BONUS: {      // if A refer to B then this bonus credited in to A 
      status: "Refer Bonus",
      title: "Refer Bonus",
      description: "Credited to Bonus Cash",
    },

    REFERRAl_BONUS: {      // if A refer to B then this bonus credited in to B 
      status: "Referral Bonus",
      title: "Referral Bonus",
      description: "Credited to Bonus Cash",
    },

    REFERRAL_BOOSTER: {      // if A refer to B then this bonus credited in to B and b has referral booster as daily spin bonus
      status: "Referral Booster",
      title: ":valueX Referral Bonus",
      description: "Credited to Bonus Cash",
    },

    MONTHLY_LEADERBOARD_BONUS: {
      status: "Monthly Leaderboard Bonus",
      title: "Monthly Leaderboard Bonus",
      description: "Credited to :type Cash",
    },

    MONTHLY_REFER_AND_EARN_LEADERBOARD: {
      status: "Monthly Refer And Earn Leaderboard Bonus",
      title: "Monthly Refer And Earn Leaderboard Bonus",
      description: "Credited to :type Cash",
    },

    GAME_WISE_WALLET: {
      status: 'Game Wise Wallet',
      title: 'Game wise wallet',
      description: 'Credited to Game wise wallet'
    },

    REFUND_ENTRY_FEES: {
      status: "Refund Entry Fees",
      title: ":gameName :gameModeName",
      description: "",
    },

    EXPIRE_USER_BONUS: {
      status: "Expire unused bonus",
      title: "Expire unused bonus",
      description: "Debited from :type Cash",
    },

    // only used in poker game
    REFUND_REMAINING_AMOUNT: { // if user win and there are any remaining amount then credit into user wallet 
      status: "Refund Remaining Amount",
      title: ":gameName :gameModeName",
      description: "Refund Credited : ",
    },

    CALCULATE_TDS_ON_END_OF_FY: {
      status: "TDS at the end of the financial year",
      title: "TDS at the end of the financial year",
      description: "TDS at the end of the financial year",
    },
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

  BONUS_NOT_INTO_OVERALL_BONUS: ["Win", "Loss", "Tie", "Refund Remaining Amount"],

  MATCH_FOR_GET_BOUNS_RECODES: [
    "Signup Bonus",
    "Signup Cash",
    "Admin Add Deposit Cash",
    "Admin Add Bonus",
    "Admin Add Cash",
    "Admin Add win Cash",
    "Daily Wheel Bonus",
    "Refer Bonus",
    "Referral Bonus",
    "Monthly Leaderboard Bonus",
    "Monthly Refer And Earn Leaderboard Bonus",
  ],

  GAME_STATUS: {
    pending: 'Pending',
    completed: 'Completed',
    refunded: 'Refunded'
  },

  TOURNAMENT_STATUS: {
    registered: 'Registered',
    joinedTable: 'JoinedTable',
    gameStart: 'GameStart',
    completed: 'Completed',
    refunded: 'Refunded'
  },

  TOURNAMENT_STATUS_ARRAY: [
    'Registered',
    'JoinedTable',
    'GameStart',
    'Completed',
    'Refunded'
  ]
});
