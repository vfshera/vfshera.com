import { APP } from "@/data";

// set page title
export function setTitle(title: string) {
  return title === "" ? APP.name : APP.name + " - " + title;
}

//set page sescription
export function setDescription(desc: string) {
  return desc === "" ? APP.description : desc;
}
