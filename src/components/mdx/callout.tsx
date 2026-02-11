import { cn } from "@/lib/utils";

interface CalloutProps {
  type?: "info" | "warning" | "tip" | "danger";
  children: React.ReactNode;
}

const icons: Record<string, string> = {
  info: "💡",
  warning: "⚠️",
  tip: "✅",
  danger: "🚨",
};

const styles: Record<string, string> = {
  info: "border-blue-500/50 bg-blue-500/10",
  warning: "border-yellow-500/50 bg-yellow-500/10",
  tip: "border-green-500/50 bg-green-500/10",
  danger: "border-red-500/50 bg-red-500/10",
};

export function Callout({ type = "info", children }: CalloutProps) {
  return (
    <div
      className={cn(
        "my-6 rounded-lg border-l-4 px-4 py-3",
        styles[type]
      )}
    >
      <div className="flex gap-2">
        <span className="shrink-0">{icons[type]}</span>
        <div className="prose-sm [&>p]:m-0">{children}</div>
      </div>
    </div>
  );
}
