import notifee, { AndroidImportance, TriggerType } from '@notifee/react-native';

const requestNotificationPermission = async():Promise<void> => {
    await notifee.requestPermission();
}

const createNotificationChannel = async():Promise<string>=>{
    return await notifee.createChannel({
        id: "default",
        name:"Default",
        importance:AndroidImportance.HIGH
    })
}

export const displayNotification = async(title:string, body:string):Promise<void>=>{
    const channelId = await createNotificationChannel();

    await notifee.displayNotification({
        title,
        body,
        android:{
            channelId,
            pressAction:{
                id:'default'
            }
        },
    });

}

export const scheduleNotification = async (date:Date) =>{
    
}