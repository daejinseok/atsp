const _ = require('underscore/underscore-min.js');


const q018d = (a) => {

    var c = _.clone(a);
    const s = _.sortBy(a, a => -a);

    function p1(a) {
        const idx = c.indexOf(a);

        for(var i=idx+1; i<c.length; i++){
            if( c[i] === -1) continue;
            console.log( `( ${a}, ${c[i]} )`);
        }

        c[idx] = -1;

    }

    _.each(s, p1);

}

//q018d( _.map("5 4 10 1 2".split(" "), a => parseInt(a)) );
q018d( _.map("4 3 1 5 2".split(" "), a => parseInt(a)) );