import { notification } from "antd";

export const spliteUrl = (url) => {
    let splitedUrl = url.split('/');
    return splitedUrl[splitedUrl.length - 2];
};

export const infoAction = (error_info) => {
    const openNotification = () => {
        notification.open({
            message: "Notification Title",
            description: error_info,
        });
    };
    openNotification();
};
