export const MyDialog = (props: any) => {
  const { dialogId } = props;
  const closeDialog = (event): void => {};
  return (
    <>
      <dialog id={dialogId}>
        ダイアログだよーん
        <br />
        <button
          onClick={() => closeDialog}
          className="close-dialog"
          type="button"
        >
          close dialog
        </button>
      </dialog>
      <button className="open-dialog" type="button">
        open dialog
      </button>
    </>
  );
};

export default MyDialog;
