(function() {
  'use strict';

  angular
    .module('app')
    .controller('ChartsController', ChartsController);

  ChartsController.$inject = ['inqstatsFactory'];

  /* @ngInject */
  function ChartsController(inqstatsFactory) {
    // Preface: Try to accomplish just one of the charts first.

    /* -- STEP 3 - CALL ON YOUR FACTORY FUNCTION --
    The factory containing the function you wrote is being injected into this
    controller on lines 8 and 11. (Remember the John Papa style guide!)

    You now need to call on that factory function. Here is a (non working!) example
    of how you call a factory function.

    ```js
    factory
      .get()
      .then(function(data) {
        // massage your data
      })
      .catch(function(error) {
        console.log(error);
      })
    ```
    */

    /* -- STEP 4 --
    Next, inside of your callback, you will need to massage your data.

    > What does he mean by massaging data? Sounds uncomfortable..

    It's not so bad. Here's the problem massaging solves.

    Angular Charts needs an array of objects that look like this so that it can
    render your charts for you.

    [
      { x: 2014, y: 4.4 },
      { x: 2015, y: 4.1 },
      { x: 2016, y: 3.8 }
    ]

    However, the data you'll receive from inqstatsFactory looks like this.

    [
      { year: 2014, data: 4.4 },
      { year: 2015, data: 4.1 },
      { year: 2016, data: 3.8 }
    ]

    See the difference?

    We need to convert the data structure returned by inqstatsFactory
    into the structure that Angular Charts requires.

    In coding world we call this process "mapping". Converting one data structure
    into another. As we are in JavaScript, mapping is achieved by using none other
    than the `.map` function. (Don't forget to read the documentation in step 0!)

    In the callback of your factory call, write the code to map the INQStats data
    into Angular Chart data.
    */

    /* -- STEP 5: GIVE THE DATA TO ANGULAR CHART -->

    Done that? Great!

    Next up, for Angular Chart, you only need to use the `chart-data` and
    `chart-label` directives in order to get one up and running.

    You'll need a data structure like this to house the massaged data from step 2.

    ```js
    vm.bigMac = {
      data: [4.4, 4.1, 3.8] // while literal in this example, this will really be the result of the call to the .map function.
      labels: ['2014', '2015', '2016'] // see above comment, same applys here.
    }
    ```

    Once you've finished all this, you can move to ../index.html for Step 6 - building the UI!
    */

  }
})();
