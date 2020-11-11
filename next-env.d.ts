/// <reference types="next" />
/// <reference types="next/types/global" />

interface Window {
  // pageviewのため
  gtag(
    type: 'config',
    googleAnalyticsId: string | undefined,
    { page_path: URL }
  )
  // eventのため
  gtag(
    type: 'event',
    eventAction: string,
    fieldObject: {
      event_label: string
      event_category: string
      value?: string
    }
  )
  // twitter
  twttr: {
    events: {
      bind: function
      trigger: function
      unbind: function
    }​​,
    init: boolean,
    ready: function,
    widgets: {
      createDMButton: function
      createFollowButton: function
      createGridFromCollection: function
      createHashtagButton: function
      createMentionButton: function
      createMoment: function
      createPeriscopeOnAirButton: function
      createShareButton: function
      createTimeline: function
      createTweet: function
      createTweetEmbed: function
      createVideo: function
      load: function
    },
  }
  // Facebook
  FB: {
    AppEvents: {
      EventNames: {
        ACHIEVED_LEVEL: string
        ADDED_PAYMENT_INFO: string
        ADDED_TO_CART: string
        ADDED_TO_WISHLIST: string
        COMPLETED_REGISTRATION: string
        COMPLETED_TUTORIAL: string
        INITIATED_CHECKOUT: string
        PAGE_VIEW: string
        RATED: string
        SEARCHED: string
        SPENT_CREDITS: string
        UNLOCKED_ACHIEVEMENT: string
        VIEWED_CONTENT: string
      },
      ParameterNames: {
        APP_USER_ID: string
        APP_VERSION: string
        CONTENT_ID: string
        CONTENT_TYPE: string
        CURRENCY: string
        DESCRIPTION: string
        LEVEL: string
        MAX_RATING_VALUE: string
        NUM_ITEMS: string
        PAYMENT_INFO_AVAILABLE: string
        REGISTRATION_METHOD: string
        SEARCH_STRING: string
        SUCCESS: string
      }​,
      activateApp: function​​
      clearAppVersion: function​​
      clearUserID: function​​
      getAppVersion: function​​
      getUserID: function​​
      logEvent: function​​
      logPageView: function​​
      logPurchase: function​​
      setAppVersion: function​​
      setUserID: function​​
      updateUserProperties: function
    },
    Canvas: {
      Plugin: {
        _setHidePluginCallback: function
        hidePluginElement: function
        showPluginElement: function
      }
      Prefetcher: {
      COLLECT_AUTOMATIC: number
      COLLECT_MANUAL: number
      ​​_maybeSample: function
      addStaticResource: function
      setCollectionMode: function
    }
     getHash: function
     getPageInfo: function
     scrollTo: function
     setAutoGrow: function
     setDoneLoading: function
     setHash: function
     setSize: function
     setUrlHandler: function
     startTimer: function
     stopTimer: function
    },
    Event: {
      subscribe: function,
      unsubscribe: function,
      clear: function
    },
    Frictionless: {
      _allowedRecipients: any,
       _updateRecipients: function,
       init: function
    },
    XFBML: {
      parse: function
    }
    __globalCallbacks: any
    api: function
    gamingservices: {
      friendFinder: function,
      uploadImageToMediaLibrary: function
      }
      getAccessToken: function
    getAuthResponse: function
    getLoginStatus: function
    getUserID: function
    init: function
    login: function
    logout: function
    ui: function
  }
}
