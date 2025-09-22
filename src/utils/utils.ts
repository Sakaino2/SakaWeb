import type { DesignProject, DevProject } from "@/models/collections.model";

export function filterDevProjects(devProjects: DevProject[]): DevProject[] {
  return devProjects.reduce((acc: DevProject[], project) => {
    if (project.data.show) {
      acc.push(project);
    }
    return acc;
  }, []);
}

export function filterDesignProjects(
  designProjects: DesignProject[]
): DesignProject[] {
  return designProjects.reduce((acc: DesignProject[], project) => {
    if (project.data.show) {
      acc.push(project);
    }
    return acc;
  }, []);
}
