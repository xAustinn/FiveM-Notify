## **FREE CUSTOMIZABLE FIVEM NOTIFICATION SYSTEM**

[Need Help?](https://discord.com/channels/1049007485966622770/1049036704905969684)

A free and modern looking notification system for FiveM. With customizable Icons and Colors!

![Preview](https://forum-cfx-re.akamaized.net/original/5X/8/0/1/d/801da90d8e17669e5b68ee750261da796cdb93ce.png)

[**PREVIEW**](https://youtu.be/QcWDzXs2TKU?si=vR4v8IdI8oqrSqPh)

# Documentation

**How To Use**

Drag and drop the FiveM-Notify folder into your resources folder and just make sure that you start the resource!

**Config**

`Config.debugCmd = false` - Disables test commands

`Config.debugCmd = true` - Enables test command (/notify)

`Config.usePosition = true` - Uses the Config.Position by default for every notification

`Config.Position = 'Right'` - Currently only supports Left & Right

**Developer Docs**

- Client Side Trigger

`exports['FiveM-Notify']:sendNotification('Title', 'Message', Type, 'Duration', Sound, 'Position')`

- Server Side Trigger

`TriggerClientEvent('Notify:sendNotification', source, 'Title', 'Message', 'Type', 'Duration', Sound, 'Position')`

- Sound should be true or false
- Currently the only supported positions are Left & Right. More coming soon, **ONLY WORKS WHEN** `Config.setPosition` **IS SET TO FALSE.**

**How To Add Custom Types**

Use a text editor of choice ([VSCode](https://code.visualstudio.com/download) would be best). Open the notificationTypes.js file.

![Types!](https://forum-cfx-re.akamaized.net/original/5X/4/3/1/0/4310599bad7444e3d648bc25b475be07d9dfd55e.png)

You will see this object. Only recomended to edit if you understand basic Javascript Objects. From there you can add on your own custom types. All icons are from Google Icons which is explained in the file and the colors use Hex Codes.
