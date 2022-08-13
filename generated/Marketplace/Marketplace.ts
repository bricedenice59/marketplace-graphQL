// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CourseActivated extends ethereum.Event {
  get params(): CourseActivated__Params {
    return new CourseActivated__Params(this);
  }
}

export class CourseActivated__Params {
  _event: CourseActivated;

  constructor(event: CourseActivated) {
    this._event = event;
  }

  get courseId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class CourseAdded extends ethereum.Event {
  get params(): CourseAdded__Params {
    return new CourseAdded__Params(this);
  }
}

export class CourseAdded__Params {
  _event: CourseAdded;

  constructor(event: CourseAdded) {
    this._event = event;
  }

  get courseId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get courseAuthorId(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class CourseAuthorAdded extends ethereum.Event {
  get params(): CourseAuthorAdded__Params {
    return new CourseAuthorAdded__Params(this);
  }
}

export class CourseAuthorAdded__Params {
  _event: CourseAuthorAdded;

  constructor(event: CourseAuthorAdded) {
    this._event = event;
  }

  get courseAuthorId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get author(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class CourseAuthorAddressChanged extends ethereum.Event {
  get params(): CourseAuthorAddressChanged__Params {
    return new CourseAuthorAddressChanged__Params(this);
  }
}

export class CourseAuthorAddressChanged__Params {
  _event: CourseAuthorAddressChanged;

  constructor(event: CourseAuthorAddressChanged) {
    this._event = event;
  }

  get previousAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class CourseDeactivated extends ethereum.Event {
  get params(): CourseDeactivated__Params {
    return new CourseDeactivated__Params(this);
  }
}

export class CourseDeactivated__Params {
  _event: CourseDeactivated;

  constructor(event: CourseDeactivated) {
    this._event = event;
  }

  get courseId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class CoursePurchased extends ethereum.Event {
  get params(): CoursePurchased__Params {
    return new CoursePurchased__Params(this);
  }
}

export class CoursePurchased__Params {
  _event: CoursePurchased;

  constructor(event: CoursePurchased) {
    this._event = event;
  }

  get courseId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get buyer(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class WithdrawFunds extends ethereum.Event {
  get params(): WithdrawFunds__Params {
    return new WithdrawFunds__Params(this);
  }
}

export class WithdrawFunds__Params {
  _event: WithdrawFunds;

  constructor(event: WithdrawFunds) {
    this._event = event;
  }

  get toAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get success(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class Marketplace__s_allCoursesResultAuthorStruct extends ethereum.Tuple {
  get id(): Bytes {
    return this[0].toBytes();
  }

  get _address(): Address {
    return this[1].toAddress();
  }

  get rewardPercentage(): i32 {
    return this[2].toI32();
  }
}

export class Marketplace__s_allCoursesResult {
  value0: Bytes;
  value1: Marketplace__s_allCoursesResultAuthorStruct;
  value2: i32;

  constructor(
    value0: Bytes,
    value1: Marketplace__s_allCoursesResultAuthorStruct,
    value2: i32
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromTuple(this.value1));
    map.set(
      "value2",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value2))
    );
    return map;
  }

  getId(): Bytes {
    return this.value0;
  }

  getAuthor(): Marketplace__s_allCoursesResultAuthorStruct {
    return this.value1;
  }

  getPurchaseStatus(): i32 {
    return this.value2;
  }
}

export class Marketplace extends ethereum.SmartContract {
  static bind(address: Address): Marketplace {
    return new Marketplace("Marketplace", address);
  }

  getContractOwner(): Address {
    let result = super.call(
      "getContractOwner",
      "getContractOwner():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getContractOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getContractOwner",
      "getContractOwner():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCourseAuthorPublishedCourses(authorAddress: Address): Array<Bytes> {
    let result = super.call(
      "getCourseAuthorPublishedCourses",
      "getCourseAuthorPublishedCourses(address):(bytes32[])",
      [ethereum.Value.fromAddress(authorAddress)]
    );

    return result[0].toBytesArray();
  }

  try_getCourseAuthorPublishedCourses(
    authorAddress: Address
  ): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall(
      "getCourseAuthorPublishedCourses",
      "getCourseAuthorPublishedCourses(address):(bytes32[])",
      [ethereum.Value.fromAddress(authorAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  getCourseStatus(courseId: Bytes): i32 {
    let result = super.call(
      "getCourseStatus",
      "getCourseStatus(bytes32):(uint8)",
      [ethereum.Value.fromFixedBytes(courseId)]
    );

    return result[0].toI32();
  }

  try_getCourseStatus(courseId: Bytes): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "getCourseStatus",
      "getCourseStatus(bytes32):(uint8)",
      [ethereum.Value.fromFixedBytes(courseId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  hasCourseAlreadyBeenBought(_address: Address, courseHashId: Bytes): boolean {
    let result = super.call(
      "hasCourseAlreadyBeenBought",
      "hasCourseAlreadyBeenBought(address,bytes32):(bool)",
      [
        ethereum.Value.fromAddress(_address),
        ethereum.Value.fromFixedBytes(courseHashId)
      ]
    );

    return result[0].toBoolean();
  }

  try_hasCourseAlreadyBeenBought(
    _address: Address,
    courseHashId: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "hasCourseAlreadyBeenBought",
      "hasCourseAlreadyBeenBought(address,bytes32):(bool)",
      [
        ethereum.Value.fromAddress(_address),
        ethereum.Value.fromFixedBytes(courseHashId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  s_allCourses(param0: Bytes): Marketplace__s_allCoursesResult {
    let result = super.call(
      "s_allCourses",
      "s_allCourses(bytes32):(bytes32,(bytes32,address,uint8),uint8)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return new Marketplace__s_allCoursesResult(
      result[0].toBytes(),
      changetype<Marketplace__s_allCoursesResultAuthorStruct>(
        result[1].toTuple()
      ),
      result[2].toI32()
    );
  }

  try_s_allCourses(
    param0: Bytes
  ): ethereum.CallResult<Marketplace__s_allCoursesResult> {
    let result = super.tryCall(
      "s_allCourses",
      "s_allCourses(bytes32):(bytes32,(bytes32,address,uint8),uint8)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Marketplace__s_allCoursesResult(
        value[0].toBytes(),
        changetype<Marketplace__s_allCoursesResultAuthorStruct>(
          value[1].toTuple()
        ),
        value[2].toI32()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ActivateCourseCall extends ethereum.Call {
  get inputs(): ActivateCourseCall__Inputs {
    return new ActivateCourseCall__Inputs(this);
  }

  get outputs(): ActivateCourseCall__Outputs {
    return new ActivateCourseCall__Outputs(this);
  }
}

export class ActivateCourseCall__Inputs {
  _call: ActivateCourseCall;

  constructor(call: ActivateCourseCall) {
    this._call = call;
  }

  get courseId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class ActivateCourseCall__Outputs {
  _call: ActivateCourseCall;

  constructor(call: ActivateCourseCall) {
    this._call = call;
  }
}

export class AddCourseCall extends ethereum.Call {
  get inputs(): AddCourseCall__Inputs {
    return new AddCourseCall__Inputs(this);
  }

  get outputs(): AddCourseCall__Outputs {
    return new AddCourseCall__Outputs(this);
  }
}

export class AddCourseCall__Inputs {
  _call: AddCourseCall;

  constructor(call: AddCourseCall) {
    this._call = call;
  }

  get id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class AddCourseCall__Outputs {
  _call: AddCourseCall;

  constructor(call: AddCourseCall) {
    this._call = call;
  }
}

export class AddCourseAuthorCall extends ethereum.Call {
  get inputs(): AddCourseAuthorCall__Inputs {
    return new AddCourseAuthorCall__Inputs(this);
  }

  get outputs(): AddCourseAuthorCall__Outputs {
    return new AddCourseAuthorCall__Outputs(this);
  }
}

export class AddCourseAuthorCall__Inputs {
  _call: AddCourseAuthorCall;

  constructor(call: AddCourseAuthorCall) {
    this._call = call;
  }

  get courseAuthorId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get courseAuthorAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get rewardPercentage(): i32 {
    return this._call.inputValues[2].value.toI32();
  }
}

export class AddCourseAuthorCall__Outputs {
  _call: AddCourseAuthorCall;

  constructor(call: AddCourseAuthorCall) {
    this._call = call;
  }
}

export class ChangeCourseAuthorAddressCall extends ethereum.Call {
  get inputs(): ChangeCourseAuthorAddressCall__Inputs {
    return new ChangeCourseAuthorAddressCall__Inputs(this);
  }

  get outputs(): ChangeCourseAuthorAddressCall__Outputs {
    return new ChangeCourseAuthorAddressCall__Outputs(this);
  }
}

export class ChangeCourseAuthorAddressCall__Inputs {
  _call: ChangeCourseAuthorAddressCall;

  constructor(call: ChangeCourseAuthorAddressCall) {
    this._call = call;
  }

  get newAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeCourseAuthorAddressCall__Outputs {
  _call: ChangeCourseAuthorAddressCall;

  constructor(call: ChangeCourseAuthorAddressCall) {
    this._call = call;
  }
}

export class DeactivateCourseCall extends ethereum.Call {
  get inputs(): DeactivateCourseCall__Inputs {
    return new DeactivateCourseCall__Inputs(this);
  }

  get outputs(): DeactivateCourseCall__Outputs {
    return new DeactivateCourseCall__Outputs(this);
  }
}

export class DeactivateCourseCall__Inputs {
  _call: DeactivateCourseCall;

  constructor(call: DeactivateCourseCall) {
    this._call = call;
  }

  get courseId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class DeactivateCourseCall__Outputs {
  _call: DeactivateCourseCall;

  constructor(call: DeactivateCourseCall) {
    this._call = call;
  }
}

export class PurchaseCourseCall extends ethereum.Call {
  get inputs(): PurchaseCourseCall__Inputs {
    return new PurchaseCourseCall__Inputs(this);
  }

  get outputs(): PurchaseCourseCall__Outputs {
    return new PurchaseCourseCall__Outputs(this);
  }
}

export class PurchaseCourseCall__Inputs {
  _call: PurchaseCourseCall;

  constructor(call: PurchaseCourseCall) {
    this._call = call;
  }

  get courseId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class PurchaseCourseCall__Outputs {
  _call: PurchaseCourseCall;

  constructor(call: PurchaseCourseCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newContractOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawMarketplaceFundsCall extends ethereum.Call {
  get inputs(): WithdrawMarketplaceFundsCall__Inputs {
    return new WithdrawMarketplaceFundsCall__Inputs(this);
  }

  get outputs(): WithdrawMarketplaceFundsCall__Outputs {
    return new WithdrawMarketplaceFundsCall__Outputs(this);
  }
}

export class WithdrawMarketplaceFundsCall__Inputs {
  _call: WithdrawMarketplaceFundsCall;

  constructor(call: WithdrawMarketplaceFundsCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawMarketplaceFundsCall__Outputs {
  _call: WithdrawMarketplaceFundsCall;

  constructor(call: WithdrawMarketplaceFundsCall) {
    this._call = call;
  }
}
