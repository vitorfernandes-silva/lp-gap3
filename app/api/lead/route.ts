import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Webhook endpoint (configurable via environment variable)
    // TODO: configurar URL do webhook oficial da GAP3 Assessoria
    const webhookUrl =
      process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL ||
      process.env.LEAD_WEBHOOK_URL;

    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...body,
          source: "GAP3 Landing Page",
          timestamp: new Date().toISOString(),
        }),
      });

      if (!webhookResponse.ok) {
        console.warn("Webhook warning: endpoint returned status", webhookResponse.status);
      }
    } else {
      console.log("Lead captured (Dev / Webhook not set):", body);
    }

    return NextResponse.json(
      { success: true, message: "Lead recebido com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao processar lead:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno ao enviar formulário." },
      { status: 500 }
    );
  }
}
