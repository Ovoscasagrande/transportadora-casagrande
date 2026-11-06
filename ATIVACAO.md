# TRANSPORTADORA CASAGRANDE — Guia de ativação (5 minutos)

## O que já está pronto
- ✅ Planilha-mãe criada: **TRANSPORTADORA CASAGRANDE — BD** (6 abas: GASTOS, RECEBIMENTOS, TIPOS GASTO, TIPOS RECEBIMENTO, VEICULOS, MOTORISTAS)
- ✅ Sistema completo (index.html) — 4 abas com senha
- ✅ Backend (Code.gs) — salva tudo na planilha e as fotos no Drive

## Passo a passo (uma vez só)

### 1. Abrir o editor de script
Abra a planilha **TRANSPORTADORA CASAGRANDE — BD** → menu **Extensões → Apps Script**.

### 2. Colar o backend
Apague tudo que estiver no editor (`Code.gs`) e cole o conteúdo do arquivo **Code.gs**.
Clique em **Salvar** (ícone de disquete).

### 3. Criar a implantação
Clique em **Implantar → Nova implantação** (botão no topo direito).
- No ícone de engrenagem, escolha **Aplicativo da web**
- **Descrição**: transportadora v1
- **Executar como**: Eu (seu e-mail)
- **Quem pode acessar**: **Qualquer pessoa**
- Clique em **Implantar** → **Autorizar acesso** → escolha sua conta → **Avançado → Ir para o projeto (não seguro)** → **Permitir**

### 4. Copiar a URL
Ao terminar, aparece a **URL do aplicativo da web** (termina em `/exec`).
**Copie essa URL e me mande aqui no chat.** Com ela eu:
1. Publico o sistema no GitHub Pages (https://ovoscasagrande.github.io/transportadora-casagrande/)
2. Te entrego o LINK FINAL com a configuração embutida — é esse link que você joga no grupo dos funcionários. Quem abrir já entra conectado, sem colar nada.

### 5. Teste rápido
Abra o link final → **Incluir Gasto** (senha 202030) → cadastre um veículo antes em **Gerenciar Cadastros** (senha 404050) → lance um gasto → confira na planilha (aba GASTOS) e a foto na pasta **COMPROVANTES** do seu Drive.

## Como os funcionários usam
- **Um link único** para todos: cada aba abre com a senha dela.
- Dashboard 101020 · Gasto 202030 · Recebimento 303040 · Cadastros 404050
- No celular, o campo de foto abre a câmera direto.

## Onde ficam as coisas
| O quê | Onde |
|---|---|
| Gastos e recebimentos | Abas GASTOS / RECEBIMENTOS da planilha |
| Tipos com campos extras (ex: DIESEL → POSTO, LITROS, KM) | Abas TIPOS GASTO / TIPOS RECEBIMENTO |
| Veículos e motoristas | Abas VEICULOS / MOTORISTAS |
| Fotos dos comprovantes | Pasta **COMPROVANTES** no seu Google Drive |
| Logo no sistema | Arquivo **LOGO.png** dentro da pasta **LOGO-CASAGRANDE** no Drive (aparece no menu e de fundo no dashboard) |

## Para trocar uma senha
As senhas ficam como hash no HTML. Me avise qual quer trocar que eu regenero e publico de novo.
