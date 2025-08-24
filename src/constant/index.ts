import ENVIRONMENT from './environment';
import ROUTES from './route';
import SUCCESS_MESSAGES from './successMessages';
import ERROR_MESSAGES from './errorMessages';
import STATUS_CODE from './statueCode';
import GAME_CONSTANT from './gameConstant';
import USER_CONSTANT from './userConstant';
import TOURNAMENT_CONSTANT from './tournamentConstant';
import PAYMENT_CONSTANT from './paymentConstant';
import VALID_CURRENCY from './validCurrency';
import VALID_GAME_CATEGORY from './validGameCategory';
import MAIL_CONFIG from './mailConfig';
import COMMON_CONSTANT from './commonConstant';
import TIME_ZONES_LIST from './timeZones';
import VALID_AGENT_ROLE_PERMISSION from './validAgentRolePermission';
import SDK_CONSTANT from './sdkConstant';
import AVATAR_CONSTANT from './avatarConstant';
import GENRE_CONSTANT from './genreConstant'
import ADMIN_USER_CONSTANT from './adminUserRoleConstant';
import COUNTRY_CONSTANT from './countryConstant';
import TRANSACTION_HISTORY_CONSTANT from './transactionHistoryConstant';
import HEADER_IMAGE_CONSTAST from './webSiteHeaderConstant';
import GAMES_ICON_CONSTANT from './webSiteGamesConstant';
import WEBSITE_WINNER_CONSTANT from './webSiteWinnerConstant';
import WEBSITE_SOCIAL_MEDIA_CONSTANT from './webSiteWinnerConstant';
import PLAYED_GAMES_CONSTANT from './playedGamesConstant';
import POPULAR_GAME_CONSTANT from './popularGameConstant';
import INTERNAL_ADS from './internalAdsConstants';
import DAILY_WHEEL_BONUS from './dailyWheelBonusConstant';
import REFER_AND_EARN_CONSTANTS from './referAndEarnConstant';
import USER_KYC from './userKYCConstant';
import GAME_BUILD_CONSTANT from './gameBuild.constant';
import MGP_RELEASE_CONSTANT from './mgpRelease.constant';
import GAME_MODE_CONSTANT from './gameMode.constant';
import LEVEL_ICON_CONSTANT from './levelConstant'
import SUPER_ADMIN_CONFIG from './superAdminConfig.constant';
import HELP_AND_SUPPORT_CONSTANTS from './helpAndSupportConstants';
import LOBBY_TYPE_CONSTANTS from './lobbyTypeConstants';
import HOW_TO_PLAY_CONSTANTS from './howToPlayConstant';
import USER_CLAIM_BONUS_CONSTANTS from './userClaimBonusConstatnt';
import BANK_AND_UPI_CONSTANTS from './bankAndUPIConstants';
import TDS_CONSTANT from './tds.constant';
import USER_KYC_UPDATE_REQUEST_CONSTANT from './userKYCUpdateRequestConstant';
import USER_GAME_RUNNING_STATUS_CONSTANT from './userGameRunningStatusConstant';
import UPCOMING_GAME_CONSTANT from './upcomingGameConstant';
import AUTHENDICATION_CONSTANT from './authendicationConstant';
import AGENDA_JOB_CONSTANT from './agendaJobConstant';
import GAME_MODE_DESIGN_CONSTANT from './gameModeDesignConstant';
import TICKET_VIDEO_CONSTANT from './ticketVideoConstant';
import PHONE_NUMBER_UPDATE_REQUEST_CONSTANT from './phoneNumberUpdateRequestConstant';
import SPLASH_SCREEN_VIDEO_CONSTANT from './splashScreenVideoConstant';
import INITIALIZE_SETUP_CONSTANT from './initializeSetupConstant';
import MGP_HOW_TO_PLAY_CONSTANTS from './MGPHowToPlayConstant';
import GAME_SERVER_API_CONSTANTS from './gameServerApiConstant'
import LEADERBOARD_BONUS_CONFIG_CONSTANT from './leaderboardBonusConfigConstants';
import REFER_AND_EARN_MONTHLY_BONUS_CONFIG_CONSTANTS from './referAndEarnMonthlyBonusConfigConstant';
import HOME_SCREEN_FOOTER_ICON_CONSTANTS from './homeScreenFooterIconConstant';
import HOME_SCREEN_FOOTER_LOGO_CONSTANTS from './homeScreenFooterLogoConstant';
import KYC_SCREEN_CONSTANT from './KYCScreenConstant'
import LOGIN_SCREEN_CONSTANTS from '../constant/loginScreenConstant';
import WALLET_SCREEN_CONSTANTS from '../constant/walletScreenConstant';
import REFER_AND_EARN_STEPS_CONSTANTS from './referAndEarnStepsConstant';
import PAYMENT_SETTING_MODE_CONSTANTS from './paymentSettingModeConstant';
import DAILY_WHEEL_BONUS_TYPE_CONSTANTS from './dailyWheelBonusTypeConstants';
import MAINTENANCE_CONSTANTS from './maintenanceConstant';
import OFFER_CONSTANT from './offerConstant';
import NOTIFICATION_CONSTANT from './notification.constant';
import NOTIFICATION_USER_TYPE_CONSTANT from './notificationUserTypeConstant';
import DOWNLOAD_APPLICATION from './downloadApplication.constant';
import LOGIN_OTP_CONSTANT from './loginOtpConstant';
import OTHER_OTP_CONSTANT from './otherOtpConstant';
import PAYMENT_GATEWAY_CONSTANT from './paymentGatewayConstant';
import ADD_DEPOSIT_CASH_CONSTANT from './addDepositCashConstant';
import REFER_AND_EARN_SHARE_CONSTANT from './referAndEarnShareConfig.constant';
import MGP_WALLET_HISTORY_CONSTANT from './mgpWalletHistoryConstant';
import ADMIN_NOTIFICATION_CONSTANT from './adminNotificationConstant';
import SPLASH_SCREEN_IMAGE_CONSTANT from './splashScreenImageConstant';
import SANDBOX_TDS_CONSTANT from './sandboxTDSConstant';
import WITHDRAW_MANUALLY_CONSTANT from './withdrawManuallyConstant';
import PAYMENT_HISTORY_CONSTANT from './paymentHistoryConstant';
import REPORT_REASON_CONSTANT from './reportReasonConstant';
import TOURNAMENT_NOTIFICATION_CONSTANT from './tournamentNotification.constant';
import REDIS_KEYS_CONSTANT from './redisKeyConstant';
import SOCKET_CONSTANT from './socketConstant';
import ADMIN_ACTIVITY_CONSTANT from "./adminActivityConstant";
import NUMERICAL_CONSTANT from './numerical'

