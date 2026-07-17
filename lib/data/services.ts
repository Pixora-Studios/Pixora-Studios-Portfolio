export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  semanticTags: string[];
}

export const services: ServiceCategory[] = [
  {
    id: "websites",
    number: "01",
    title: "Your Digital Front Door, Built Properly.",
    description: "Custom websites designed around your brand, customers and business goals.",
    semanticTags: ["custom website development", "website design", "business websites"]
  },
  {
    id: "experiences",
    number: "02",
    title: "Make the Customer Journey Feel Less Like Work.",
    description: "Menus, ordering, booking and customer-facing experiences built around your business.",
    semanticTags: ["restaurant digital systems", "QR menu experiences", "ordering workflows", "booking systems"]
  },
  {
    id: "systems",
    number: "03",
    title: "If Your Workflow Is Unique, Your Software Probably Should Be Too.",
    description: "Dashboards, internal tools and custom software built around how your team actually works.",
    semanticTags: ["custom business software", "business management systems", "custom dashboards"]
  },
  {
    id: "products",
    number: "04",
    title: "From Idea to Something People Can Actually Use.",
    description: "Mobile apps, web applications and digital products built for real use cases.",
    semanticTags: ["mobile applications", "web applications", "digital products"]
  },
  {
    id: "automation",
    number: "05",
    title: "Less Repetitive Work. More Things That Just Happen.",
    description: "Automation, AI-enabled workflows and integrations that connect your digital systems.",
    semanticTags: ["workflows", "integrations", "automations"]
  }
];
