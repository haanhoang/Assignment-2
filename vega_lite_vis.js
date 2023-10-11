var rank_country = "bar_chart_rank.json";
var line_state = "line_chart_state.json";
var line_type = "line_chart_type.json";
var scatterplot_expenditure = "scatterplot_expenditure.json";
var map_lga = "map_lga.json";
var scatterplot_map_combined = "scatterplot_map_combined.json"

vegaEmbed("#rank_country", rank_country).then(function(result) {}).catch(console.error);
vegaEmbed("#line_state", line_state).then(function(result) {}).catch(console.error);
vegaEmbed("#line_type", line_type).then(function(result) {}).catch(console.error);
vegaEmbed("#scatterplot_expenditure", scatterplot_expenditure).then(function(result) {}).catch(console.error);
vegaEmbed("#map_lga", map_lga).then(function(result) {}).catch(console.error);
vegaEmbed("#scatterplot_map_combined", scatterplot_map_combined).then(function(result) {}).catch(console.error);