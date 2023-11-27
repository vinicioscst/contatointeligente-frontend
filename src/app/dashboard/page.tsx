import { Metadata, ResolvingMetadata } from "next";
import DashboardContainer from "@/components/dashboard/DashboardContainer";

export function generateMetadata(parent: ResolvingMetadata): Metadata {
  return {
    title: "Dashboard | Contato Inteligente",
  };
}

export default function Dashboard() {
  return <DashboardContainer  />
}
