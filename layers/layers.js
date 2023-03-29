var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Conurbano_Bonsaerense_0 = new ol.format.GeoJSON();
var features_Conurbano_Bonsaerense_0 = format_Conurbano_Bonsaerense_0.readFeatures(json_Conurbano_Bonsaerense_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conurbano_Bonsaerense_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Conurbano_Bonsaerense_0.addFeatures(features_Conurbano_Bonsaerense_0);var lyr_Conurbano_Bonsaerense_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Conurbano_Bonsaerense_0, 
                style: style_Conurbano_Bonsaerense_0,
                title: '<img src="styles/legend/Conurbano_Bonsaerense_0.png" /> Conurbano_Bonsaerense'
            });

lyr_Conurbano_Bonsaerense_0.setVisible(true);
var layersList = [baseLayer,lyr_Conurbano_Bonsaerense_0];
lyr_Conurbano_Bonsaerense_0.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PARTIDO': 'PARTIDO', 'CABECERA': 'CABECERA', 'COD_CEN': 'COD_CEN', 'SECC_ELECT': 'SECC_ELECT', 'REG_EDUC': 'REG_EDUC', });
lyr_Conurbano_Bonsaerense_0.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PARTIDO': 'TextEdit', 'CABECERA': 'TextEdit', 'COD_CEN': 'TextEdit', 'SECC_ELECT': 'TextEdit', 'REG_EDUC': 'TextEdit', });
lyr_Conurbano_Bonsaerense_0.set('fieldLabels', {'AREA': 'inline label', 'PERIMETER': 'inline label', 'PARTIDO': 'no label', 'CABECERA': 'no label', 'COD_CEN': 'no label', 'SECC_ELECT': 'no label', 'REG_EDUC': 'no label', });
lyr_Conurbano_Bonsaerense_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});