export default function FormErrorP({ errorMsg, xtra }) {
  return (
    <p
      className={
        xtra +
        ' absolute text-r-400 text-btn-action font-medium tracking-wide pt-0.5'
      }
    >
      {errorMsg}
    </p>
  );
}
