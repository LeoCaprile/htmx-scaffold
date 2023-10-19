(function () {
	const ws = new WebSocket("ws://localhost:3200/ws");

	ws.addEventListener("message", function (event) {
		window.location.reload();
	});
})();
