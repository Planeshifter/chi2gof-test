var chi2gof = require( '@stdlib/stats-chi2gof' );

var res = chi2gof([135017, 1533, 13450], [0.9, 0.01, 0.09]);
console.log( res );