const PERMISSION = VALID_AGENT_ROLE_PERMISSION.PERMISSION;

const exportObject = Object.freeze({
  ENVIRONMENT,
  ROUTES,
  SUCCESS_MESSAGES,
  ERROR_MESSAGES,
  STATUS_CODE,
  GAME_CONSTANT,
  USER_CONSTANT,
  TOURNAMENT_CONSTANT,
  PAYMENT_CONSTANT,
  VALID_CURRENCY,
  VALID_GAME_CATEGORY,
  MAIL_CONFIG,
  COMMON_CONSTANT,
  TIME_ZONES_LIST,
  VALID_AGENT_ROLE_PERMISSION,
  PERMISSION,
  SDK_CONSTANT,
  AVATAR_CONSTANT,
  GENRE_CONSTANT,
  ADMIN_USER_CONSTANT,
  COUNTRY_CONSTANT,
  TRANSACTION_HISTORY_CONSTANT,
  HEADER_IMAGE_CONSTAST,
  GAMES_ICON_CONSTANT,
  WEBSITE_WINNER_CONSTANT,
  WEBSITE_SOCIAL_MEDIA_CONSTANT,
  PLAYED_GAMES_CONSTANT,
  POPULAR_GAME_CONSTANT,
  INTERNAL_ADS,
  DAILY_WHEEL_BONUS,
  REFER_AND_EARN_CONSTANTS,
  USER_KYC,
  GAME_BUILD_CONSTANT,
  MGP_RELEASE_CONSTANT,
  GAME_MODE_CONSTANT,
  LEVEL_ICON_CONSTANT,
  SUPER_ADMIN_CONFIG,
  HELP_AND_SUPPORT_CONSTANTS,
  LOBBY_TYPE_CONSTANTS,
  HOW_TO_PLAY_CONSTANTS,
  USER_CLAIM_BONUS_CONSTANTS,
  BANK_AND_UPI_CONSTANTS,
  TDS_CONSTANT,
  USER_KYC_UPDATE_REQUEST_CONSTANT,
  USER_GAME_RUNNING_STATUS_CONSTANT,
  UPCOMING_GAME_CONSTANT,
  AUTHENDICATION_CONSTANT,
  AGENDA_JOB_CONSTANT,
  GAME_MODE_DESIGN_CONSTANT,
  TICKET_VIDEO_CONSTANT,
  PHONE_NUMBER_UPDATE_REQUEST_CONSTANT,
  SPLASH_SCREEN_VIDEO_CONSTANT,
  INITIALIZE_SETUP_CONSTANT,
  MGP_HOW_TO_PLAY_CONSTANTS,
  GAME_SERVER_API_CONSTANTS,
  LEADERBOARD_BONUS_CONFIG_CONSTANT,
  REFER_AND_EARN_MONTHLY_BONUS_CONFIG_CONSTANTS,
  HOME_SCREEN_FOOTER_ICON_CONSTANTS,
  HOME_SCREEN_FOOTER_LOGO_CONSTANTS,
  LOGIN_SCREEN_CONSTANTS,
  KYC_SCREEN_CONSTANT,
  WALLET_SCREEN_CONSTANTS,
  REFER_AND_EARN_STEPS_CONSTANTS,
  PAYMENT_SETTING_MODE_CONSTANTS,
  DAILY_WHEEL_BONUS_TYPE_CONSTANTS,
  OFFER_CONSTANT,
  NOTIFICATION_CONSTANT,
  MAINTENANCE_CONSTANTS,
  NOTIFICATION_USER_TYPE_CONSTANT,
  DOWNLOAD_APPLICATION,
  LOGIN_OTP_CONSTANT,
  OTHER_OTP_CONSTANT,
  PAYMENT_GATEWAY_CONSTANT,
  ADD_DEPOSIT_CASH_CONSTANT,
  REFER_AND_EARN_SHARE_CONSTANT,
  MGP_WALLET_HISTORY_CONSTANT,
  ADMIN_NOTIFICATION_CONSTANT,
  SPLASH_SCREEN_IMAGE_CONSTANT,
  SANDBOX_TDS_CONSTANT,
  WITHDRAW_MANUALLY_CONSTANT,
  PAYMENT_HISTORY_CONSTANT,
  REPORT_REASON_CONSTANT,
  TOURNAMENT_NOTIFICATION_CONSTANT,
  REDIS_KEYS_CONSTANT,
  SOCKET_CONSTANT,
  ADMIN_ACTIVITY_CONSTANT,
  NUMERICAL_CONSTANT
});

export = exportObject;
