var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_COMUNIDADESINRAPOLIGONOS_1 = new ol.format.GeoJSON();
var features_COMUNIDADESINRAPOLIGONOS_1 = format_COMUNIDADESINRAPOLIGONOS_1.readFeatures(json_COMUNIDADESINRAPOLIGONOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMUNIDADESINRAPOLIGONOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMUNIDADESINRAPOLIGONOS_1.addFeatures(features_COMUNIDADESINRAPOLIGONOS_1);
var lyr_COMUNIDADESINRAPOLIGONOS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMUNIDADESINRAPOLIGONOS_1, 
                style: style_COMUNIDADESINRAPOLIGONOS_1,
                popuplayertitle: 'COMUNIDADES INRA POLIGONOS',
                interactive: false,
                title: '<img src="styles/legend/COMUNIDADESINRAPOLIGONOS_1.png" /> COMUNIDADES INRA POLIGONOS'
            });
var format_MADIDI_2 = new ol.format.GeoJSON();
var features_MADIDI_2 = format_MADIDI_2.readFeatures(json_MADIDI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MADIDI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MADIDI_2.addFeatures(features_MADIDI_2);
var lyr_MADIDI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MADIDI_2, 
                style: style_MADIDI_2,
                popuplayertitle: 'MADIDI',
                interactive: true,
    title: 'MADIDI<br />\
    <img src="styles/legend/MADIDI_2_0.png" /> Área Natural de Manejo Integrado<br />\
    <img src="styles/legend/MADIDI_2_1.png" /> Parque Nacional<br />' });
var format_MADIDIZONAS_3 = new ol.format.GeoJSON();
var features_MADIDIZONAS_3 = format_MADIDIZONAS_3.readFeatures(json_MADIDIZONAS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MADIDIZONAS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MADIDIZONAS_3.addFeatures(features_MADIDIZONAS_3);
var lyr_MADIDIZONAS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MADIDIZONAS_3, 
                style: style_MADIDIZONAS_3,
                popuplayertitle: 'MADIDI ZONAS',
                interactive: true,
    title: 'MADIDI ZONAS<br />\
    <img src="styles/legend/MADIDIZONAS_3_0.png" /> PROTECCION ESTRICTO<br />\
    <img src="styles/legend/MADIDIZONAS_3_1.png" /> USO EXTENSIVO EXTRACTIVO<br />\
    <img src="styles/legend/MADIDIZONAS_3_2.png" /> USO EXTENSIVO NO ESTRACTIVO<br />\
    <img src="styles/legend/MADIDIZONAS_3_3.png" /> USO INTENSIVO EXTRACTIVO<br />' });
var format_MUNICIPIOS_4 = new ol.format.GeoJSON();
var features_MUNICIPIOS_4 = format_MUNICIPIOS_4.readFeatures(json_MUNICIPIOS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIOS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOS_4.addFeatures(features_MUNICIPIOS_4);
var lyr_MUNICIPIOS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUNICIPIOS_4, 
                style: style_MUNICIPIOS_4,
                popuplayertitle: 'MUNICIPIOS',
                interactive: false,
                title: '<img src="styles/legend/MUNICIPIOS_4.png" /> MUNICIPIOS'
            });
var format_COMUNIDADESINRA_5 = new ol.format.GeoJSON();
var features_COMUNIDADESINRA_5 = format_COMUNIDADESINRA_5.readFeatures(json_COMUNIDADESINRA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMUNIDADESINRA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMUNIDADESINRA_5.addFeatures(features_COMUNIDADESINRA_5);
cluster_COMUNIDADESINRA_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_COMUNIDADESINRA_5
});
var lyr_COMUNIDADESINRA_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_COMUNIDADESINRA_5, 
                style: style_COMUNIDADESINRA_5,
                popuplayertitle: 'COMUNIDADES INRA',
                interactive: true,
                title: '<img src="styles/legend/COMUNIDADESINRA_5.png" /> COMUNIDADES INRA'
            });
