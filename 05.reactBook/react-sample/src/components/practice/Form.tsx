export default function Form({ status = "empty" }) {
  if (status === "success") {
    return <h1> That's right !</h1>;
  }

  return (
    <div>
      <h2>City Quiz</h2>
      <p>In which city is there a ~~ ?</p>
      <form>
        <textarea disabled={status === "submitting"} />
        <br />
        <button disabled={status === "empty" || status === "submitting"}>
          submit
        </button>

        {status === "error" && <p> Try Again</p>}
      </form>
    </div>
  );
}
