import { ITag } from "./Interface/ITag";

export class Tag implements ITag {
  tag_id: number;
  name: string;

  constructor(tag_id: number, name: string) {
    this.tag_id = tag_id;
    this.name = name;
  }
}
