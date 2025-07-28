import Dashboard from "@/components/dashboard";
import Graphs from "@/components/graphs";

export default function Home() {
  return (
    <div className="flex gap-4 flex-row">
      <Dashboard />
      <Graphs />
    </div>
  );
}
