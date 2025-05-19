ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3844").setExtent([587357.474632, 326241.741095, 587813.532188, 326507.020376]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BVbinfoPDFdata_1 = new ol.format.GeoJSON();
var features_BVbinfoPDFdata_1 = format_BVbinfoPDFdata_1.readFeatures(json_BVbinfoPDFdata_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_BVbinfoPDFdata_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BVbinfoPDFdata_1.addFeatures(features_BVbinfoPDFdata_1);
cluster_BVbinfoPDFdata_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_BVbinfoPDFdata_1
});
var lyr_BVbinfoPDFdata_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_BVbinfoPDFdata_1, 
                style: style_BVbinfoPDFdata_1,
                popuplayertitle: 'BVb-infoPDF-data',
                interactive: true,
                title: '<img src="styles/legend/BVbinfoPDFdata_1.png" /> BVb-infoPDF-data'
            });
var format_BVbdata_2 = new ol.format.GeoJSON();
var features_BVbdata_2 = format_BVbdata_2.readFeatures(json_BVbdata_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_BVbdata_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BVbdata_2.addFeatures(features_BVbdata_2);
cluster_BVbdata_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_BVbdata_2
});
var lyr_BVbdata_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_BVbdata_2, 
                style: style_BVbdata_2,
                popuplayertitle: 'BVb-data',
                interactive: true,
                title: '<img src="styles/legend/BVbdata_2.png" /> BVb-data'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_BVbinfoPDFdata_1.setVisible(true);lyr_BVbdata_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BVbinfoPDFdata_1,lyr_BVbdata_2];
lyr_BVbinfoPDFdata_1.set('fieldAliases', {'filename': 'filename', 'longitude': 'longitude', 'latitude': 'latitude', 'Pdf': 'Pdf', });
lyr_BVbdata_2.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_BVbinfoPDFdata_1.set('fieldImages', {'filename': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'Pdf': 'ExternalResource', });
lyr_BVbdata_2.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'TextEdit', });
lyr_BVbinfoPDFdata_1.set('fieldLabels', {'filename': 'no label', 'longitude': 'hidden field', 'latitude': 'hidden field', 'Pdf': 'inline label - visible with data', });
lyr_BVbdata_2.set('fieldLabels', {'photo': 'no label', 'filename': 'inline label - visible with data', 'directory': 'hidden field', 'altitude': 'inline label - always visible', 'direction': 'hidden field', 'rotation': 'hidden field', 'longitude': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'timestamp': 'inline label - visible with data', });
lyr_BVbdata_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});