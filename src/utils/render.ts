import Block from "../services/block";

export default function render(query: string, block: Block) {
  const root: HTMLElement | null = document.querySelector(query);

  if (root) {
    root.appendChild(block.getContent());
  }
} 
