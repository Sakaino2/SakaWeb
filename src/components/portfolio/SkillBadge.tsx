import { Badge } from "@/components/ui/badge";
import { IconType } from "react-icons/lib";

interface Props {
  label: string;
}

export function SkillBadge({ label }: Props) {
  return <Badge variant="secondary">{label}</Badge>;
}
