export interface TemplateData {
  id: string;
  title: string;
  description: string;
  fields: Field[];
}

export interface Field {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  required: boolean;
}
