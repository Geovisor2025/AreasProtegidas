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
var format_DEPARTAMENTOS_1 = new ol.format.GeoJSON();
var features_DEPARTAMENTOS_1 = format_DEPARTAMENTOS_1.readFeatures(json_DEPARTAMENTOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPARTAMENTOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTAMENTOS_1.addFeatures(features_DEPARTAMENTOS_1);
var lyr_DEPARTAMENTOS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEPARTAMENTOS_1, 
                style: style_DEPARTAMENTOS_1,
                popuplayertitle: 'DEPARTAMENTOS',
                interactive: false,
                title: '<img src="styles/legend/DEPARTAMENTOS_1.png" /> DEPARTAMENTOS'
            });
var format_MUNICIPIOS_2 = new ol.format.GeoJSON();
var features_MUNICIPIOS_2 = format_MUNICIPIOS_2.readFeatures(json_MUNICIPIOS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIOS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOS_2.addFeatures(features_MUNICIPIOS_2);
var lyr_MUNICIPIOS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUNICIPIOS_2,
maxResolution:210.03349614196472,
 
                style: style_MUNICIPIOS_2,
                popuplayertitle: 'MUNICIPIOS',
                interactive: false,
                title: '<img src="styles/legend/MUNICIPIOS_2.png" /> MUNICIPIOS'
            });
var format_AREAS_PROTEGIDAS_CATEGORIAS_3 = new ol.format.GeoJSON();
var features_AREAS_PROTEGIDAS_CATEGORIAS_3 = format_AREAS_PROTEGIDAS_CATEGORIAS_3.readFeatures(json_AREAS_PROTEGIDAS_CATEGORIAS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAS_PROTEGIDAS_CATEGORIAS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAS_PROTEGIDAS_CATEGORIAS_3.addFeatures(features_AREAS_PROTEGIDAS_CATEGORIAS_3);
var lyr_AREAS_PROTEGIDAS_CATEGORIAS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAS_PROTEGIDAS_CATEGORIAS_3, 
                style: style_AREAS_PROTEGIDAS_CATEGORIAS_3,
                popuplayertitle: 'AREAS_PROTEGIDAS_CATEGORIAS',
                interactive: true,
    title: 'AREAS_PROTEGIDAS_CATEGORIAS<br />\
    <img src="styles/legend/AREAS_PROTEGIDAS_CATEGORIAS_3_0.png" /> ÁREA NATURAL DE MANEJO INTEGRADO<br />\
    <img src="styles/legend/AREAS_PROTEGIDAS_CATEGORIAS_3_1.png" /> PARQUE NACIONAL<br />' });
var format_AREAS_PROTEGIDAS_ZONIFICADAS_4 = new ol.format.GeoJSON();
var features_AREAS_PROTEGIDAS_ZONIFICADAS_4 = format_AREAS_PROTEGIDAS_ZONIFICADAS_4.readFeatures(json_AREAS_PROTEGIDAS_ZONIFICADAS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAS_PROTEGIDAS_ZONIFICADAS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAS_PROTEGIDAS_ZONIFICADAS_4.addFeatures(features_AREAS_PROTEGIDAS_ZONIFICADAS_4);
var lyr_AREAS_PROTEGIDAS_ZONIFICADAS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAS_PROTEGIDAS_ZONIFICADAS_4, 
                style: style_AREAS_PROTEGIDAS_ZONIFICADAS_4,
                popuplayertitle: 'AREAS_PROTEGIDAS_ZONIFICADAS',
                interactive: true,
    title: 'AREAS_PROTEGIDAS_ZONIFICADAS<br />\
    <img src="styles/legend/AREAS_PROTEGIDAS_ZONIFICADAS_4_0.png" /> ZONA DE AMORTIGUAMIENTO<br />\
    <img src="styles/legend/AREAS_PROTEGIDAS_ZONIFICADAS_4_1.png" /> ZONA DE APROVECHAMIENTO DE RECURSOS NATURALES<br />\
    <img src="styles/legend/AREAS_PROTEGIDAS_ZONIFICADAS_4_2.png" /> ZONA DE INTERES HISTORICO CULTURAL<br />\
    <img src="styles/legend/AREAS_PROTEGIDAS_ZONIFICADAS_4_3.png" /> ZONA DE PROTECCION ESTRICTA<br />\
    <img src="styles/legend/AREAS_PROTEGIDAS_ZONIFICADAS_4_4.png" /> ZONA DE RECUPERACION NATURAL<br />\
    <img src="styles/legend/AREAS_PROTEGIDAS_ZONIFICADAS_4_5.png" /> ZONA DE USO EXTENSIVO EXTRACTIVO<br />\
    <img src="styles/legend/AREAS_PROTEGIDAS_ZONIFICADAS_4_6.png" /> ZONA DE USO EXTENSIVO EXTRACTIVO O CONSUNTIVO<br />\
    <img src="styles/legend/AREAS_PROTEGIDAS_ZONIFICADAS_4_7.png" /> ZONA DE USO INTENSIVO NO EXTRACTIVO<br />\
    <img src="styles/legend/AREAS_PROTEGIDAS_ZONIFICADAS_4_8.png" /> ZONA DE USO MODERADO<br />\
    <img src="styles/legend/AREAS_PROTEGIDAS_ZONIFICADAS_4_9.png" /> ZONA DE USOS ESPECIALES<br />' });
