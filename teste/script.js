document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        // Preencher o cabeçalho
        document.getElementById("nome").textContent = data.nome;
        document.getElementById("slogan").textContent = data.slogan;
  
        // Preencher a seção Sobre Mim
        document.getElementById("foto").src = data.foto;
        document.getElementById("descricao").textContent = data.descricao;
        const redesSociais = document.getElementById("redes-sociais");
        for (let key in data.redes_sociais) {
          const link = document.createElement("a");
          link.href = data.redes_sociais[key];
          link.textContent = key.charAt(0).toUpperCase() + key.slice(1);
          link.target = "_blank";
          redesSociais.appendChild(link);
        }
  
        // Preencher a seção Habilidades
        const habilidadesLista = document.getElementById("habilidades-lista");
        data.habilidades.forEach(habilidade => {
          const habilidadeItem = document.createElement("div");
          const img = document.createElement("img");
          img.src = habilidade.icone;
          img.alt = habilidade.tecnologia;
          habilidadeItem.appendChild(img);
          habilidadesLista.appendChild(habilidadeItem);
        });
  
        // Preencher a seção Formação Acadêmica
        const formacaoLista = document.getElementById("formacao-lista");
        data.formacao.forEach(formacao => {
          const formacaoItem = document.createElement("div");
          formacaoItem.innerHTML = `<strong>${formacao.curso}</strong> - ${formacao.instituicao} (${formacao.ano})`;
          formacaoLista.appendChild(formacaoItem);
        });
  
        // Preencher a seção Experiência
        const experienciaLista = document.getElementById("experiencia-lista");
        data.experiencia.forEach(experiencia => {
          const experienciaItem = document.createElement("div");
          experienciaItem.innerHTML = `<strong>${experiencia.cargo}</strong> na ${experiencia.empresa} (${experiencia.periodo}) - Projeto: ${experiencia.projeto}`;
          experienciaLista.appendChild(experienciaItem);
        });
  
        // Preencher a seção Contato
        document.getElementById("instrucoes-contato").textContent = data.contato.instrucoes;
      })
      .catch(error => console.error('Erro ao carregar o JSON:', error));
  });