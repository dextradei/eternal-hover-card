var originalWidth;

$(function() {
	originalWidth = $("#image").width();
	$("#slider").slider({
		value: 50,
		min: 30,
		max: 100,
		animate: true,
		slide: function (event, ui) {
			updateWidth(ui.value)
		},
		change: function(event, ui) {
			chrome.storage.sync.set({"cardSize":ui.value}, function() {
				//console.log("saved: " + ui.value);
			});
		}
	});
	
	chrome.storage.sync.get({"cardSize":50},function(result) {
		//console.log("loaded: " + result.cardSize + "%");
		updateWidth(result.cardSize);
		$("#slider").slider("value", result.cardSize);
	});
});

function updateWidth(cardSize) {
	var newWidth = originalWidth * (cardSize / 100);
	$("#infoSlider").text(cardSize + '%');
	//console.log("new width: " + newWidth + ", " + cardSize + "%");
	$("#image").width(newWidth);
}