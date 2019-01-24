( function () {

    var url = 'http://agl-developer-test.azurewebsites.net/people.json';
    
    var handleSuccess = function ( people ) {
        
        UI.buildCatLists( people );
    };
    
    var handleFailure = function ( message, error ) {
        
        console.error( message, error );
        
    };
    
    AJAX.fetchPeople( url, handleSuccess, handleFailure );
    
} )();

