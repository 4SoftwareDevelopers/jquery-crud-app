var app = {
    backend: 'http://localhost:8080/api/v1',
    init: function() {
        app.initDatatable('#personas');
    },
    initDatatable : function(id) {
        $(id).DataTable({
            ajax : {
                url : app.backend + '/all',
                dataSrc : function(json) {
                    return json;
                }
            },
            columns : [
                {data : "id"},
                {data : "nombre"},
                {data : "apellido"},
                {data : "direccion"},
                {data : "telefono"}
            ]
        });
    }
};

$(document).ready(function(){
    app.init();
});