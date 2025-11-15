import { Tag } from "../Tag.model";

export class TagBuilder {
  private tag_id?: number;
  private name!: string;

  setTagId(id: number): this {
    this.tag_id = id;
    return this;
  }

  setName(name: string): this {
    this.name = name;
    return this;
  }

  build(): Tag {
    if (!this.name) {
      throw new Error("missing required fields!");
    }

    return new Tag(this.tag_id ?? 0, this.name);
  }
}
