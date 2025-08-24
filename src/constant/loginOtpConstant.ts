export = Object.freeze({
  OTP_LENGTH: 4, // 6 digits
  OTP_EXPIRE_MINUTES: 5, // in minutes otp expire

  // SMS_TEXT: `http://sapteleservices.com/SMS_API/sendsms.php?mobile=:mobileNumber&sendername=THPLUS&username=threeplus&password=3PlusGames123&message=Login%20OTP%3A%20:otp.%203Plus%20Games%20Welcomes%20You%21%20:userId.%0A3Plus%20Games%20Pvt.%20Ltd.&routetype=1&tid=1607100000000253565#var#}. 3Plus Games Welcomes You! {#var#}.\n3Plus Games Pvt. Ltd. EE/Hxsp9Fjj&routetype=1&tid=1607100000000253565`,
  // SMS_TEXT: `http://sapteleservices.com/SMS_API/sendsms.php?username=threeplus&password=3PlusGames123&sendername=THPLUS&mobile=:mobileNumber&message=Login%20OTP%3A%20:otp.%203Plus%20Games%20Welcomes%20You%21%20:userId.%0A3Plus%20Games%20Pvt.%20Ltd.%0AEE%2FHxsp9&routetype=1&tid=1607100000000253921`,
  SMS_TEXT_LOGIN: ``,
  SMS_TEXT_UPDATE_PHONE: ``,

  GREEN_ADS_DETAILS: {
    USERNAME: 'clearbit',
    PASSWORD: '773457',
    SENDER_ID: 'CLEARB',
    SEND_SMS_URL: 'https://sapteleservices.com/SMS_API/sendsms.php',
    MESSAGE: 'Your%20OTP%20is%20123256%20for%20verification.%20%0AThe%20OTP%20expires%20within%205%20mins.%20Do%20not%20share%20OTP%20for%20security%20reasons.%20UID0001.%0AClearbit%20API%20Techno%20Pvt.%20Ltd.',
    DEMO_URL: '',
  }
});