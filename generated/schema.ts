// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class CourseItem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CourseItem entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CourseItem must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CourseItem", id.toString(), this);
    }
  }

  static load(id: string): CourseItem | null {
    return changetype<CourseItem | null>(store.get("CourseItem", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get courseId(): Bytes {
    let value = this.get("courseId");
    return value!.toBytes();
  }

  set courseId(value: Bytes) {
    this.set("courseId", Value.fromBytes(value));
  }

  get author(): string {
    let value = this.get("author");
    return value!.toString();
  }

  set author(value: string) {
    this.set("author", Value.fromString(value));
  }

  get status(): string {
    let value = this.get("status");
    return value!.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }
}

export class CourseAuthor extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CourseAuthor entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CourseAuthor must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CourseAuthor", id.toString(), this);
    }
  }

  static load(id: string): CourseAuthor | null {
    return changetype<CourseAuthor | null>(store.get("CourseAuthor", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get authorId(): Bytes {
    let value = this.get("authorId");
    return value!.toBytes();
  }

  set authorId(value: Bytes) {
    this.set("authorId", Value.fromBytes(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }
}

export class PurchasedItem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PurchasedItem entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PurchasedItem must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PurchasedItem", id.toString(), this);
    }
  }

  static load(id: string): PurchasedItem | null {
    return changetype<PurchasedItem | null>(store.get("PurchasedItem", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get courseId(): Bytes {
    let value = this.get("courseId");
    return value!.toBytes();
  }

  set courseId(value: Bytes) {
    this.set("courseId", Value.fromBytes(value));
  }

  get buyer(): Bytes {
    let value = this.get("buyer");
    return value!.toBytes();
  }

  set buyer(value: Bytes) {
    this.set("buyer", Value.fromBytes(value));
  }
}
