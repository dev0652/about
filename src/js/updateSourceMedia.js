// *********************************
// Solution courtesy of Lars Magnus
// https://larsmagnus.co/blog/how-to-make-images-react-to-light-and-dark-mode
// *********************************

// Make <picture> <source> elements with media="(prefers-color-scheme:)" respect custom theme preference overrides. Otherwise the `media` preference will respond to the OS-level setting

export function updateSourceMedia(colorPreference) {
  //   colorPreference: 'light' | 'dark' | 'auto'
  const pictures = document.querySelectorAll('picture');

  pictures.forEach((picture) => {
    const sources = picture.querySelectorAll(`
        source[media*="prefers-color-scheme"], 
        source[data-media*="prefers-color-scheme"]
      `);

    sources.forEach((source) => {
      // Preserve the source `media` as a data-attribute to be able to switch between preferences
      if (source?.media.includes('prefers-color-scheme')) {
        source.dataset.media = source.media;
      }

      // For auto, set default values
      if (colorPreference === 'auto') {
        if (source?.dataset.media === source.media) {
          return;
        } else if (source?.dataset.media.includes('dark')) {
          source.media = '(prefers-color-scheme: dark)';
        } else if (source) {
          source.media = '(prefers-color-scheme: light)';
        }
      } else {
        // If the source element `media` target is the `preference`, override it to 'all' to show or set it to 'none' to hide
        if (source?.dataset.media.includes(colorPreference)) {
          source.media = 'all';
        } else if (source) {
          source.media = 'none';
        }
      }
    });
  });
}
