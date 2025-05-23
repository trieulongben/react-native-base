import { getStorageData, setStorageData, TStorageKey } from "@utils/storage";
import { useState } from "react";
import notifee, {
  RepeatFrequency,
  TimestampTrigger,
  TriggerType,
} from "@notifee/react-native";

export enum EReminderKey {
  MORNING = "morningReminder",
  NIGHT = "nightReminder",
}
export type TReminderEnableKey = Extract<
  TStorageKey,
  "morningReminder" | "nightReminder"
>;
export type TReminderTimeKey = Extract<
  TStorageKey,
  "morningReminderTime" | "nightReminderTime"
>;

const REMINDER_CHANNEL_ID = "reminder-channel-id";

const useNotification = () => {
  const requestPermission = async () => {
    await notifee.requestPermission();
  };

  const morningTitle = "Your core workout is today🔥";
  const morningText = "Exercise now for healthier and quieter sleep!";

  const morningPayload = {
    title: morningTitle,
    body: morningText,
  };

  const nightTitle = "Making sure you're staying strong!";
  const nightText = "Keep up the momentum to keep improving your sleep";

  const nightPayload = {
    title: nightTitle,
    body: nightText,
  };

  const createNotificationChannel = async () => {
    await notifee.createChannel({
      id: REMINDER_CHANNEL_ID,
      name: "Reminder",
    });
  };

  const createNotification = async (date: Date, isMorning: boolean) => {
    const payload = isMorning ? morningPayload : nightPayload;
    const id = isMorning ? "morning-reminder" : "night-reminder";
    // Create a time-based trigger
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
      repeatFrequency: RepeatFrequency.DAILY,
    };

    // Create a trigger notification
    await notifee.createTriggerNotification(
      {
        id,
        title: payload.title,
        body: payload.body,
        android: {
          channelId: REMINDER_CHANNEL_ID,
        },
      },
      trigger
    );
  };

  const modifyNotification = async (date: Date, isMorning: boolean) => {
    const id = isMorning ? "morning-reminder" : "night-reminder";
    await notifee.cancelTriggerNotification(id);
    await createNotification(date, isMorning);
  };

  const cancelNotification = async (isMorning: boolean) => {
    const id = isMorning ? "morning-reminder" : "night-reminder";
    await notifee.cancelTriggerNotification(id);
  };

  return {
    requestPermission,
    createNotification,
    modifyNotification,
    cancelNotification,
    createNotificationChannel,
  };
};

const useReminder = () => {
  const {
    requestPermission,
    createNotification,
    modifyNotification,
    cancelNotification,
    createNotificationChannel,
  } = useNotification();

  const stringToDate = (str: string) => {
    return new Date(str);
  };
  const initialMorningReminder = getStorageData("morningReminder") ?? false;
  const initialNightReminder = getStorageData("nightReminder") ?? false;
  const initialMorningReminderTime = stringToDate(
    getStorageData("morningReminderTime") ?? new Date().toISOString()
  );
  const initialNightReminderTime = stringToDate(
    getStorageData("nightReminderTime") ?? new Date().toISOString()
  );
  const [morningReminder, setMorningReminder] = useState(
    initialMorningReminder
  );
  const [morningReminderTime, setMorningReminderTime] = useState<Date>(
    initialMorningReminderTime
  );
  const [nightReminder, setNightReminder] = useState(initialNightReminder);
  const [nightReminderTime, setNightReminderTime] = useState<Date>(
    initialNightReminderTime
  );

  const dateToString = (date: Date) => {
    return date.toISOString();
  };

  const _handleToggleReminder = async (
    state: boolean,
    key: TReminderEnableKey
  ) => {
    await createNotificationChannel();
    await requestPermission();

    const isMorning = key === "morningReminder";
    const reminderTime = isMorning ? morningReminderTime : nightReminderTime;

    const setReminder = isMorning ? setMorningReminder : setNightReminder;

    setReminder(state);
    if (state) {
      createNotification(reminderTime, isMorning);
    } else {
      cancelNotification(isMorning);
    }

    setStorageData(key, state);
  };

  const _handleSelectTime = (date: Date, key: TReminderTimeKey) => {
    const isMorning = key === "morningReminderTime";
    const setReminderTime = isMorning
      ? setMorningReminderTime
      : setNightReminderTime;

    setReminderTime(date);
    modifyNotification(date, isMorning);
    setStorageData(key, dateToString(date));
  };

  return {
    isMorningReminderEnable: morningReminder,
    morningReminderTime,
    isNightReminderEnable: nightReminder,
    nightReminderTime,
    toggleReminder: _handleToggleReminder,
    selectTime: _handleSelectTime,
  };
};

export default useReminder;
