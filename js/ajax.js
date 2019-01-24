var AJAX = ( function () {
    
    var fetchPeople = function ( url, onSuccess, onError ) {
        
        var jqxhr = $.ajax( {
        
                url: url,
                dataType: 'json'
            
            } )
            .done( function( data ) {
                
                if ( _.isArray( data ) === false 
                        || data.length === 0
                        || ( 'gender' in data[0] ) === false ) {
                    
                    
                    var errorMessage = 'An array with gender is expected.';
                    
                    onError( errorMessage, data );
                    
                    return;
                }
                
                onSuccess( data );
               
            } )
            .fail( function( error ) {
                
                var errorMessage = 'Failed to get JSON resource of people.'
                onError( errorMessage, error );
                
            } );
    }

    var my = {
        
        fetchPeople: fetchPeople
        
    };
    
    return my;
    
} )();