import Block from "../services/block";
import render from "./render";

type data = Record<string, Block[]>

export default function multiRender(data: data): void{
  Object.keys(data).forEach((path)=>{
    data[path].forEach((item: any)=>{
      render(path, item);
    })
  })
}
