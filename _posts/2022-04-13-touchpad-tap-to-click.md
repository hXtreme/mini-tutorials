---
layout: post
title: "Enabling Tap-to-Click for System76 Gazelle Touchpad"
date: 2022-04-13
categories: tutorial fix hardware linux
---

Every now and then the touchpad on my System76 Gazelle stops working.
In particular, I'm still able to control the mouse but I can't tap-to-click and have to rely on using the physical buttons.

On investigation, there are a couple of things that can go wrong to cause this so let's diagnose them.

### Driver Issue

If an incorrect driver is loaded then it could lead to this problem.
The first step to check for is to just run `xinput --list` and
if you see a similar output then your drivers should be fine.

```sh
xinput --list
⎡ Virtual core pointer                    	id=2	[master pointer  (3)]
⎜   ↳ Virtual core XTEST pointer              	id=4	[slave  pointer  (2)]
⎜   ↳ ELAN0412:00 04F3:3162 Touchpad          	id=13	[slave  pointer  (2)]
⎜   ↳ ELAN0412:00 04F3:3162 Mouse             	id=12	[slave  pointer  (2)]
⎜   ↳ ...
⎣ Virtual core keyboard                   	id=3	[master keyboard (2)]
    ↳ Virtual core XTEST keyboard             	id=5	[slave  keyboard (3)]
    ↳ ...
```

If you want to investigate further then you can try checking `dmesg` the following is an example showing expected output.

```sh
sudo dmesg | grep "ELAN0412"
[   19.699132] input: ELAN0412:00 04F3:3162 Mouse as /devices/pci0000:00/0000:00:15.0/i2c_designware.0/i2c-1/i2c-ELAN0412:00/0018:04F3:3162.0001/input/input10
[   19.699181] input: ELAN0412:00 04F3:3162 Touchpad as /devices/pci0000:00/0000:00:15.0/i2c_designware.0/i2c-1/i2c-ELAN0412:00/0018:04F3:3162.0001/input/input12
[   19.699220] hid-generic 0018:04F3:3162.0001: input,hidraw0: I2C HID v1.00 Mouse [ELAN0412:00 04F3:3162] on i2c-ELAN0412:00
[   19.945346] input: ELAN0412:00 04F3:3162 Mouse as /devices/pci0000:00/0000:00:15.0/i2c_designware.0/i2c-1/i2c-ELAN0412:00/0018:04F3:3162.0001/input/input15
[   19.945389] input: ELAN0412:00 04F3:3162 Touchpad as /devices/pci0000:00/0000:00:15.0/i2c_designware.0/i2c-1/i2c-ELAN0412:00/0018:04F3:3162.0001/input/input17
[   19.945419] hid-multitouch 0018:04F3:3162.0001: input,hidraw0: I2C HID v1.00 Mouse [ELAN0412:00 04F3:3162] on i2c-ELAN0412:00
```

If you get something else that could indicate a driver or kernel or hardware issue.
For some examples of such issue refer:

+ [manjaro-forum](https://forum.manjaro.org/t/74132)
+ [reddit-post](https://www.reddit.com/r/EndeavourOS/comments/pdqpow)

in which case for a possible solution try:

+ [ask-ubuntu](https://askubuntu.com/questions/763584)

### Config Issue

There's also a good chance that the issue was introduced by a configuration issue.

You can check your configuration with:

```sh
synclient -l
```

In the output check to see if `TapButton1`, `TapButton2`, and `TapButton3` are set.
If they aren't, you can set them with:

```sh
synclient TapButton1=1 TapButton2=1 TapButton3=1
```

After this you should be able to tap-to-click using your touchpad.
