export const constants = {
  LOCALE_ENG: 'en',
  LOCALE_UKR: 'uk',

  LS_KEYS: {
    language: 'language',
    colorScheme: 'color-scheme',
  },

  DATA_TYPES: {
    projects: 'projects',
    sectionContent: 'sectionContent',
  },

  MEDIA_QUERIES: {
    mobile: window.matchMedia('(max-width: 767px)'),
    widePhone: window.matchMedia('(max-width: 499px)'),
  },

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

  LOC_ATTRIBUTES: {
    text: 'data-loc',
    placeholder: 'data-loc-plc',
    ariaLabel: 'data-loc-aria',
  },

  TYPING_ANIMATION_INTERVAL: 100,
};
