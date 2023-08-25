export default function die() {
  const roll = Math.floor(Math.random() * 6) + 1;
  return <h1>Die Roll: {roll} </h1>;
}
