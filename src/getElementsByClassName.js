var getElementsByClassName = function (className
) {
  var result = [];
  var test = function (element) {
    if (element.classList && element.classList.contains(className)) {
      result.push(element);
    }
    _(element.childNodes).forEach(function (child) {
      test(child);
    });
  };
  test(document.body);
  return result;
};