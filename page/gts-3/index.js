const globalData = getApp()._options.globalData

Page({

  build() {
    hmUI.setStatusBarVisible(true)

    const text = hmUI.createWidget(hmUI.widget.TEXT,  {
      x: 0,
      y: 100,
      w: 390,
      h: 150,
      text_size: 36,
      color: 0xffffff,
      text_size: 36,
      align_h: hmUI.align.CENTER_H,
      text: 'Last Heartrate reading:'
    })

    const heart = hmSensor.createSensor(hmSensor.id.HEART)
    let lastHeart = heart.last

    const text1 = hmUI.createWidget(hmUI.widget.TEXT,  {
      x: 0,
      y: 250,
      w: 390,
      h: 150,
      text_size: 36,
      color: 0xffffff,
      text_size: 36,
      align_h: hmUI.align.CENTER_H,
      text: lastHeart
    })
  },

  
  onReady() {},

  onShow() {},

  onHide() {},

  onDestroy() {},
})
