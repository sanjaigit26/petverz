export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  items: string[];
  status: "done" | "active" | "upcoming";
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel?: string;
}
