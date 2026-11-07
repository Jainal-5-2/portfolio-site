import type { Metadata } from "next";
import { ResumeEmbed } from "@/components/ResumeEmbed";

export const metadata: Metadata = {
  title: "Résumé",
};

export default function ResumePage() {
  return <ResumeEmbed />;
}