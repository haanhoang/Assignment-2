var rank_country = "bar_chart_rank.json";
var line_state = "line_chart_state.json";
var line_type = "line_chart_type.json";

vegaEmbed("#rank_country", rank_country).then(function(result) {}).catch(console.error);
vegaEmbed("#line_state", line_state).then(function(result) {}).catch(console.error);
vegaEmbed("#line_type", line_type).then(function(result) {}).catch(console.error);