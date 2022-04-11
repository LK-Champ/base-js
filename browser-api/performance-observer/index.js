// 使用 PerformanceObserver 监听 fcp
if (PerformanceObserver){
  try {
    const type = 'paint';
    if ((PerformanceObserver.supportedEntryTypes || []).includes(type)) {
      const observer = new PerformanceObserver((entryList)=>{
        for(const entry of entryList.getEntriesByName('first-contentful-paint')){
          const { startTime, duration } = entry;
          console.log('[assets-load-monitor] PerformanceObserver fcp:', startTime+duration);
          
          // 上报startTime操作
        }
      });
      observer.observe({
        entryTypes: [type],
      });
    }
  } catch (e) {
    // ios 不支持这种entryTypes，会报错 https://caniuse.com/?search=PerformancePaintTiming
    console.warn('[assets-load-monitor] PerformanceObserver error:', (e || {}).message ? e.message : e);
  }
}