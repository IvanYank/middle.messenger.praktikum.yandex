export default function timeMessage(time: string | undefined){
  if(time == undefined){
    return '';
  } else {
    // const now = new Date();

    // const year = time.split('T')[0].split('-')[0];
    // const month = time.split('T')[0].split('-')[1];
    // const day = time.split('T')[0].split('-')[2];
  
    const hours = time.split('T')[1].split('+')[0].split(':')[0];
    const minute = time.split('T')[1].split('+')[0].split(':')[1];
    // const second = time.split('T')[1].split('+')[0].split(':')[2];
  
    return `${hours}:${minute}`;
  }
}
