---
title: Path Backup & Restore
description: A Windows utility for backing up and restoring the system's Path (System and User Path).
platform: 
  - Windows
---

Windows application installations modify your system's System Path and User Path variables, adding entries that allows the system to quickly find application executables when typed on a command line or launched arbitrarily from an application. Sometimes these processes corrupt your system's path which removes your ability to get things done.

<a href="https://fumblydiddle.b-cdn.net/pathbackup/PathBackupSetup-0.1.3.exe" class="button primary small" target="_blank">Download Now</a>

The **Path Backup & Restore** application allows you to quickly backup your Windows system's Path settings to a local file then restore the Path using the backup file later. The application supports backing up the system's path to:

+ Registry file (.reg)
+ JSON file (.json)
+ YAML file (.yaml)

When launched, the application displays the following screen:

{% image "src/images/pathbackup/app-home.png", "Path Backup home screen", "image-full" %}

Click the **Backup** button to back up the system path and the **Restore** to restore the system path from a backup file. 

When you click either button, the application prompts you to select the file type for the backup or restore operation as shown in the following figure:

{% image "src/images/pathbackup/backup-choices.png", "Path Backup options", "image-full" %}

Next, the application prompts you to select the target folder for the generated file. 

When restoring the path from a backup file, the process is the same; first you select the backup file type you want to restore then select the backup file to restore. The system automates restoring all of the path settings from the backup, overwriting existing settings.

The application also supports automated backup operation, allowing you to setup an application shortcut with your backup strategy's default settings, simply double-click the shortcut, answer Window's default security prompt, then the application creates the backup automatically using a generated backup file name.

<a href="https://fumblydiddle.b-cdn.net/pathbackup/PathBackupSetup-0.1.3.exe" class="button primary small" target="_blank">Download Now</a>

Go to the [Product Documentation](https://docs.fumblydiddle.com/pathbackup/){target="_blank"}.
