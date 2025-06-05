var size = 0;
var placement = 'point';

var style_PERIMETROSAREASPROTEGIDAS_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#00bc35";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.7999999999999998;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("NOMBRE_AP_") !== null && resolution > 0 && resolution < 210) {
        labelText = String(feature.get("NOMBRE_AP_"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(138,184,33,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
