import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Webhook endpoint (configurable via environment variable)
    // TODO: configurar URL do webhook oficial da GAP3 Assessoria para a Live
    const webhookUrl =
      process.env.NEXT_PUBLIC_LIVE_LEAD_WEBHOOK_URL ||
      process.env.LIVE_LEAD_WEBHOOK_URL ||
      process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL ||
      process.env.LEAD_WEBHOOK_URL;

    const payload = {
      ...body,
      source: "Live — Os Bastidores dos Restaurantes que Crescem",
      event: "Live Google Meet Quarta 19h",
      timestamp: new Date().toISOString(),
    };

    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!webhookResponse.ok) {
        console.warn("Live Lead Webhook warning: returned status", webhookResponse.status);
      }
    } else {
      console.log("Live Lead captured (Dev / Webhook not set):", payload);
    }

    return NextResponse.json(
      { success: true, message: "Inscrição na live confirmada com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao processar inscrição na live:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno ao processar inscrição." },
      { status: 500 }
    );
  }
}
