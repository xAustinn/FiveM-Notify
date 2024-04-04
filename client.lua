function sendNotification(title, message, type, duration, sound)
    SendNUIMessage({
        action = 'noti',
        title = title,
        message = message,
        type = type,
        duration = duration,
        sound = sound
    })
end

RegisterNetEvent('Notify:sendNotification')
AddEventHandler('Notify:sendNotification', function(title, message, type, duration, sound)
    sendNotification(title, message, type, duration, sound)
end)

Citizen.CreateThread(function()
    if Config.debugCmd == true then
        RegisterCommand('notify', function(source, args, rawCommand)
            sendNotification('Test Notification', 'This is a test message', args[1], 3500, true)
        end)
        TriggerEvent('chat:addSuggestion', '/notify', 'Test if notifications work', {
            { name = "Type", help = "type of notification" }
        })
    end
end)
