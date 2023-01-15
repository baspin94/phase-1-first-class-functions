function receivesAFunction(callback) {
    return callback();
};

function returnsANamedFunction() {
    return receivesAFunction;
};

function returnsAnAnonymousFunction() {
    return function() {return 2*22};
};