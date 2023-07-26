export default function render(query: string, block) {
  const root: HTMLElement | null = document.querySelector(query);

  if(root){
    root.appendChild(block.getContent());
  }
} 
