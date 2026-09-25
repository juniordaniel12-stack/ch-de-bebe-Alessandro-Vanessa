// Substitua pela URL gerada no Google Apps Script
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwgxm3A1PFW99Ax5KW454dCegyIRlEdDu7udCx_49yMgwHDkDxutt3utyqNV07aotV_DQ/exec"; 
let nomeConvidado = "";

function avancarParaPresentes() {
  const nomeInput = document.getElementById("input-nome").value.trim();
  
  if (!nomeInput) {
    alert("Por favor, digite seu nome.");
    return;
  }
  
  nomeConvidado = nomeInput;
  document.getElementById("etapa-nome").classList.add("hidden");
  document.getElementById("etapa-presente").classList.remove("hidden");
}

function enviarDados() {
  const presenteSelecionado = document.getElementById("select-presente").value;

  fetch(SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: nomeConvidado,
      presente: presenteSelecionado
    })
  })
  .then(() => {
    document.getElementById("etapa-presente").classList.add("hidden");
    document.getElementById("etapa-sucesso").classList.remove("hidden");
  })
  .catch(error => {
    alert("Ocorreu um erro ao salvar. Tente novamente.");
    console.error(error);
  });
}