const header = document.querySelector('.site-header');

const scrollDistance = function (callback, refresh) {
  // Make sure a valid callback was provided
  if (!callback || typeof callback !== 'function') return;

  // Variables
  var isScrolling, start, end, distance;

  // Listen for scroll events
  window.addEventListener(
    'scroll',
    function (event) {
      // Set starting position
      if (!start) {
        start = window.pageYOffset;
      }

      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(function () {
        // Calculate distance
        end = window.pageYOffset;
        distance = end - start;

        // Run the callback
        callback(distance, start, end);

        // Reset calculations
        start = null;
        end = null;
        distance = null;
      }, refresh || 66);
    },
    false
  );
};

scrollDistance((distance) => {
  if (distance > 0) {
    header.classList.add('site-header--fixed');
  } else {
    header.classList.remove('site-header--fixed');
  }
});
