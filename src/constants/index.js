export const constants = {
  MEDIA_QUERY_MOBILE: window.matchMedia('(max-width: 767px)'),

  LS_LANGUAGE_KEY: 'language',
  LS_COLOR_SCHEME_KEY: 'color-scheme',
  LS_PROJECTS_KEY: 'projects',

  LOCALE_ENG: 'en',
  LOCALE_UKR: 'uk',

  LOC_ATTRIBUTE_TEXT: 'data-loc',
  LOC_ATTRIBUTE_PLC: 'data-loc-plc',
  LOC_ATTRIBUTE_ARIA: 'data-loc-aria',

  TYPING_ANIMATION_INTERVAL: 100,

  IMAGE_SIZE_NAMES: {
    small: 'small',
    medium: 'medium',
    large1x: 'large1x',
    large2x: 'large2x',
  },

  IMAGE_SIZES: {
    small: { width: 370, height: 208 },
    medium: { width: 480, height: 270 },
    large1x: { width: 960, height: 540 },
    large2x: { width: 1920, height: 1080 },
  },

  DATA_TYPES: {
    projects: 'projects',
    translations: 'translations',
  },
};
