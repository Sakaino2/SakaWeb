import type { DesignProject, DevProject } from "@/models/collections.model";
import type { Locale } from "@/i18n";

export function filterDevProjects(
  devProjects: DevProject[],
  lang: Locale
): DevProject[] {
  return devProjects.reduce((acc: DevProject[], project) => {
    if (project.data.show && project.data.lang === lang) {
      acc.push(project);
    }
    return acc;
  }, []);
}

export function filterDesignProjects(
  designProjects: DesignProject[],
  lang: Locale
): DesignProject[] {
  return designProjects.reduce((acc: DesignProject[], project) => {
    if (project.data.show && project.data.lang === lang) {
      acc.push(project);
    }
    return acc;
  }, []);
}
