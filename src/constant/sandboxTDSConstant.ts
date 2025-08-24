export = Object.freeze({
    SANDBOX_API_KEY: process.env.SANDBOX_API_KEY || '',
    SANDBOX_SECRET: process.env.SANDBOX_SECRET || '',
    SANDBOX_VERSION: process.env.SANDBOX_VERSION || '',

    PREPARE_TDS_RETURN: {
        QUARTER: ['Q1', 'Q2', 'Q3', 'Q4'],
        FILING_TYPE: ['Original', 'Revised']
    },

    PREPARED_TDS_RETURN_FILE: {
        TDS_RETURN_FILE_ARRAY: ['.xlsx'],
        TDS_RETURN_FILE_SIZE: 10, // 10 MB
    },

    E_FILE_TDS_RETURN_FILE: {
        E_FILE_TDS_RETURN_FILE_ARRAY: ['.txt', '.csi'],
        E_FILE_TDS_RETURN_FILE_SIZE: 10, // 10 MB
    },

    DISTRIBUTE_FORM16A: {
        FORM_16A_FILE_ARRAY: ['.pdf'],
        FORM_16A_FILE_SIZE: 5, // 5 MB
    }
})