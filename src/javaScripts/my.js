export default () => {
  const obj = {a: 1,  b: 2};
  const newObj= { ...obj, c: 3};
  console.log("This is modules", newObj);
}
