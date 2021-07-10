const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (let index in collection) {
        callback( collection[index], index, collection)
      }
      return collection;
    },

    map: function(collection, callback) {
      const newArray = [];
      for ( let index in collection ) {
        newArray.push( callback( collection[index], index, collection ) )
      }
      return newArray;
    },

    reduce: function(collection, callback, acc = -2) {
      for ( let index in collection ) {
        acc = callback( acc, collection[index], collection )
      }
      return acc;
    },

    find: function(collection, predicate) {
      for ( let index in collection ) {
        if ( predicate( collection[index] ) ) {
          return collection[index];
        }
      }
    },

    filter: function(collection, predicate) {
      let filtered = [];
      for ( let index in collection ) {
        if ( predicate( collection[index] ) ) {
          filtered.push( collection[index] );
        };
      };
      return filtered;
    },

    size: function(collection) {
      if (collection[0]) {
        return collection.length;
      } else {
        return Object.keys( collection ).length;
      }
    },

    first: function(array, n=0) {
      if (n === 0) {
        return array[n];
      } else {
        return array.slice(0, n);
      }
    },

    last: function(array, n) {
      if (n) {
        return array.slice( array.length - n );
      } else {
        return array[ array.length - 1];
      }
    },

    compact: function(array) {
      const newArray = [];
      for ( let index in array ) {
        array[index] ? newArray.push(array[index]) : null;
      }
      return newArray;
    },

    sortBy: function(array, callback) {
      const newArray = [...array];

      newArray.sort( (a,b) => {
        return callback(a) - callback(b);
      });
      return newArray;
    },

    // flatten: function(array, shallow=false) {
    //   const newArray = [];
    //   for (let index in array) {
    //     if ( typeof( array[index] === "object") ) {

    //     } else {
    //       newArray.push( array[index] )
    //     }
    //   }
    //   return newArray;
    // },

    uniq: function( array, isSorted=false, callback ) {
      const newArray = [];
      for (let index in array) {
        if (isSorted) {
          if ( array[index] !== newArray.slice( newArray.length - 1 ) ) {
            newArray.push( array[index] );
          }
        } else {

        }
      }

      return newArray;
    },

    functions: function(object) {

    },


  }
})()

fi.libraryMethod()
