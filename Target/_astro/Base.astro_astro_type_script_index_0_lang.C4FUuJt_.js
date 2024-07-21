const p = "modulepreload",
	f = function (o) {
		return "/" + o;
	},
	c = {},
	h = function (l, i, E) {
		let a = Promise.resolve();
		if (i && i.length > 0) {
			document.getElementsByTagName("link");
			const n = document.querySelector("meta[property=csp-nonce]"),
				r = n?.nonce || n?.getAttribute("nonce");
			a = Promise.all(
				i.map((e) => {
					if (((e = f(e)), e in c)) return;
					c[e] = !0;
					const s = e.endsWith(".css"),
						d = s ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${e}"]${d}`)) return;
					const t = document.createElement("link");
					if (
						((t.rel = s ? "stylesheet" : p),
						s || ((t.as = "script"), (t.crossOrigin = "")),
						(t.href = e),
						r && t.setAttribute("nonce", r),
						document.head.appendChild(t),
						s)
					)
						return new Promise((u, m) => {
							t.addEventListener("load", u),
								t.addEventListener("error", () =>
									m(
										new Error(
											`Unable to preload CSS for ${e}`,
										),
									),
								);
						});
				}),
			);
		}
		return a
			.then(() => l())
			.catch((n) => {
				const r = new Event("vite:preloadError", { cancelable: !0 });
				if (
					((r.payload = n),
					window.dispatchEvent(r),
					!r.defaultPrevented)
				)
					throw n;
			});
	};
(
	await h(async () => {
		const { initializeApp: o } = await import("./index.esm.BoasBFnU.js");
		return { initializeApp: o };
	}, [])
).initializeApp({
	apiKey: "AIzaSyCqdOxv8WlI90ZeLZHjPOXtm0BWib935gM",
	authDomain: "souqrs.firebaseapp.com",
	databaseURL: "https://souqrs-default-rtdb.firebaseio.com",
	projectId: "souqrs",
	storageBucket: "souqrs.appspot.com",
	messagingSenderId: "686609704824",
	appId: "1:686609704824:web:f90dcd21825de0d2744a8d",
	measurementId: "G-MEVM3LGWJH",
});
//# sourceMappingURL=Base.astro_astro_type_script_index_0_lang.C4FUuJt_.js.map
