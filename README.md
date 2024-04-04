## **FREE CUSTOMIZABLE FIVEM NOTIFICATION SYSTEM**

[Need Help?](https://discord.gg/NAyCazqb2Y )

A free and modern looking notification system for FiveM. With customizable Icons and Colors!

![Preview](https://forum-cfx-re.akamaized.net/original/5X/a/3/d/4/a3d4cbe79b74cd4a8ba24fd2bee43e54e2dd0d2d.png)

[**PREVIEW**](https://youtu.be/QcWDzXs2TKU?si=vR4v8IdI8oqrSqPh)

# Documentation

**How To Use**

Drag and drop the FiveM-Notify folder into your resources folder and just make sure that you start the resource!

**Developer Docs**

- Client Side Trigger

`exports['FiveM-Notify']:sendNotification('Title', 'Message', Type, 'Duration')`

- Server Side Trigger

`TriggerClientEvent('Notify:sendNotification', source, 'Title', 'Message', 'Type', 'Duration')`

**How To Add Custom Types**

Use a text editor of choice ([VSCode](https://code.visualstudio.com/download) would be best). Open the notificationTypes.js file.

![Types!](https://forum-cfx-re.akamaized.net/original/5X/4/3/1/0/4310599bad7444e3d648bc25b475be07d9dfd55e.png)

You will see this object. Only recomended to edit if you understand basic Javascript Objects. From there you can add on your own custom types. All icons are from Google Icons which is explained in the file and the colors use Hex Codes.
