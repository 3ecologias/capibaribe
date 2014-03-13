var map = L.mapbox.map('map')
    .setView([38.1, -98], 4)
    .addLayer(L.mapbox.tileLayer('bloombergmaps.map-pgfea6on'));

var layers = [{
    name: 'Stent',
    zoom: 0,
    center: [0, 0],
    layer: L.layerGroup([
        L.mapbox.tileLayer('bloombergmaps.stents_hsa'),
        L.mapbox.gridLayer('bloombergmaps.stents_hsa')])
}, {
    name: 'Gun Deaths',
    zoom: 4,
    center: [0, -70],
    layer: L.layerGroup([
        L.mapbox.tileLayer('bloombergmaps.totalUSRate'),
        L.mapbox.gridLayer('bloombergmaps.totalUSRate')])
}];

var gridControl;

$.each(layers, function(i, layer) {
    layer.control = L.mapbox.gridControl(layer.layer.getLayers()[1]);
    $('<li></li>')
        .appendTo('#map-ui')
        .append($('<a></a>')
            .text(layer.name)
            .attr('href', '#')
            .click(function(e) {
                $.each(layers, function(i, l) {
                    if (l.layer !== layer.layer && map.hasLayer(l.layer)) {
                        map.removeLayer(l.layer);
                    }
                });
                map.setView(layer.center, layer.zoom);
                $('.active').removeClass('active');
                $(this).addClass('active');
                if (gridControl) map.removeControl(gridControl);
                layer.layer.addTo(map);
                gridControl = layer.control.addTo(map);
                e.preventDefault();
            }));
});

$('#map-ui a:first').click();