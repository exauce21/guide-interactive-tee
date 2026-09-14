(function () {
	"use strict";

	var form = document.getElementById("feedback-form");
	var status = document.getElementById("feedback-status");
	if (!form || !status) return;

	form.addEventListener("submit", function (event) {
		event.preventDefault();
		if (!form.reportValidity()) return;

		var button = form.querySelector('button[type="submit"]');
		button.disabled = true;
		status.className = "v3-feedback-status is-sending";
		status.textContent = "Envoi en cours…";

		fetch(form.dataset.endpoint, {
			method: "POST",
			body: new FormData(form),
			headers: { Accept: "application/json" },
		})
			.then(function (response) {
				return response.text().then(function (body) {
					var result = {};
					try {
						result = body ? JSON.parse(body) : {};
					} catch (error) {
						result = {};
					}
					if (!response.ok || result.success === false) {
						throw new Error("feedback-send-failed");
					}
					return result;
				});
			})
			.then(function () {
				form.reset();
				status.className = "v3-feedback-status is-success";
				status.textContent = "Merci, votre commentaire a bien été transmis à l’équipe TÉÉ.";
			})
			.catch(function () {
				status.className = "v3-feedback-status is-error";
				status.textContent = "L’envoi a échoué. Veuillez réessayer ou écrire directement à info@teenational.ca.";
			})
			.finally(function () {
				button.disabled = false;
			});
	});
})();
