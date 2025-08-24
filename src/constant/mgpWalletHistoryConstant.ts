export = Object.freeze({

    PAYMENT_TYPE_ARRAY: ['Credited', 'Debited'],

    PAYMENT_TYPE: {
        credited: 'Credited',
        debited: 'Debited'
    },

    DEPOSIT_INTO_ARRAY: ["DepositCash", "WinCash", "Bonus"],

    DEPOSIT_INTO: {
        cash: 'DepositCash',
        winCash: 'WinCash',
        bonus: 'Bonus'
    },

    TRANSACTION_TYPE_ARAAY: [
        "Daily Bonus",
        "Sign Up",
        "Refer & Earn (Regular)",
        "Total Monthly Refer & Earn Leaderboard",
        "Total Monthly Game Leaderboard",
        "Offer",
        "Admin Given",
        "Withdrawal Processing Fees",
        "Withdrawal",
        "Add Cash",
        "MGP Platform Commission",
        "Expire user unused bonus",
        "GST Bonus",
        "TDS Bonus"
    ],

    TRANSACTION_TYPE: {
        dailyBonus: "Daily Bonus",
        signUp: "Sign Up",
        referEarnRegular: "Refer & Earn (Regular)",
        totalMonthlyReferEarnLeaderboard: "Total Monthly Refer & Earn Leaderboard",
        totalMonthlyGameLeaderboard: "Total Monthly Game Leaderboard",
        offer: "Offer",
        adminGiven: "Admin Given",
        withdrawalProcessingFees: "Withdrawal Processing Fees",
        withdraw: "Withdrawal",
        addCash: "Add Cash",
        mgpPlatformCommission: "MGP Platform Commission",
        expireUserUnUsedBonus: "Expire user unused bonus",
        gstBonus: "GST Bonus",
        tdsBonus: "TDS Bonus",
    },

    MGP_WALLET_STATUS_DESCRIPTION: {
        creditedInMGPPlatformWallet: "Credited in MGP Platform Wallet",
        debitedFromMGPPlatformWallet: "Debited from MGP Platform Wallet"
    },

    WALLET_TYPE_DESCRIPTION: {
        creditedInUserBonusWallet: "Credited in User's Bonus Wallet",
        debitedFromUserBonusWallet: "Debited from User's Bonus Wallet",
        creditedInUserDepositWallet: "Credited in User's Deposit Wallet",
        debitedFromUserDepositWallet: "Debited from User's Deposit Wallet",
        creditedInUserWinningWallet: "Credited in User's Winning Wallet",
        debitedFromUserWinningWallet: "Debited from User's Winning Wallet",
        debitedFromUserWallet: "Debited from User's Wallet",
    }

})