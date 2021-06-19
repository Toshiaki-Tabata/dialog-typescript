import ReactModal from 'react-modal';

interface Props {
  isOpen: boolean;
  onClose?: () => void;
}

export const MyDialog = (props: Props) => {
  const { isOpen, onClose } = props;

  const handleClose = () => {
    onClose?.();
  }
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}>
        ダイアログだよーん
        <br />
        <button
          onClick={() => handleClose()}
          className="close-dialog"
          type="button"
        >
          close dialog
        </button>
      </ReactModal>
    </>
  );
};

export default MyDialog;
