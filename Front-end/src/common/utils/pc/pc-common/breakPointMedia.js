// 定义断点配置
const breakpoints = {
  sm: '(max-width: 1100px)',
  md: '(min-width: 1100.1px)',
  lg: '(min-width: 1367px)',
  xl: '(min-width: 1700px)',
  xxl: '(min-width: 2200px)',

  // 特殊断点
  portrait: '(orientation: portrait)',    // 竖屏
  landscape: '(orientation: landscape)',  // 横屏
  darkMode: '(prefers-color-scheme: dark)' // 暗色模式
};

export class ScreenAdapter {
  constructor() {
    this.currentBreakpoint = null;
    this.mediaQueries = {};
    this.handlers = [];

    // 初始化所有断点的媒体查询
    for (const [name, query] of Object.entries(breakpoints)) {
      this.mediaQueries[name] = window.matchMedia(query);
    }

    // 监听窗口变化
    window.addEventListener('resize', this.handleResize.bind(this));

    // 初始检测
    this.detectBreakpoint();
  }

  // 检测当前活动的断点
  detectBreakpoint() {
    const activeBreakpoints = [];

    for (const [name, mq] of Object.entries(this.mediaQueries)) {
      if (mq.matches) {
        activeBreakpoints.push(name);
      }
    }

    // 确定主要断点 (按优先级)
    let newBreakpoint = null;
    const priority = ['xxl', 'xl', 'lg', 'md', 'sm'];
    for (const bp of priority) {
      if (activeBreakpoints.includes(bp)) {
        newBreakpoint = bp;
        break;
      }
    }

    // 如果断点发生变化，触发回调
    if (newBreakpoint !== this.currentBreakpoint) {
      const oldBreakpoint = this.currentBreakpoint;
      this.currentBreakpoint = newBreakpoint;
      this.triggerHandlers(oldBreakpoint, newBreakpoint);
    }

    return newBreakpoint;
  }

  // 处理窗口大小变化 (带防抖)
  handleResize() {
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer);
    }

    this.resizeTimer = setTimeout(() => {
      this.detectBreakpoint();
      this.resizeTimer = null;
    }, 100);
  }

  // 注册回调函数
  onBreakpointChange(callback) {
    this.handlers.push(callback);

    // 立即执行一次回调，传递当前状态
    if (this.currentBreakpoint) {
      callback(this.currentBreakpoint, null);
    }
  }

  // 触发所有回调
  triggerHandlers(oldBreakpoint, newBreakpoint) {
    this.handlers.forEach(handler => {
      handler(newBreakpoint, oldBreakpoint);
    });
  }

  // 检查特定断点是否激活
  isActive(breakpointName) {
    return this.mediaQueries[breakpointName]?.matches || false;
  }

  // 获取当前断点
  getCurrentBreakpoint() {
    return this.currentBreakpoint;
  }

  // 获取所有活动断点
  getActiveBreakpoints() {
    return Object.entries(this.mediaQueries)
      .filter(([_, mq]) => mq.matches)
      .map(([name]) => name);
  }
}