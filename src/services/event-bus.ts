class EventBus {
  listeners: Record<string, []>;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: object) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    (this.listeners[event] as object[]).push(callback);
  }

  off(event: string, callback: object) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    (this.listeners[event] as object[]) = this.listeners[event].filter(
      (listener: object) => listener !== callback
    );
  }

  emit(event: string, ...args: undefined[]) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(function(listener: (...args: undefined[])=> void) {
        listener(...args);
      });
    }
  }
}

export default EventBus
