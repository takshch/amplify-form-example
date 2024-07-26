import classNames from 'classnames';

const PreviousButton = ({
  onClick,
  disabled = false,
}: {
  onClick: () => void;
  disabled?: boolean;
}) => (
  <button
    className={classNames(
      'bg-white border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400',
      {
        'cursor-not-allowed': !disabled,
      }
    )}
    onClick={onClick}
  >
    Previous
  </button>
);

export default PreviousButton;
