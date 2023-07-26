import render from "./render";

export default function multiRender(data: any): void{
  Object.keys(data).forEach((path)=>{
    data[path].forEach((item: any)=>{
      render(path, item);
    })
  })
}
