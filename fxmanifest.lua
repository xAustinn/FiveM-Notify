fx_version 'cerulean'
game 'gta5'

author 'Austinn'
description 'Free FiveM notification system'
version '1.0.0'

ui_page 'ui/index.html'

shared_scripts {
    'config.lua'
}

client_scripts {
    'client.lua'
}

files {
    'ui/*'
}

export 'sendNotification'
