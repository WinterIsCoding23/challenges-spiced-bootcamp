export default function BoxWithClassName({ isBlack }) {
  return (
    <div
      className={`box-with-classname${
        isBlack ? " box-with-classname--black" : ""
      }`}
    ></div>
  );
}

// not used, can be deleted