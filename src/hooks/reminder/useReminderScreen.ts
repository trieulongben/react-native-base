// import {useEffect, useState} from 'react';
// import notifee, {
//   AlarmType,
//   AuthorizationStatus,
//   TimestampTrigger,
//   TriggerNotification,
//   TriggerType,
// } from '@notifee/react-native';
// import {isIosPlatform} from '@utils/checks';
// import {Linking} from 'react-native';
// import useReminder from './useReminder';

// export const useReminderScreen = () => {
//   const [reminders, setReminders] = useState<TriggerNotification[]>([]);

//   const {
//     isMorningReminderEnable,
//     isNightReminderEnable,
//     morningReminderTime,
//     nightReminderTime,
//     toggleReminder,
//     selectTime,
//   } = useReminder();

//   const retrieveReminders = async () => {
//     const result = await notifee.getTriggerNotifications();
//     setReminders(result);
//   };

//   useEffect(() => {
//     retrieveReminders();
//     _checkingPermission(false);
//   }, []);

//   const _checkingPermission = async (shouldOpenSetting: boolean = false) => {
//     const permission = await notifee.requestPermission();
//     if (permission.authorizationStatus === AuthorizationStatus.AUTHORIZED) {
//       console.log('Permission granted');
//     } else {
//       const isAndroid = !isIosPlatform;
//       if (!shouldOpenSetting) {
//         return;
//       }
//       if (isAndroid) {
//         await notifee.openAlarmPermissionSettings();
//       } else {
//         await Linking.openSettings();
//       }
//     }
//   };

//   const initReminders = async () => {
//     const date = new Date(Date.now());
//     date.setHours(11);
//     date.setMinutes(0);

//     // Create a time-based trigger
//     const trigger: TimestampTrigger = {
//       type: TriggerType.TIMESTAMP,
//       timestamp: date.getTime(), // fire at 11:10am (10 minutes before meeting)
//       alarmManager: {
//         type: AlarmType.SET_EXACT_AND_ALLOW_WHILE_IDLE,
//       },
//     };

//     // Create a trigger notification
//     await notifee.createTriggerNotification(
//       {
//         title: 'Meeting with Jane',
//         body: 'Today at 11:20am',
//         android: {
//           channelId: 'your-channel-id',
//         },
//       },
//       trigger,
//     );
//   };

//   return {
//     reminders,
//     isMorningReminderEnable,
//     isNightReminderEnable,
//     setReminders,
//     toggleReminder,
//     selectTime,
//     morningReminderTime,
//     nightReminderTime,
//     checkingPermission: _checkingPermission,
//   };
// };
