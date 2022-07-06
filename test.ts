export class Test {
  public GetFullName(ObjectMethod) {
    if (typeof ObjectMethod === 'function') {
      alert(ObjectMethod);
    }
  }
}
