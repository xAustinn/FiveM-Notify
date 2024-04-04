function sendNotification(title, message, type, duration)
    SendNUIMessage({
        action = 'noti',
        title = title,
        message = message,
        type = type,
        duration = duration
    })
end

RegisterNetEvent('Notify:sendNotification')
AddEventHandler('Notify:sendNotification', function(title, message, type, duration)
    sendNotification(title, message, type, duration)
end)
