function sendNotification(title, message, type, duration, sound, position)
    if Config.usePosition == false then
        position = position
    elseif position == nil or Config.usePosition == true then
        position = Config.Position
    end
    SendNUIMessage({
        action = 'noti',
        title = title,
        message = message,
        type = type,
        duration = duration,
        sound = sound,
        position = position
    })
end

RegisterNetEvent('Notify:sendNotification')
AddEventHandler('Notify:sendNotification', function(title, message, type, duration, sound, position)
    sendNotification(title, message, type, duration, sound, position)
end)

Citizen.CreateThread(function()
    if Config.debugCmd == true then
        RegisterCommand('notify', function(source, args, rawCommand)
            sendNotification('Test Notification', 'This is a test message', args[1], 3500, true, args[2])
        end)
        TriggerEvent('chat:addSuggestion', '/notify', 'Test if notifications work', {
            { name = "Type",     help = "type of notification" },
            { name = "Position", help = "Left or Right" }
        })
    end
end)
