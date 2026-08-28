import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";

export interface ExperienceEntry {
  id: string;
  title: string;
  organization: string;
  dateRange: string;
  description: string;
  stack: string[];
}

export interface EducationEntry {
  id: string;
  title: string;
  institution: string;
  dateRange: string;
  description?: string;
}

interface CareerSectionProps {
  experienceTitle: string;
  roleAt: string;
  experienceEntries: ExperienceEntry[];
  educationTitle: string;
  educationEntries: EducationEntry[];
}

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight text-[#0e6a6c] sm:text-4xl dark:text-gray-100">
      {title}
    </h2>
  );
}

export function CareerSection({
  experienceTitle,
  roleAt,
  experienceEntries,
  educationTitle,
  educationEntries,
}: CareerSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
      <section>
        <SectionHeading title={experienceTitle} />

        <div className="bg-card text-card-foreground rounded-xl border shadow-sm mt-6 px-6">
          <Accordion type="single" collapsible>
            {experienceEntries.map((entry) => (
              <AccordionItem key={entry.id} value={entry.id}>
                <AccordionTrigger
                  hideChevron
                  className="flex-col items-start gap-1"
                >
                  <span className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{entry.title}</h3>
                    <ChevronDown className="text-muted-foreground size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </span>
                  <span className="text-muted-foreground text-sm font-normal">
                    {roleAt} {entry.organization}
                    <span className="mx-2 text-muted-foreground/60">•</span>
                    {entry.dateRange}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    {entry.description}
                  </p>
                  {entry.stack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {entry.stack.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section>
        <SectionHeading title={educationTitle} />

        <div className="bg-card text-card-foreground rounded-xl border shadow-sm mt-6 px-6">
          <Accordion type="single" collapsible>
            {educationEntries.map((entry) => (
              <AccordionItem key={entry.id} value={entry.id}>
                <AccordionTrigger
                  hideChevron
                  className="flex-col items-start gap-1"
                >
                  <span className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{entry.title}</h3>
                    <ChevronDown className="text-muted-foreground size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </span>
                  <span className="text-muted-foreground text-sm font-normal">
                    {entry.institution}
                    <span className="mx-2 text-muted-foreground/60">•</span>
                    {entry.dateRange}
                  </span>
                </AccordionTrigger>
                {entry.description ? (
                  <AccordionContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      {entry.description}
                    </p>
                  </AccordionContent>
                ) : null}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
