import render from "./render";

export default function multiRender(data): void{
  Object.keys(data).forEach((path)=>{
    data[path].forEach((item)=>{
      render(path, item);
    })
  })
}
