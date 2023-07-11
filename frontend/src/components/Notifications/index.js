
import { useEffect } from 'react';
import { useSnackbar } from 'notistack';

const Notifications = ({ notifications, notificationType }) => {

  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (!notifications) return;
    if (!Object.values(notifications).length) return;

    for (const notification of Object.values(notifications)) {
      if (notification) {
        enqueueSnackbar(notification, {
          // MEMO: @param {String} variant - one of alert types ('success', 'error', 'warning', 'info')
          variant: notificationType
        });
      } else {
        console.log('[notifications] notification => ', notification);
      }
    }
  }, [notifications, enqueueSnackbar, notificationType]);

  return (
    <></>
  );
};

export default Notifications;
