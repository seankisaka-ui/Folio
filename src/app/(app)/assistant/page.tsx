import { AssistantPanel } from "@/components/assistant-panel";

export default function AssistantPage() {
  const enabled = Boolean(process.env.OPENAI_API_KEY);
  return <div className="page"><header className="page-header"><div><p className="eyebrow">Optional assistance</p><h1>Assistant</h1><p>Use plain language to find saved records or prepare a test-score entry for confirmation.</p></div></header><AssistantPanel enabled={enabled} /></div>;
}
