export = Object.freeze({
    USER_KYC_PAN_CARD_EXT_ARRAY: ['.jpeg', '.jpg', '.png'],
    USER_KYC_PAN_CARD_FILE_SIZE: 5, // 5 MB

    // USER_KYC_AADHAR_CARD_EXT_ARRAY: ['.jpeg', '.jpg', '.png'],
    // USER_KYC_AADHAR_CARD_FILE_SIZE: 5,

    USER_KYC_AADHAR_CARD_FRONT_EXT_ARRAY: ['.jpeg', '.jpg', '.png'],
    USER_KYC_AADHAR_CARD_FRONT_FILE_SIZE: 5,

    USER_KYC_AADHAR_CARD_BACK_EXT_ARRAY: ['.jpeg', '.jpg', '.png'],
    USER_KYC_AADHAR_CARD_BACK_FILE_SIZE: 5,

    USER_KYC_STATUS: ['Approve', 'Reject', 'Pending', 'Verify'],
    DEFAULT_KYC_STATUS: 'Pending',

    USER_KYC_STATUS_OBJ: {
        approve: 'Approve',
        reject: "Reject",
        pending: "Pending",
        verify: "Verify",
    },

    AUTOMATIC_VERIFY: true,

    KYC_API_KEY: process.env.KYC_API_KEY || '7GN4JG8-0YYMQA5-GQ0KA3R-37GY1JB',

    KYC_APP_ID: process.env.KYC_APP_ID || '63932ce98b5c20001ee83a0f',

    ZOOP_URL: process.env.ZOOP_URL || '',
});