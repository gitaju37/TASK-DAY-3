var obj1 = {
    name: "Person1",
    age: "5",
}
var obj2 = {
    age: "5",
    name: "Person1"
}

let obj1keys = Object.keys( obj1 );
let obj2keys = Object.keys( obj2 );
let obj1values = Object.values( obj1 );
let obj2values = Object.values( obj2 );

function compare( obj1, obj2 ) {
    if ( obj1keys.length !== obj2keys.length ) {
        return false;
    }
    for ( let key of obj1keys ) {
        if ( obj1[ key ] === obj2[ key ] ) {
            return true;
        }
    }
    return false;
    for ( let values in obj1values ) {
        if ( obj1[ values ] === obj2[ values ] ) {
            return true;
        }
    }
    return false;
}
console.log( compare( obj1, obj2 ) );