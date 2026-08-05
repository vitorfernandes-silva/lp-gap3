/**
 * Google Apps Script - Captura Automática de Leads GAP3 Assessoria
 * 
 * Este código recebe os dados enviados pelo formulário da landing page (rota /analise)
 * e salva automaticamente em uma planilha do Google Sheets.
 * 
 * INSTRUÇÕES DE IMPLANTAÇÃO PASSO A PASSO:
 * 
 * 1. Abra o Google Sheets (planilhas.google.com) e crie uma nova planilha (ex: "Leads GAP3 Assessoria").
 * 2. No menu superior da planilha, clique em "Extensões" > "Apps Script".
 * 3. Apague qualquer código padrão existente no editor e cole TODO este código.
 * 4. Clique no ícone de salvar (ou pressione Ctrl + S).
 * 5. No canto superior direito, clique no botão azul "Implantar" > "Nova implantação".
 * 6. Na janela que se abre:
 *    - Clique no ícone de engrenagem (Selecione o tipo) e escolha "App da Web".
 *    - Descrição: "Webhook Captura de Leads GAP3"
 *    - Executar como: "Eu" (seu e-mail)
 *    - Quem pode acessar: "Qualquer pessoa" (Importante para permitir o recebimento via API)
 * 7. Clique em "Implantar" e conceda as permissões solicitadas pela sua conta Google.
 * 8. Copie a "URL do app da Web" gerada (exemplo: https://script.google.com/macros/s/AKfycbx.../exec).
 * 9. No seu projeto Next.js (ou servidor Vercel / hospedagem), adicione essa URL nas variáveis de ambiente:
 *    LEAD_WEBHOOK_URL="SUA_URL_COPIADA_AQUI"
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Se a planilha estiver vazia, cria automaticamente a linha de cabeçalho formatada
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Data / Hora",
        "Nome Completo",
        "E-mail",
        "WhatsApp / Telefone",
        "Nome da Empresa",
        "Faturamento Mensal",
        "Segmento de Mercado",
        "Disposição para Anúncios (R$ 1.500/mês)",
        "Origem do Lead"
      ]);
      
      // Formatação visual do cabeçalho (Dourado GAP3 com texto em negrito)
      sheet.getRange(1, 1, 1, 9)
        .setFontWeight("bold")
        .setBackground("#F3A200")
        .setFontColor("#0C1014")
        .setHorizontalAlignment("center");
        
      sheet.setRowHeight(1, 35);
    }

    // Processa os dados brutos da requisição HTTP POST (JSON enviado pela API Next.js)
    var data = JSON.parse(e.postData.contents);

    // Formata a data/hora para o fuso horário de Brasília
    var formattedDate = data.timestamp 
      ? Utilities.formatDate(new Date(data.timestamp), "GMT-03:00", "dd/MM/yyyy HH:mm:ss")
      : Utilities.formatDate(new Date(), "GMT-03:00", "dd/MM/yyyy HH:mm:ss");

    var fullName = data.fullName || "Não informado";
    var email = data.email || "Não informado";
    var whatsapp = data.whatsapp || "Não informado";
    var companyName = data.companyName || "Não informado";
    var monthlyRevenue = data.monthlyRevenue || "Não informado";
    var segment = data.segment || "Não informado";
    var adInvestment = data.adInvestment || "Não informado";
    var source = data.source || "GAP3 Landing Page";

    // Adiciona uma nova linha com todas as respostas do formulário
    sheet.appendRow([
      formattedDate,
      fullName,
      email,
      whatsapp,
      companyName,
      monthlyRevenue,
      segment,
      adInvestment,
      source
    ]);

    // Ajusta o alinhamento das colunas inseridas
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1).setHorizontalAlignment("center"); // Data
    sheet.getRange(lastRow, 4).setHorizontalAlignment("center"); // WhatsApp

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", message: "Lead gravado com sucesso na planilha!" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Suporte opcional a teste GET via navegador
function doGet(e) {
  return ContentService
    .createTextOutput("GAP3 Lead Webhook Apps Script ativo e operacional!")
    .setMimeType(ContentService.MimeType.TEXT);
}
