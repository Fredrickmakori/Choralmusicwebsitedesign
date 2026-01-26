export type UserRole = "buyer" | "composer" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Composition {
  id: string;
  title: string;
  composerId: string;
  composerName: string;
  price: number;
  description: string;
  voiceParts: string[];
  difficulty: "Easy" | "Intermediate" | "Advanced";
  duration: string;
  language: string;
  accompaniment: string;
  dateAdded: string;
  pdfUrl?: string;
}

export interface Purchase {
  id: string;
  compositionId: string;
  buyerId: string;
  purchaseDate: string;
  price: number;
}

export interface CartItem {
  composition: Composition;
  quantity: number;
}