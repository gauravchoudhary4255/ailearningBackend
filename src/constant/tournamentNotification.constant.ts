export = Object.freeze({
    LOGO_IMAGE_EXT_ARRAY: ['.jpeg', '.jpg', '.png'],

    LOGO_IMAGE_FILE_SIZE: 5, // 5 MB

    BANNER_IMAGE_EXT_ARRAY: ['.jpeg', '.jpg', '.png'],

    BANNER_IMAGE_FILE_SIZE: 5, // 5 MB

    // TOURNAMENT_NOTIFICATION_TYPE: ["offer", "normal", "dailyBonus"],
    TOURNAMENT_NOTIFICATION_TYPE: ["tournament"],

    TOURNAMENT_NOTIFICATION_TYPE_OBJ: {
        tournament: "tournament"
    },

    REPEAT_TYPE: [
        'beforeStartTournament', // Send notification before 10 minutes
        'tobeStartTournament(Waiting)', // Send notification before 1 minutes
        'startedTournament', // Send notification all registered users to inform start tournament
        'customNotification', // Send notification all registered users
        'expiredTournament' // Send notification all registered users to inform expired tournament
    ],

    REPEAT_TYPE_OBJ: {
        beforeStartTournament: 'beforeStartTournament', // Send notification before 10 minutes
        tobeStartTournament: 'tobeStartTournament(Waiting)', // Send notification before 1 minutes
        startedTournament: 'startedTournament', // Send notification all registered users to inform start tournament
        customNotification: 'customNotification', // Send notification all users
        expiredTournament: 'expiredTournament' // Send notification all registered users to inform expired tournament
    },

    REDIRECT_TO_SCREEN_ARRAY: [
        'TournamentDetailScreen',
        'TournamentWaitingScreen'
    ],

    REDIRECT_TO_SCREEN_OBJ: {
        TournamentDetailScreen: 'TournamentDetailScreen',
        TournamentWaitingScreen: 'TournamentWaitingScreen'
    },

    TOURNAMENT_NOTIFICATION_USER_TYPE_ARRAY: [
        'All User',
        'Registered User',
        'Non Joined User'
    ],

    TOURNAMENT_NOTIFICATION_USER_TYPE_OBJ: {
        allUser: 'All User',
        registeredUser: 'Registered User',
        nonJoinedUser: 'Non Joined User'
    },
});