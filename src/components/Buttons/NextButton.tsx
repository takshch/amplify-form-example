import classNames from "classnames";

const NextButton = ({ onClick, disabled = false }: { onClick: () => void, disabled?: boolean }) => (
  <button
    className={
      classNames("font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 ",
        {
          "bg-indigo-700 text-white hover:bg-purple-600 shadow focus:ring-indigo-400": !disabled,
          "bg-slate-200 text-slate-500 cursor-not-allowed": disabled,
        }
    )}
    onClick={onClick}
  >
    Next
  </button>
);

export default NextButton;
