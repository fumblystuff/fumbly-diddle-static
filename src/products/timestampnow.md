---
title: Timestamp Now
description: A simple Windows Shell Extension that allows you to set a file or folder's Created, Modified, and/or Accessed date(s) to the current date and time.
platform: 
  - Windows
---

Have you ever needed a way to change one or more of the timestamps (Created, Modified, Accessed) to the current date/time (timestamp) on a Windows file or directory? Timestamp Now allows you to do that.

{% downloadButton "TimestampNow" "Free Download" %}

The application installs as a Windows Shell Extension, available in the Windows File Explorer context menu. Select one or more files and/or directories in Windows File Explorer, right click on any of the selected files, then choose **Timestamp Now...**.

{% image "src/images/timestampnow/windows-options-menu.png", "Windows File Explorer context menu", "image-full" %}

In the application window that opens, you control which file or directory timestamps the app updates and the format of the current time saved to file properties.

{% image "src/images/timestampnow/timestampnow-ui.png", "Timestamp Now UI", "image-full" %}

Regarding the timestamp options, the application allows you to optionally zero out the milliseconds and/or seconds of the current time written to the file or directory's properties.

| Option        | Description | 
| ------------- | ----------- |
| `##:##:##:##` | Use the full time value as the timestamp value. |
| `##:##:##:00` | Use the current time with milliseconds zeroed out. |
| `##:##:00:00` | Use the current time with seconds and milliseconds zeroed out. |

{% downloadButton "TimestampNow" "Free Download" %}

Go to the [Product Documentation](https://docs.fumblydiddle.com/timestampnow/){target="_blank"}.

## Releases

{% downloadTable "TimestampNow" %}