var format_PERIMETROSAREASPROTEGIDAS_5 = new ol.format.GeoJSON();
var features_PERIMETROSAREASPROTEGIDAS_5 = format_PERIMETROSAREASPROTEGIDAS_5.readFeatures(json_PERIMETROSAREASPROTEGIDAS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERIMETROSAREASPROTEGIDAS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERIMETROSAREASPROTEGIDAS_5.addFeatures(features_PERIMETROSAREASPROTEGIDAS_5);
var lyr_PERIMETROSAREASPROTEGIDAS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERIMETROSAREASPROTEGIDAS_5, 
                style: style_PERIMETROSAREASPROTEGIDAS_5,
                popuplayertitle: 'PERIMETROS AREAS PROTEGIDAS',
                interactive: true,
                title: '<img src="styles/legend/PERIMETROSAREASPROTEGIDAS_5.png" /> PERIMETROS AREAS PROTEGIDAS'
            });
var format_PREDIOSINRA_6 = new ol.format.GeoJSON();
var features_PREDIOSINRA_6 = format_PREDIOSINRA_6.readFeatures(json_PREDIOSINRA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PREDIOSINRA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PREDIOSINRA_6.addFeatures(features_PREDIOSINRA_6);
var lyr_PREDIOSINRA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PREDIOSINRA_6, 
                style: style_PREDIOSINRA_6,
                popuplayertitle: 'PREDIOS INRA',
                interactive: true,
                title: '<img src="styles/legend/PREDIOSINRA_6.png" /> PREDIOS INRA'
            });
var format_PREDIOSCPV_7 = new ol.format.GeoJSON();
var features_PREDIOSCPV_7 = format_PREDIOSCPV_7.readFeatures(json_PREDIOSCPV_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PREDIOSCPV_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PREDIOSCPV_7.addFeatures(features_PREDIOSCPV_7);
cluster_PREDIOSCPV_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PREDIOSCPV_7
});
var lyr_PREDIOSCPV_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PREDIOSCPV_7, 
                style: style_PREDIOSCPV_7,
                popuplayertitle: 'PREDIOS CPV',
                interactive: true,
                title: '<img src="styles/legend/PREDIOSCPV_7.png" /> PREDIOS CPV'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_DEPARTAMENTOS_1.setVisible(true);lyr_MUNICIPIOS_2.setVisible(true);lyr_AREAS_PROTEGIDAS_CATEGORIAS_3.setVisible(false);lyr_AREAS_PROTEGIDAS_ZONIFICADAS_4.setVisible(false);lyr_PERIMETROSAREASPROTEGIDAS_5.setVisible(true);lyr_PREDIOSINRA_6.setVisible(false);lyr_PREDIOSCPV_7.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_DEPARTAMENTOS_1,lyr_MUNICIPIOS_2,lyr_AREAS_PROTEGIDAS_CATEGORIAS_3,lyr_AREAS_PROTEGIDAS_ZONIFICADAS_4,lyr_PERIMETROSAREASPROTEGIDAS_5,lyr_PREDIOSINRA_6,lyr_PREDIOSCPV_7];
