import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface StepItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}