var format_D_PREDIOS_6 = new ol.format.GeoJSON();
var features_D_PREDIOS_6 = format_D_PREDIOS_6.readFeatures(json_D_PREDIOS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_D_PREDIOS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_D_PREDIOS_6.addFeatures(features_D_PREDIOS_6);
cluster_D_PREDIOS_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_D_PREDIOS_6
});
var lyr_D_PREDIOS_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_D_PREDIOS_6, 
                style: style_D_PREDIOS_6,
                popuplayertitle: 'D_PREDIOS',
                interactive: false,
                title: '<img src="styles/legend/D_PREDIOS_6.png" /> D_PREDIOS'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_COMUNIDADESINRAPOLIGONOS_1.setVisible(false);lyr_MADIDI_2.setVisible(false);lyr_MADIDIZONAS_3.setVisible(false);lyr_MUNICIPIOS_4.setVisible(false);lyr_COMUNIDADESINRA_5.setVisible(false);lyr_D_PREDIOS_6.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_COMUNIDADESINRAPOLIGONOS_1,lyr_MADIDI_2,lyr_MADIDIZONAS_3,lyr_MUNICIPIOS_4,lyr_COMUNIDADESINRA_5,lyr_D_PREDIOS_6];
lyr_COMUNIDADESINRAPOLIGONOS_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Agrupacion': 'Agrupacion', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MADIDI_2.set('fieldAliases', {'NOMBRE AP': 'NOMBRE AP', 'CATEGORIA': 'CATEGORIA', });
lyr_MADIDIZONAS_3.set('fieldAliases', {'NOMBRE AP': 'NOMBRE AP', 'CATEGORIA': 'CATEGORIA', 'ZONAS': 'ZONAS', 'DESCRIP': 'DESCRIP', });
lyr_MUNICIPIOS_4.set('fieldAliases', {'id': 'id', 'gid': 'gid', 'c_ut': 'c_ut', 'departamen': 'departamen', 'provincia': 'provincia', 'municipio': 'municipio', 'n°_ley': 'n°_ley', 'fecha_ley': 'fecha_ley', 'zona': 'zona', 'id_ut': 'id_ut', 'bl_comli_m': 'bl_comli_m', 'capital': 'capital', 'c_siot': 'c_siot', 'tioc_aioc': 'tioc_aioc', 'visor': 'visor', });
lyr_COMUNIDADESINRA_5.set('fieldAliases', {'Comunidad': 'Comunidad', });
lyr_D_PREDIOS_6.set('fieldAliases', {'Comunidad': 'Comunidad', });
lyr_COMUNIDADESINRAPOLIGONOS_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Agrupacion': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MADIDI_2.set('fieldImages', {'NOMBRE AP': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_MADIDIZONAS_3.set('fieldImages', {'NOMBRE AP': 'TextEdit', 'CATEGORIA': 'TextEdit', 'ZONAS': 'TextEdit', 'DESCRIP': '', });
lyr_MUNICIPIOS_4.set('fieldImages', {'id': 'TextEdit', 'gid': 'TextEdit', 'c_ut': 'TextEdit', 'departamen': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'n°_ley': 'TextEdit', 'fecha_ley': 'DateTime', 'zona': 'TextEdit', 'id_ut': 'TextEdit', 'bl_comli_m': 'TextEdit', 'capital': 'TextEdit', 'c_siot': 'TextEdit', 'tioc_aioc': 'TextEdit', 'visor': 'TextEdit', });
lyr_COMUNIDADESINRA_5.set('fieldImages', {'Comunidad': '', });
lyr_D_PREDIOS_6.set('fieldImages', {'Comunidad': '', });
lyr_COMUNIDADESINRAPOLIGONOS_1.set('fieldLabels', {'OBJECTID': 'no label', 'Agrupacion': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_MADIDI_2.set('fieldLabels', {'NOMBRE AP': 'inline label - always visible', 'CATEGORIA': 'inline label - always visible', });
lyr_MADIDIZONAS_3.set('fieldLabels', {'NOMBRE AP': 'inline label - always visible', 'CATEGORIA': 'inline label - always visible', 'ZONAS': 'inline label - always visible', 'DESCRIP': 'inline label - always visible', });
lyr_MUNICIPIOS_4.set('fieldLabels', {'id': 'no label', 'gid': 'no label', 'c_ut': 'no label', 'departamen': 'no label', 'provincia': 'no label', 'municipio': 'no label', 'n°_ley': 'no label', 'fecha_ley': 'no label', 'zona': 'no label', 'id_ut': 'no label', 'bl_comli_m': 'no label', 'capital': 'no label', 'c_siot': 'no label', 'tioc_aioc': 'no label', 'visor': 'no label', });
lyr_COMUNIDADESINRA_5.set('fieldLabels', {'Comunidad': 'inline label - always visible', });
lyr_D_PREDIOS_6.set('fieldLabels', {'Comunidad': 'no label', });
lyr_D_PREDIOS_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});