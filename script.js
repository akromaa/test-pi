document.getElementById("sign-in-button").addEventListener("click", () => {
  Pi.authenticate(
    ["username", "payment"],
    onIncompletePaymentFound
  ).then(function(auth) {
    document.getElementById("output").textContent = `Bienvenue ${auth.user.username}`;
    console.log("User info", auth);
  }).catch(function(error) {
    console.error("Échec de l'authentification", error);
  });
});

function onIncompletePaymentFound(payment) {
  console.log("Paiement incomplet trouvé :", payment);
  // Ici tu pourrais relancer la confirmation ou l’annuler.
}