lyr_DEPARTAMENTOS_1.set('fieldAliases', {'departamen': 'departamen', });
lyr_MUNICIPIOS_2.set('fieldAliases', {'DEPTO': 'DEPTO', 'MUNICIPIO': 'MUNICIPIO', });
lyr_AREAS_PROTEGIDAS_CATEGORIAS_3.set('fieldAliases', {'NOMBRE AP': 'NOMBRE AP', 'NOMB CORTO': 'NOMB CORTO', 'CATEGORIA': 'CATEGORIA', 'BASE LEG': 'BASE LEG', });
lyr_AREAS_PROTEGIDAS_ZONIFICADAS_4.set('fieldAliases', {'NOMBRE AP': 'NOMBRE AP', 'NOMB_CORTO': 'NOMB_CORTO', 'CATEGORIA': 'CATEGORIA', 'BASE LEG': 'BASE LEG', 'ZONAS': 'ZONAS', 'DESCRIP': 'DESCRIP', });
lyr_PERIMETROSAREASPROTEGIDAS_5.set('fieldAliases', {'NOMBRE_AP_': 'NOMBRE_AP_', 'NOMB_CORTO': 'NOMB_CORTO', 'CATEGORIA': 'CATEGORIA', 'BASE_LEG': 'BASE_LEG', });
lyr_PREDIOSINRA_6.set('fieldAliases', {'COMUNIDAD': 'COMUNIDAD', });
lyr_PREDIOSCPV_7.set('fieldAliases', {'COMUNIDAD': 'COMUNIDAD', });
lyr_DEPARTAMENTOS_1.set('fieldImages', {'departamen': 'TextEdit', });
lyr_MUNICIPIOS_2.set('fieldImages', {'DEPTO': 'TextEdit', 'MUNICIPIO': 'TextEdit', });
lyr_AREAS_PROTEGIDAS_CATEGORIAS_3.set('fieldImages', {'NOMBRE AP': '', 'NOMB CORTO': '', 'CATEGORIA': 'TextEdit', 'BASE LEG': '', });
lyr_AREAS_PROTEGIDAS_ZONIFICADAS_4.set('fieldImages', {'NOMBRE AP': 'TextEdit', 'NOMB_CORTO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'BASE LEG': 'TextEdit', 'ZONAS': 'TextEdit', 'DESCRIP': 'TextEdit', });
lyr_PERIMETROSAREASPROTEGIDAS_5.set('fieldImages', {'NOMBRE_AP_': 'TextEdit', 'NOMB_CORTO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'BASE_LEG': 'TextEdit', });
lyr_PREDIOSINRA_6.set('fieldImages', {'COMUNIDAD': 'TextEdit', });
lyr_PREDIOSCPV_7.set('fieldImages', {'COMUNIDAD': 'TextEdit', });
lyr_DEPARTAMENTOS_1.set('fieldLabels', {'departamen': 'no label', });
lyr_MUNICIPIOS_2.set('fieldLabels', {'DEPTO': 'no label', 'MUNICIPIO': 'no label', });
lyr_AREAS_PROTEGIDAS_CATEGORIAS_3.set('fieldLabels', {'NOMBRE AP': 'inline label - always visible', 'NOMB CORTO': 'inline label - always visible', 'CATEGORIA': 'inline label - always visible', 'BASE LEG': 'inline label - always visible', });
lyr_AREAS_PROTEGIDAS_ZONIFICADAS_4.set('fieldLabels', {'NOMBRE AP': 'inline label - always visible', 'NOMB_CORTO': 'inline label - always visible', 'CATEGORIA': 'inline label - always visible', 'BASE LEG': 'inline label - always visible', 'ZONAS': 'inline label - always visible', 'DESCRIP': 'inline label - always visible', });
lyr_PERIMETROSAREASPROTEGIDAS_5.set('fieldLabels', {'NOMBRE_AP_': 'inline label - always visible', 'NOMB_CORTO': 'inline label - always visible', 'CATEGORIA': 'inline label - always visible', 'BASE_LEG': 'inline label - always visible', });
lyr_PREDIOSINRA_6.set('fieldLabels', {'COMUNIDAD': 'inline label - always visible', });
lyr_PREDIOSCPV_7.set('fieldLabels', {'COMUNIDAD': 'inline label - always visible', });
lyr_PREDIOSCPV_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});