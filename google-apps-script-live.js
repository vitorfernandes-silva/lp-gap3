/**
 * Google Apps Script - Captura Automática de Leads da LIVE (GAP3 Assessoria)
 * 
 * Este código recebe os dados enviados pelo formulário da landing page da live (/live)
 * e salva automaticamente em uma planilha do Google Sheets.
 * 
 * ============================================================================
 * INSTRUÇÕES DE IMPLANTAÇÃO PASSO A PASSO:
 * ============================================================================
 * 
 * 1. Abra o Google Sheets (https://sheets.new) e crie uma nova planilha (ex: "Leads Live GAP3").
 * 2. No menu superior da planilha, clique em "Extensões" > "Apps Script".
 * 3. Apague qualquer código padrão existente no editor e cole TODO este código.
 * 4. Clique no ícone de salvar (ou pressione Ctrl + S).
 * 5. No canto superior direito, clique no botão azul "Implantar" > "Nova implantação".
 * 6. Na janela que abrir:
 *    - Clique no ícone de engrenagem (Selecione o tipo) e escolha "App da Web".
 *    - Descrição: "Webhook Live GAP3"
 *    - Executar como: "Eu" (seu e-mail)
 *    - Quem pode acessar: "Qualquer pessoa" (OBRIGATÓRIO para permitir envio via API)
 * 7. Clique em "Implantar" e autorize as permissões solicitadas pela sua conta Google.
 * 8. Copie a "URL do app da Web" gerada (exemplo: https://script.google.com/macros/s/AKfycb.../exec).
 * 9. No arquivo .env.local (e nas variáveis da Vercel/hospedagem), adicione:
 *    LIVE_LEAD_WEBHOOK_URL="URL_COPIADA_AQUI"
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Se a planilha estiver vazia, cria automaticamente o cabeçalho estilizado
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Data / Hora",
        "Nome Completo",
        "WhatsApp / Telefone",
        "E-mail",
        "Nome do Restaurante",
        "Segmento do Restaurante",
        "Faturamento Mensal",
        "Principal Desafio",
        "Origem / Evento"
      ]);

      // Formatação visual do cabeçalho (Dourado GAP3 com texto em negrito)
      sheet.getRange(1, 1, 1, 9)
        .setFontWeight("bold")
        .setBackground("#FFAE00")
        .setFontColor("#0C1014")
        .setHorizontalAlignment("center")
        .setVerticalAlignment("middle");

      sheet.setRowHeight(1, 38);
    }

    // Processa os dados brutos da requisição HTTP POST (JSON enviado pela API Next.js)
    var data = JSON.parse(e.postData.contents);

    // Formata a data/hora para o fuso horário de Brasília (GMT-3)
    var formattedDate = data.timestamp
      ? Utilities.formatDate(new Date(data.timestamp), "GMT-03:00", "dd/MM/yyyy HH:mm:ss")
      : Utilities.formatDate(new Date(), "GMT-03:00", "dd/MM/yyyy HH:mm:ss");

    var fullName = data.fullName || "Não informado";
    var whatsapp = data.whatsapp || "Não informado";
    var email = data.email || "Não informado";
    var restaurantName = data.restaurantName || "Não informado";
    var segment = data.segment || "Não informado";
    var monthlyRevenue = data.monthlyRevenue || "Não informado";
    var mainChallenge = data.mainChallenge || "Não informado";
    var source = data.source || "Live — Os Bastidores dos Restaurantes que Crescem";

    // Adiciona uma nova linha com todos os dados do lead
    sheet.appendRow([
      formattedDate,
      fullName,
      whatsapp,
      email,
      restaurantName,
      segment,
      monthlyRevenue,
      mainChallenge,
      source
    ]);

    // Ajusta alinhamentos
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1).setHorizontalAlignment("center"); // Data/Hora
    sheet.getRange(lastRow, 3).setHorizontalAlignment("center"); // WhatsApp
    sheet.getRange(lastRow, 7).setHorizontalAlignment("center"); // Faturamento

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", message: "Inscrição da live registrada na planilha com sucesso!" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Suporte a teste GET via navegador
function doGet(e) {
  return ContentService
    .createTextOutput("GAP3 Live Lead Webhook Apps Script ativo e operacional!")
    .setMimeType(ContentService.MimeType.TEXT);
}
