# angular-dateselect
A simple datepicker in Angular.JS.

# Setup
Make sure the paths to the required libraries are set. See `index.html` for guidance.

# Usage
See `index.html` and `app.js` for examples.

Add `<date-select></date-select>` to your HTML. To register a function to get the date value, add `set-fn="setMyDateFn(dateGetFn)"` to the `date-select` element as an attribute. Do not change `set-fn` and `dateGetFn`.

Then add:

`$scope.setMyDateFn = function(dirDateFn){
  $scope.myDateFn = dirDateFn;
};`

To your controller. Call `$scope.myDateFn` to get the date as a string. The output format is `dd/mm/yyyy`. If you wish to change the format, modify it in `$scope.getDate` in the directive.

The example in `index.html` and `app.js`:

![Example](https://raw.githubusercontent.com/Honoo/angular-dateselect/master/example.png)

Optional parameters (set as attributes):

* minYear: The oldest allowed year.
* maxYear: The most recent allowed year.

# License
Licensed with the MIT License.
