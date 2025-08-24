export = Object.freeze({
  TOURNAMENT_TYPE_ARRAY: ['Synchronous', 'Asynchronous'],

  REPEAT_UNIT_ARRAY: ['Days', 'Weeks', 'Months'],
  TOURNAMENT_STATUS_ARRAY: ['Upcoming', 'Running', 'Completed', 'Cancelled'],
  TOURNAMENT_STATUS: {
    'upcoming': 'Upcoming',
    'running': 'Running',
    'completed': 'Completed',
    'cancelled': 'Cancelled'
  },

  TOURNAMENT_IMAGE_EXT_ARRAY: ['.jpeg', '.jpg', '.png'],

  TOURNAMENT_IMAGE_FILE_SIZE: 5, // 5 MB

  MONEY_MODE_ARRAY: ['Real Money', 'Coin', 'Free'],

  MONEY_MODE: {
    realMoney: 'Real Money',
    coin: 'Coin',
    free: 'Free'
  },

  EVENT_TYPE: {
    headToHead: 'HeadToHead',
    tournament: 'Tournament'
  },

  EVENT_TYPE_ARRAY: ['HeadToHead', 'Tournament'],

  DEFAULT_ACTIVE_STATUS: true,

  LOBBY_TYPE_ARRAY: ['HeadToHead', 'Contest'],

  LOBBY_TYPE: {
    headToHead: 'HeadToHead',
    contest: 'Contest'
  },

  H2H_MIN_PLAYERS: 2,

  H2H_MAX_PLAYERS: 2,

  POINTS_GAME_MODE: 'Points',

  POKER_GAME_MODE: 'Poker',

  POOL_RUMMY_MODE_ARRAY: ['201 Pool', '101 Pool'],

  LEADERBOARD_RANK_CONFIG: {
    POKER_GAME: {
      GAME_NAME: 'Poker',
      NO_OF_PLAYER: 6
    },

    CALL_BREAK_GAME: {
      GAME_NAME: 'Call Break',
      NO_OF_PLAYER: 4
    },

    RUMMY_GAME: {
      GAME_NAME: 'Rummy',
      NO_OF_PLAYER: 6
    },

    LUDO_GAME: {
      GAME_NAME: 'Ludo',
      NO_OF_PLAYER: 4
    },

    SNAKES_AND_LADDERS_GAME: {
      GAME_NAME: "Snakes and Ladders",
      NO_OF_PLAYER: 4
    },

    "8_BALL_POOL_GAME": {
      GAME_NAME: '8 Ball Pool',
      NO_OF_PLAYER: 2
    },

  },

  RUMMY_DEAL_MODE: 'Deals',

  SUB_MODE_ARRAY: ['2 Deals', '3 Deals', '6 Deals'],

  DEAL_SUB_MODE_ARRAY: ['2 Deals', '3 Deals', '6 Deals'],

  PLATFORMS_ARRAY: ['Android', 'Ios', 'Cross-Platform'],
});
