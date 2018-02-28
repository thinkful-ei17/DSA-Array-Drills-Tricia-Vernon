function urlify(input) {

  let emptyRegex = / /g;

  return input.replace(emptyRegex, '%20');

}


console.log(urlify('www.thinkful.com /tauh ida parv een')
);
